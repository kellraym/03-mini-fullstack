const express = require('express');
const cors = require("cors");
const app = express()
const port = 3001;
var fs = require('fs');
const locallyStoredInputs = '../Local-storage/Database.json';

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/cheatsheet', (req, res) => {
  if(!req.body.name || !req.body.description) {
  res.status(404).send('Try Again!')
  } else {
    fs.readFile(locallyStoredInputs, 'utf8', (err, data) => {
      if (err) {
        throw(err)
      } else {
        const currentList =JSON.parse(data)
        const inputs = req.body
        currentList.push(inputs)

        fs.writeFile(locallyStoredInputs, JSON.stringify(currentList, null, 4) ,(err) => {
          if (err) console.log(err)
        })
      }
    })
  }
})


app.listen(port, () => console.log(`Listening on localhost:${port}`))