/* eslint-disable camelcase */
const express = require("express");
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

// openAI API constants
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  }
};

const selectEngine = selected => {

  switch (selected) {
  default:
    break;
  case "davinci":
    return "https://api.openai.com/v1/engines/text-davinci-002/completions";
  case "curie":
    return "https://api.openai.com/v1/engines/text-curie-001/completions";
  case "babbage":
    return "https://api.openai.com/v1/engines/text-babbage-001/completions";
  case "ada":
    return "https://api.openai.com/v1/engines/text-ada-001/completions";
  }

};

// routes
router.post('/', async(req, res) => {

  const url = selectEngine(req.body.engine);

  const data = {
    prompt: req.body.prompt,
    temperature: req.body.temperature,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  axios.post(url, data, config)
    .then(response => {
      console.log(response.data);
      res.end(response.data.choices[0].text);
    });
  
});

module.exports = router;