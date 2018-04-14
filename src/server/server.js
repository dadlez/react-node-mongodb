const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('/hi', (req, res) => {
  res.send('HI THERE');
})

app.listen(8080, () => console.log('server on port 8080\nserving files from: ', path.resolve(__dirname, '../../dist')));