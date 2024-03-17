const express = require('express');
const GoogleAPI = require('./google_functions');
const router = express.Router();
const googleApi = new GoogleAPI();

// Rotas /google/text
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

// Rotas /google/colors
router.post('/colors', async (req, res) => {
    try {
        const imageUrl = req.body.imageUrl;

        if (!imageUrl) {
            return res.status(400).json({ error: 'A URL da imagem é obrigatória no corpo da requisição.' });
        }
        const result = await googleApi.detectColorsFromUrl(imageUrl);
        res.json({ result });
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

// Rotas /google/objects
router.post('/objects', async (req, res) => {
    try {
        const imageUrl = req.body.imageUrl;

        if (!imageUrl) {
            return res.status(400).json({ error: 'A URL da imagem é obrigatória no corpo da requisição.' });
        }
        const result = await googleApi.detectObjectsFromUrl(imageUrl);
        res.json({ result });
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

// Rotas /google/faces
router.post('/faces', async (req, res) => {
    try {
        const imageUrl = req.body.imageUrl;

        if (!imageUrl) {
            return res.status(400).json({ error: 'A URL da imagem é obrigatória no corpo da requisição.' });
        }
        const result = await googleApi.detectFacesFromUrl(imageUrl);
        res.json({ result });
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

// Rotas /google/labels
router.post('/labels', async (req, res) => {
    try {
        const imageUrl = req.body.imageUrl;

        if (!imageUrl) {
            return res.status(400).json({ error: 'A URL da imagem é obrigatória no corpo da requisição.' });
        }
        const result = await googleApi.detectLabelsFromUrl(imageUrl);
        res.json({ result });
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

// Rotas /google/landmarks
router.post('/landmarks', async (req, res) => {
    try {
        const imageUrl = req.body.imageUrl;


        if (!imageUrl) {
            return res.status(400).json({ error: 'A URL da imagem é obrigatória no corpo da requisição.' });
        }
        const result = await googleApi.detectLandmarksFromUrl(imageUrl);
        res.json({ result });
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

// Rotas /google/logos
router.post('/logos', async (req, res) => {
    try {
        const imageUrl = req.body.imageUrl;

        if (!imageUrl) {
            return res.status(400).json({ error: 'A URL da imagem é obrigatória no corpo da requisição.' });
        }
        const result = await googleApi.detectLogosFromUrl(imageUrl);
        res.json({ result });
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

module.exports = router;
