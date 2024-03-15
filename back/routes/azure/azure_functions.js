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

    async detectDescription(body){
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
                console.log('JSON Response\n', jsonResponse);
                resolve(jsonResponse);
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
