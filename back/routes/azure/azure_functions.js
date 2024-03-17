const request = require('request');
const Keys = require('../../keys/azure-keys.json');

class AzureFunctions {
    constructor() {
        this.key = Keys.key;
        this.endpoint = Keys.endpoint;
    }

    async convertBase64ToURL(base64Image) {
        try {
            const binaryImage = atob(base64Image.split(',')[1]);
            
            const bytes = new Uint8Array(binaryImage.length);
            for (let i = 0; i < binaryImage.length; i++) {
                bytes[i] = binaryImage.charCodeAt(i);
            }

            const blob = new Blob([bytes], { type: 'image/webp' });
            const imageUrl = URL.createObjectURL(blob);
    
            return imageUrl;
        } catch (error) {
            console.error('Error converting base64 to URL:', error);
            throw new Error('Error converting base64 to URL.');
        }
    }

    async analyzeImageFromBody(body) {
        const imageUrl = body.imageUrl;

        if (!imageUrl) {
            throw new Error('Image URL is required in the request body.');
        }

        const uriBase = this.endpoint + 'vision/v3.1/analyze';

        // Request parameters.
        const params = {
            'visualFeatures': 'Categories,Description,Color',
            'details': '',
            'language': 'en'
        };

        const options = {
            uri: uriBase,
            qs: params,
            body: `{"url": "${imageUrl}"}`,
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': this.key
            }
        };

        return new Promise((resolve, reject) => {
            request.post(options, (error, response, responseBody) => {
                if (error) {
                    console.log('Error: ', error);
                    reject('Internal server error.');
                }

                const jsonResponse = JSON.parse(responseBody);
                console.log('JSON Response\n', jsonResponse);
                resolve(jsonResponse);
            });
        });
    }

    async detectColors(body){
        const imageUrl = body.imageUrl;
        

        if (!imageUrl) {
            throw new Error('Image URL is required in the request body.');
        }

        const uriBase = this.endpoint + 'vision/v3.1/analyze';

        // Request parameters.
        const params = {
            'visualFeatures': 'Color',
            'language': 'en'
        };

        const options = {
            uri: uriBase,
            qs: params,
            body: `{"url": "${imageUrl}"}`,
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': this.key
            }
        };

        return new Promise((resolve, reject) => {
            request.post(options, (error, response, responseBody) => {
                if (error) {
                    console.log('Error: ', error);
                    reject('Internal server error.');
                }

                const jsonResponse = JSON.parse(responseBody);
                console.log('JSON Response\n', jsonResponse);
                resolve(jsonResponse);
            });
        });
    }

    async detectDescription(body){
        //precisa converter o arquivo que vem na imageUrl para uma url
        const imageUrl = body.imageUrl;

        if (!imageUrl) {
            throw new Error('Image URL is required in the request body.');
        }

        const uriBase = this.endpoint + 'vision/v3.1/analyze';

        // Request parameters.
        const params = {
            'visualFeatures': 'Description',
            'language': 'en'
        };

        const options = {
            uri: uriBase,
            qs: params,
            body: `{"url": "${imageUrl}"}`,
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': this.key
            }
        };

        return new Promise((resolve, reject) => {
            request.post(options, (error, response, responseBody) => {
                if (error) {
                    console.log('Error: ', error);
                    reject('Internal server error.');
                }

                const jsonResponse = JSON.parse(responseBody);
                const list = [];
                list.push(jsonResponse.description.captions[0].text);
                list.push('confidence: ' + jsonResponse.description.captions[0].confidence);
                resolve(list);
            });
        });
    }

    async detectObjects(body){
        const imageUrl = body.imageUrl;

        if (!imageUrl) {
            throw new Error('Image URL is required in the request body.');
        }

        const uriBase = this.endpoint + 'vision/v3.1/analyze';

        // Request parameters.
        const params = {
            'visualFeatures': 'Objects',
            'language': 'en'
        };

        const options = {
            uri: uriBase,
            qs: params,
            body: `{"url": "${imageUrl}"}`,
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': this.key
            }
        };

        return new Promise((resolve, reject) => {
            request.post(options, (error, response, responseBody) => {
                if (error) {
                    console.log('Error: ', error);
                    reject('Internal server error.');
                }

                const jsonResponse = JSON.parse(responseBody);
                console.log('JSON Response\n', jsonResponse);
                resolve(jsonResponse);
            });
        });
    }
}

module.exports = AzureFunctions;
