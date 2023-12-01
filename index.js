const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const cors = require('cors'); // Import the cors package

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

const openai = new OpenAI({
  apiKey: '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',
});

// Endpoint to handle OpenAI function
app.post('/openai', async (req, res) => {
  const userData = req.body; // User data received from the client (React app)

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            'Act as a financial analyst. ' +
            'I am going to give you some information about me in JSON Format' +
            'The unit for salary and savings Goal is in Dollars and is over a year. The time period is in weeks. The expenses are expenses during this time' +
            'In addition, there is a description field to give more information about me. ' +
            'I want you to analyze all the data and rate how well I has created a budget on the following criteria: ' +
            'Percentage of Salary Saved, How necessary expenses are and if they can be cut down.' + 
            'I want you to take into account any personal data I entered in the description in your evaluation' +
            'Make your response informative, accurate, but do not be afraid to be funny as well!' +

            'For the format of your response. I want the first line to be "Rating Score: " and the score (out of 100%) [Give 1 line space]' +
            'Next Paragraph: I want you to give specific reasoning based on my data why you gave this score [Give 1 line space] ' +
            'Finally, I want you to give specific and actionable advice on what I can do to improve my score'
            ,
        },
        {
          role: 'user',
          content: JSON.stringify(userData), // Sending received user data to OpenAI
        },
      ],
      model: 'gpt-3.5-turbo-1106',
      // response_format: { type: 'json_object' },
    });

    const result = completion.choices[0].message.content;
    res.json({ result }); // Sending the result back to the client (React app)
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' }); // Handle error cases
  }
});

app.get('*', (req, res) => {
  res.status(404).send('404: Page not found');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
