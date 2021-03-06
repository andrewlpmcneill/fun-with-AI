const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 8080;
const ENVIRONMENT = 'dev';
const app = express();

//import routes
const promptsRoutes  = require("./routes/prompts");
const uploadRoutes = require("./routes/upload");

// middleware setup
app.use(morgan(ENVIRONMENT));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

// routes
app.use('/prompts', promptsRoutes);
app.use('/upload', uploadRoutes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));