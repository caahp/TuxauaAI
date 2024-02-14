const express = require('express');
const bodyParser = require('body-parser');
const GoogleAPI = require('./path/to/GoogleAPI');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const googleApi = new GoogleAPI();

// POST Routes

// text
app.post('/text', (req, res) => {
    const fileName = req.body.fileName;
    googleApi.detectText(fileName);
    res.send('Text recognition in progress.');
});

// colors
app.post('/colors', (req, res) => {
    const fileName = req.body.fileName;
    googleApi.detectColors(fileName);
    res.send('Color detection in progress.');
});

// landmarks
app.post('/landmarks', (req, res) => {
    const fileName = req.body.fileName;
    googleApi.detectLandmarks(fileName);
    res.send('Landmark detection in progress.');
});

// logos
app.post('/logos', (req, res) => {
    const fileName = req.body.fileName;
    googleApi.detectLogos(fileName);
    res.send('Logo detection in progress.');
});

// objects
app.post('/objects', (req, res) => {
    const fileName = req.body.fileName;
    googleApi.detectObjects(fileName);
    res.send('Object detection in progress.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
