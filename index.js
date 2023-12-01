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
            'I am going to give you some information about a user in JSON Format and give recommendations and a budget to meet their demands.' +
            'The unit for salary and savings Goal is in Dollars. The time period is in weeks. The expenses given are fixed and cannot be changed.' +
            'In addition, there is a description field to give more information about the user. Give a pure list first of their budget.' +
            'Then, in another paragraph, give advice and what the user can do and how to use the budget.',
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
