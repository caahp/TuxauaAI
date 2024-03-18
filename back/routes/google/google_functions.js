const { ImageAnnotatorClient } = require('@google-cloud/vision');
const axios = require('axios');
const fs = require('fs');

class GoogleAPI {
    constructor() {
        this.client = new ImageAnnotatorClient({ keyFilename: './keys/tuxaua-ai-5a679101d09f.json' });
    }

    async detectTextFromUrl(imageUrl) {
        try {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const base64Image = Buffer.from(response.data, 'binary').toString('base64');
            const result = await this.detectText(base64Image);
            if (result.length === 0){
                return ['Nenhum texto detectado.']
            }
            const list = []
            list.push(result[0].description)
            const locale = 'language: ' + result[0].locale
            list.push(locale)
            return list;
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
            return detections;
        } catch (error) {
            console.error('Erro ao detectar texto:', error);
            throw new Error('Erro ao detectar texto.');
        }
    }

    async detectColors(image){
        try {
            const [result] = await this.client.imageProperties({
                image: { content: image },
            });
            const colors = result.imagePropertiesAnnotation.dominantColors.colors;
            console.log('Colors:');
            colors.forEach(color => console.log(color));

            return colors;
        } catch (error) {
            console.error('Erro ao detectar cores:', error);
            throw new Error('Erro ao detectar cores.');
        }
    }

    async detectColorsFromUrl(imageUrl) {
        try {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const base64Image = Buffer.from(response.data, 'binary').toString('base64');
            const result = await this.detectColors(base64Image);

            return result;
        } catch (error) {
            console.error('Erro ao obter imagem da URL:', error);
            throw new Error('Erro ao obter imagem da URL.');
        }
    }

   async detectObjects(image){
        try {
            const request = {
                image: { content: image },
            };
            const [result] = await this.client.objectLocalization(request);
            const objects = result.localizedObjectAnnotations;
            
            objects.forEach((object) => {
                console.log(`Name: ${object.name}`);
                console.log(`Confidence: ${object.score}`);
                const vertices = object.boundingPoly.normalizedVertices;
                vertices.forEach((v) => console.log(`x: ${v.x}, y:${v.y}`));
            });

            return objects;
        } catch (error) {
            console.error('Erro ao detectar objetos:', error);
            throw new Error('Erro ao detectar objetos.');
        }
    }
   
    async detectObjectsFromUrl(imageUrl) {
        try {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' }); 
            const base64Image = Buffer.from(response.data, 'binary').toString('base64');
            const result = await this.detectObjects(base64Image);

            return result;
        } catch (error) {
            console.error('Erro ao obter imagem da URL:', error);
            throw new Error('Erro ao obter imagem da URL.');
        }
    }

    async detectFaces(image) {
        try {
            const [result] = await this.client.faceDetection({ image: { content: image } });
            const faces = result.faceAnnotations.map((face, index) => (
                `FACE ${index + 1}:\n` +
                `joyLikelihood: ${face.joyLikelihood}\n` +
                `sorrowLikelihood: ${face.sorrowLikelihood}\n` +
                `angerLikelihood: ${face.angerLikelihood}\n` +
                `surpriseLikelihood: ${face.surpriseLikelihood}\n` +
                `underExposedLikelihood: ${face.underExposedLikelihood}\n` +
                `blurredLikelihood: ${face.blurredLikelihood}\n` +
                `headwearLikelihood: ${face.headwearLikelihood}`
            ));
            return faces;
        } catch (error) {
            console.error('Error detecting faces:', error);
            throw new Error('Error detecting faces.');
        }
    }
    
    async detectFacesFromUrl(imageUrl) {
        try {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const base64Image = Buffer.from(response.data, 'binary').toString('base64');
            const result = await this.detectFaces(base64Image);
            if (result.length === 0){
                return ['Nenhum rosto detectado.']
            }
            return result;
        } catch (error) {
            console.error('Error obtaining image from URL:', error);
            throw new Error('Error obtaining image from URL.');
        }
    }

    async detectLabels(image) {
        try {
            const [result] = await this.client.labelDetection({ image: { content: image } });
            const labels = result.labelAnnotations;
            console.log('Labels:');
            labels.forEach(label => console.log(label.description));

            return labels;
        } catch (error) {
            console.error('Error detecting labels:', error);
            throw new Error('Error detecting labels.');
        }
    }

    async detectLabelsFromUrl(imageUrl) {
        try {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const base64Image = Buffer.from(response.data, 'binary').toString('base64');
            const result = await this.detectLabels(base64Image);

            return result;
        } catch (error) {
            console.error('Error obtaining image from URL:', error);
            throw new Error('Error obtaining image from URL.');
        }
    }

    async detectLandmarks(image) {
        try {
            const [result] = await this.client.landmarkDetection({ image: { content: image } });
            const landmarks = result.landmarkAnnotations;
            console.log('Landmarks:');
            landmarks.forEach(landmark => console.log(landmark.description));

            return landmarks;
        } catch (error) {
            console.error('Error detecting landmarks:', error);
            throw new Error('Error detecting landmarks.');
        }
    }

    async detectLandmarksFromUrl(imageUrl) {
        try {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const base64Image = Buffer.from(response.data, 'binary').toString('base64');
            const result = await this.detectLandmarks(base64Image);

            return result;
        } catch (error) {
            console.error('Error obtaining image from URL:', error);
            throw new Error('Error obtaining image from URL.');
        }
    }
    
    async detectLogos(image) {
        try {
            const [result] = await this.client.logoDetection({ image: { content: image } });
            const logos = result.logoAnnotations;
            logos.forEach(logo => console.log(logo.description));
            return logos;
        } catch (error) {
            console.error('Error detecting logos:', error);
            throw new Error('Error detecting logos.');
        }
    }

    async detectLogosFromUrl(imageUrl) {
        try {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const base64Image = Buffer.from(response.data, 'binary').toString('base64');
            const result = await this.detectLogos(base64Image);
            if (result.length === 0){
                return ['Nenhum logo detectado.']
            }
            const description = result[0].description
            return [description];
        } catch (error) {
            console.error('Error obtaining image from URL:', error);
            throw new Error('Error obtaining image from URL.');
        }
    }
}


module.exports = GoogleAPI;
