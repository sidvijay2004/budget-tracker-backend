const axios = require('axios');

// Set up your OpenAI API key
const apiKey = 'YOUR_OPENAI_API_KEY';
const endpoint = 'https://api.openai.com/v1/engines/davinci/completions';

// Data you want to input to the API
const data = {
  prompt: "Once upon a time",
  max_tokens: 50
};

// Send a POST request to the OpenAI API
axios.post(endpoint, data, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  }
})
  .then(response => {
    console.log('OpenAI API Response:', response.data.choices[0].text);
  })
  .catch(error => {
    console.error('Error:', error);
  });
