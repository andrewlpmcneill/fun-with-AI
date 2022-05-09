/* eslint-disable camelcase */
const express = require("express");
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

// openAI API constants
const url = "https://api.openai.com/v1/engines/text-curie-001/completions";
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  }
};

// routes
router.post('/', async(req, res) => {

  const data = {
    prompt: req.body.prompt,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  axios.post(url, data, config)
    .then(response => {
      console.log(response.data.choices[0].text);
      res.end(response.data.choices[0].text);
    });
  
});

module.exports = router;