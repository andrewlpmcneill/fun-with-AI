/* eslint-disable camelcase */
const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const { ImgurClient } = require('imgur');
const { createWorker } = require('tesseract.js');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

const client = new ImgurClient({ clientId: process.env.CLIENT_ID });
const worker = createWorker();
const url = "https://api.openai.com/v1/engines/text-curie-001/completions";
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  }
};

// routes
router.post('/', upload.single('file'), async(req, res) => {

  const response = await client.upload({
    image: req.file.buffer,
    title: 'example'
  });

  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(response.data.link);
  const link = response.data.link;
  console.log(text);
  const data = {
    prompt: 'Correct this to standard English: ' + text,
    temperature: 0,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };
  
  axios.post(url, data, config)
    .then(response => {
      console.log(response.data.choices[0].text);
      res.end(JSON.stringify({ data: response.data.choices[0].text, original: text, link: link }));
    });
  
  // await worker.terminate();

});

module.exports = router;