const fs = require('fs');
const { google } = require('googleapis');

// Configurações da API do Google Vision
const vision = google.vision('v1');
const client = new vision.ImageAnnotatorClient({
  keyFilename: 'credenciais.json', 
});

async function recognizeText(imagePath) {
  try {
    const imageContent = fs.readFileSync(imagePath).toString('base64');

    const [result] = await client.textDetection({ image: { content: imageContent } });
    const detections = result.textAnnotations;

    if (detections && detections.length > 0) {
      console.log('Texto reconhecido:');
      detections.forEach((text, index) => {
        console.log(`  ${index + 1}: ${text.description}`);
      });
    } else {
      console.log('Nenhum texto encontrado na imagem.');
    }
  } catch (error) {
    console.error('Erro ao processar a imagem:', error.message);
  }
}

const imagePath = '/back/images/eletrodomesticos.jpg';

recognizeText(imagePath);
