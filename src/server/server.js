const express = require('express');
const cors = require("cors");
const app = express()
const port = 3001;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.listen(port, () => console.log(`Listening on localhost:${port}`))