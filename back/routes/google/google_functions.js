const { ImageAnnotatorClient } = require('@google-cloud/vision');
const axios = require('axios');
const fs = require('fs');

class GoogleAPI {
    constructor() {
        this.client = new ImageAnnotatorClient({ keyFilename: './keys/tuxaua-ai-5a679101d09f.json' });
    }

    async detectTextFromUrl(imageUrl) {
        try {
            // Faz a requisição HTTP para a URL da imagem
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

            // Converte a resposta para base64
            const base64Image = Buffer.from(response.data, 'binary').toString('base64');

            // Chama a função de detecção de texto usando a imagem em base64
            const result = await this.detectText(base64Image);

            return result;
        } catch (error) {
            console.error('Erro ao obter imagem da URL:', error);
            throw new Error('Erro ao obter imagem da URL.');
        }
    }

    async detectText(image) {
        try {
            const [result] = await this.client.textDetection({
                image: { content: image },
            });

            const detections = result.textAnnotations;
            console.log('Text:');
            detections.forEach(text => console.log(text.description));

            return detections;
        } catch (error) {
            console.error('Erro ao detectar texto:', error);
            throw new Error('Erro ao detectar texto.');
        }
    }

    async detectColors(fileName) {
        const [result] = await this.client.imageProperties(fileName);
        const colors = result.imagePropertiesAnnotation.dominantColors.colors;
        console.log('Colors:');
        colors.forEach(color => console.log(color));
    }

    async detectLandmarks(fileName) {
        const [result] = await this.client.landmarkDetection(fileName);
        const landmarks = result.landmarkAnnotations;
        console.log('Landmarks:');
        landmarks.forEach(landmark => console.log(landmark));
    }

    async detectLogos(fileName) {
        const [result] = await this.client.logoDetection(fileName);
        const logos = result.logoAnnotations;
        console.log('Logos:');
        logos.forEach(logo => console.log(logo));
    }

    async detectObjects(fileName) {
        const request = {
            image: { content: fs.readFileSync(fileName) },
        };
        try {
            const [result] = await this.client.objectLocalization(request);
            const objects = result.localizedObjectAnnotations;

            objects.forEach((object) => {
                console.log(`Name: ${object.name}`);
                console.log(`Confidence: ${object.score}`);
                const vertices = object.boundingPoly.normalizedVertices;
                vertices.forEach((v) => console.log(`x: ${v.x}, y:${v.y}`));
            });
        } catch (error) {
            console.error("Error processing image:", error.message);
        }
    }
}

module.exports = GoogleAPI;
