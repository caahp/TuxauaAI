const { ImageAnnotatorClient } = require('@google-cloud/vision');
const client = new ImageAnnotatorClient({ keyFilename: './keys/tuxaua-ai-5a679101d09f.json' });
const fs = require('fs');

class GoogleAPI {
    constructor() {
        this.client = new ImageAnnotatorClient({ keyFilename: './keys/tuxaua-ai-5a679101d09f.json' });
    }

    async detectText(fileName) {
        const [result] = await client.textDetection(fileName);
        const detections = result.textAnnotations;
        console.log('Text:');
        detections.forEach(text => console.log(text.description));
    }

    async detectColors(fileName) {
        const [result] = await client.imageProperties(fileName);
        const colors = result.imagePropertiesAnnotation.dominantColors.colors;
        console.log('Colors:');
        colors.forEach(color => console.log(color));
    }

    async detectLandmarks(fileName) {
        const [result] = await client.landmarkDetection(fileName);
        const landmarks = result.landmarkAnnotations;
        console.log('Landmarks:');
        landmarks.forEach(landmark => console.log(landmark));
    }

    async detectLogos(fileName) {
        const [result] = await client.logoDetection(fileName);
        const logos = result.logoAnnotations;
        console.log('Logos:');
        logos.forEach(logo => console.log(logo));
    }

    async detectObjects(fileName) {
        const request = {
            image: { content: fs.readFileSync(fileName) },
        };
        try {
            const [result] = await client.objectLocalization(request);
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
