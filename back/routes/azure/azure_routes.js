const express = require('express');
const azureFunctions = require('./azure_functions');
const router = express.Router();
const azureApi = new azureFunctions();

// Route for Azure Image Analysis
router.post('/analyze', async (req, res) => {
    try {
        const result = await azureApi.analyzeImageFromBody(req.body);
        res.json({ result });
    } catch (error) {
        console.error('Error processing the request:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

module.exports = router;
