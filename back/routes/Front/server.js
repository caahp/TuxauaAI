const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
 
const app = express();
 
app.use(bodyParser.json());
 
// Use as rotas definidas em routes.js
app.use('/', routes);
app.use(cors());
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});