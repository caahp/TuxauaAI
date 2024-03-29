const request = require('request');
const Keys = require('../../keys/azure-keys.json');

class AzureFunctions {
    constructor() {
        this.key = Keys.key;
        this.endpoint = Keys.endpoint;
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

    async detectDescription(imageBase64) {
        if (!imageBase64) {
            throw new Error('Image base64 data is required in the request body.');
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
            body: JSON.stringify({ 'url': '' }),
            headers: {
                'Content-Type': 'application/octet-stream',
                'Ocp-Apim-Subscription-Key': this.key
            },
            encoding: null, 
            body: Buffer.from(imageBase64, 'base64') 
        };
    
        return new Promise((resolve, reject) => {
            request.post(options, (error, response, responseBody) => {
                if (error) {
                    console.log('Error: ', error);
                    reject('Internal server error.');
                }
    
                const list = [];
                const jsonResponse = JSON.parse(responseBody);
                if (jsonResponse.error) {
                    list.push('Não foi possível obter uma descrição');
                    resolve(list);
                } else {
                    list.push(jsonResponse.description.captions[0].text);
                    list.push('Confidence: ' + jsonResponse.description.captions[0].confidence);
                    resolve(list);
                }
            });
        });
    }

    async detectDescriptionImageUrl(body){
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
