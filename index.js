const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const cors = require('cors'); 
const { MongoClient, ObjectId } = require('mongodb');
const connectToDatabase = require('./db');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const collectionName = 'myCollection' // Replace with your collection name

const openai = new OpenAI({
  apiKey: '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', // Replace with your OPENAI API Key
});

app.post('/openai', async (req, res) => {
  const userData = req.body; 

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
          content: JSON.stringify(userData), 
        },
      ],
      model: 'gpt-3.5-turbo-1106',
    });

    const result = completion.choices[0].message.content;
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' }); 
  }
});

app.post('/openai/image', async (req, res) => {
  const userData = req.body; 
  const { salary, savingsGoal, timePeriod, expenses, description} = userData;
    
  prompt =  `Generate an image for this information about a user: user description: ${description}, `
  
  const numberOfImages = 1;
  const imageSize = "1024x1024";
  
    try {
      const imageGenaration = await openai.images.generate(	
        {
          model: "dall-e-3",
          prompt: prompt,
          n: numberOfImages,
          size: imageSize
        
        });
  
      const image_url = imageGenaration.data[0].url; 
      res.json({ image_url: image_url }); 
  
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });

app.post('/putData', async (req, res) => {
  try {
    const db = await connectToDatabase(); 
    const collection = db.collection(collectionName);
    const newData = req.body;
    const insertResult = await collection.insertOne(newData);
    
    if (insertResult.acknowledged) {
      res.json({ message: 'Data inserted successfully', insertedId: insertResult.insertedId });
    } else {
      res.status(500).json({ error: 'Failed to insert data' });
    }    
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/getData', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    const userQuery = req.query; 
    const result = await collection.find(userQuery).toArray();

    res.json({ data: result }); 
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving data' });
  }
});

app.delete('/deleteData/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    const objectId = new ObjectId(id);
    const result = await collection.deleteOne({ _id: objectId });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: 'Deletion successful' });
    } else {
      res.status(404).json({ message: 'Document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting data' });
  }
});


app.get('*', (req, res) => {
  res.status(404).send('404: Page not found');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});