const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const googleRoutes = require('./routes/google/google_routes');
const azureRoutes = require('./routes/azure/azure_routes');

const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/google', googleRoutes);
app.use('/azure', azureRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
