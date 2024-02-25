const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Pasta onde os arquivos serão armazenados temporariamente
const request = require('request');
const { ImageAnnotatorClient } = require('@google-cloud/vision');
const fs = require('fs');
const key = '00ac08b016b04a3b9a2f1c53b04613ec';
const endpoint = 'https://tuxaua.cognitiveservices.azure.com/';
const uriBase = endpoint + 'vision/v3.1/analyze';
const client = new ImageAnnotatorClient({ keyFilename: './keys/tuxaua-ai-5a679101d09f.json' });
 
// Rota para análise de imagem usando a API da Microsoft

router.post('/analyzeImageMicrosoft', upload.single('image'), (req, res) => {
    const imageUrl = req.file.path; // Obter o caminho do arquivo enviado
     const params = {
        'visualFeatures': 'Categories,Description,Color',
        'details': '',
        'language': 'en'
    };
 
    const options = {
        uri: uriBase,
        qs: params,
        body: '{"url": ' + '"' + imageUrl + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': key
        }
    };
 
    request.post(options, (error, response, body) => {
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }
        let jsonResponse = JSON.parse(body);
        res.json(jsonResponse);
    });
});
 
// Rota para análise de imagem usando a API do Google

router.post('/analyzeImageGoogle', upload.single('image'), async (req, res) => {
    const imageUrl = req.file.path; // Obter o caminho do arquivo enviado
    try {
        const [result] = await client.textDetection(imageUrl);
        const detections = result.textAnnotations;
        console.log('Text:');
        detections.forEach(text => console.log(text.description));
        res.json(detections);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
 
module.exports = router;
