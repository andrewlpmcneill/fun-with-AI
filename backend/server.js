const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 8080;
const ENVIRONMENT = 'dev';
const app = express();

//import routes
const promptsRoutes  = require("./routes/prompts");

// middleware setup
app.use(morgan(ENVIRONMENT));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// routes
app.use('/prompts', promptsRoutes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));