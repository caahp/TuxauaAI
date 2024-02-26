const express = require('express');
const bodyParser = require('body-parser');
const googleRoutes = require('./routes/google/google_routes');

const app = express();

app.use(bodyParser.json());

app.use('/google', googleRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
