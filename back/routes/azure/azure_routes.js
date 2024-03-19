const express = require('express');
const azureFunctions = require('./azure_functions');
const router = express.Router();
const azureApi = new azureFunctions();

// Rota para upload de arquivos
router.post('/upload/description', async (req, res) => {
    try {
        if (!req.body.image) {
            return res.status(400).json({ error: 'No image uploaded.' });
        }

        const result = await azureApi.detectDescription(req.body.image);

        res.json({ result });
    } catch (error) {
        console.error('Error processing the request:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

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

// Route for Azure Image Colors Detection
router.post('/colors', async (req, res) => {
    try {
        const result = await azureApi.detectColors(req.body);
        res.json({ result });
    } catch (error) {
        console.error('Error processing the request:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Route for Azure Image Description
router.post('/description', async (req, res) => {
    try {
        const result = await azureApi.detectDescriptionImageUrl(req.body);
        res.json({ result });
    } catch (error) {
        console.error('Error processing the request:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Route for Azure Image Objects Detection
router.post('/objects', async (req, res) => {
    try {
        const result = await azureApi.detectObjects(req.body);
        res.json({ result });
    } catch (error) {
        console.error('Error processing the request:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

module.exports = router;
