Fun with AI
=========

Fun with AI is an app with two modes:

1. Send plain-text prompts to GPT-3 using the OpenAI API and receive a response
2. Send images to the backend, where optical character recognition (OCR) is performed using TesseractJS's library and the result is sent to OpenAI's API for cleanup and final processing

## Demos

Sending a prompt:

!['Prompt flow'](https://raw.githubusercontent.com/andrewlpmcneill/shopify-frontend-intern-challenge/main/docs/gifs/prompt.gif?token=GHSAT0AAAAAABUL6VANRT5YAQB4VHQAT7O4YUBIYFQ)

Uploading an image for OCR text extraction and GPT-3 cleanup:

!['Image flow'](https://raw.githubusercontent.com/andrewlpmcneill/shopify-frontend-intern-challenge/main/docs/gifs/image.gif?token=GHSAT0AAAAAABUL6VAMA7N6ZRJSYRG26EJMYUBIZ6A)

GPT-3 generating a colour based on a prompt, and the app theme reflecting it to the user:

!['Colour change'](https://raw.githubusercontent.com/andrewlpmcneill/shopify-frontend-intern-challenge/main/docs/gifs/colour.gif?token=GHSAT0AAAAAABUL6VANP6TBJIAQSSTX7RL6YUBJCVQ)

The app is fully responsive and suitable for mobile devices: 

!['Mobile combined'](https://github.com/andrewlpmcneill/shopify-frontend-intern-challenge/blob/main/docs/gifs/mobileCombined.gif?raw=true)

## Stack

Front End
- React
- HTML
- CSS

Back End
- Node.js
- Express
- Multer
- TesseractJS

APIs
- OpenAI
- imgur

## Setup 

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
- OPENAI_API_KEY: Get an API key for free at [OpenAI](https://openai.com/api/)
- CLIENT_ID: Create an account at [imgur](https://imgur.com/) and register an application [here](https://api.imgur.com/oauth2/addclient)
3. Install dependencies: `npm i`
4. Run the Node.js server in the 'backend' directory: `npm run dev`
- Note: nodemon is used, so you should not have to restart your server
5. Run the React server in the 'frontend' directory: `npm start`
6. Visit `http://localhost:3000/`

## Credits

Built by [Andrew McNeill](https://github.com/andrewlpmcneill/)
