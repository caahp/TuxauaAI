const request = require('request');

class AzureFunctions {
    constructor() {
        this.key = '00ac08b016b04a3b9a2f1c53b04613ec';
        this.endpoint = 'https://tuxaua.cognitiveservices.azure.com/';
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
}

module.exports = AzureFunctions;
