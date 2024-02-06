const { ImageAnnotatorClient } = require('@google-cloud/vision');
const client = new ImageAnnotatorClient({ keyFilename: './keys/tuxaua-ai-5a679101d09.json' });

const fileName = './images/eletrodomesticos.jpg';

async function detectText() {
  try {
    const [result] = await client.textDetection(fileName);
    const detections = result.textAnnotations;

    console.log('Text:');
    detections.forEach(text => console.log(text.description));
  } catch (error) {
    console.error('Error processing image:', error.message);
  }
}

detectText();


// mail: tuxaua-ai@tuxaua-ai.iam.gserviceaccount.com
