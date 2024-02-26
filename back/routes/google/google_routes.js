const express = require('express');
const GoogleAPI = require('./google_functions');
const router = express.Router();
const googleApi = new GoogleAPI();

// Rota de teste para /google/text
router.post('/text', async (req, res) => {
    try {
        const imageUrl = req.body.imageUrl;

        if (!imageUrl) {
            return res.status(400).json({ error: 'A URL da imagem é obrigatória no corpo da requisição.' });
        }
        const result = await googleApi.detectTextFromUrl(imageUrl);
        res.json({ result });
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

// colors
router.post('/colors', async (req, res) => {
    try {
        const fileName = req.body.fileName;
        await googleApi.detectColors(fileName);
        res.send('Color detection in progress.');
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

// landmarks
router.post('/landmarks', async (req, res) => {
    try {
        const fileName = req.body.fileName;
        await googleApi.detectLandmarks(fileName);
        res.send('Landmark detection in progress.');
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

// logos
router.post('/logos', async (req, res) => {
    try {
        const fileName = req.body.fileName;
        await googleApi.detectLogos(fileName);
        res.send('Logo detection in progress.');
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

// objects
router.post('/objects', async (req, res) => {
    try {
        const fileName = req.body.fileName;
        await googleApi.detectObjects(fileName);
        res.send('Object detection in progress.');
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

module.exports = router;
