const { ImageAnnotatorClient } = require('@google-cloud/vision');
const client = new ImageAnnotatorClient({ keyFilename: './keys/tuxaua-ai-5a679101d09f.json' });

const fs = require('fs');

//const fileName = './images/moscow_small.jpeg';



///////////////////////////////////////////////////////DETECTAR TEXTO DA IMAGEM

// const fileName = './images/que-es-lorem-ipsum-1024x538.jpg';

// async function detectText() {
//   try {
//     const [result] = await client.textDetection(fileName);
//     const detections = result.textAnnotations;

//     console.log('Text:');
//     detections.forEach(text => console.log(text.description));
//   } catch (error) {
//     console.error('Error processing image:', error.message);
//   }
// }

// detectText();


////////////////////////////////////////////////////DETECTAR CORES DA IMAGEM

// const fileName = './images/moscow_small.jpeg';

// async function detectColors() {
//   try {
//     const [result] = await client.imageProperties(fileName);
//     const colors = result.imagePropertiesAnnotation.dominantColors.colors;

//     console.log('Cores: ')
//     colors.forEach(color => console.log(color));
//   }
//   catch (error){
//     console.error('Error processing image:', error.message);
//   }
// }

// detectColors();



////////////////////////////////////////////////////ESSE AQUI NAO TANKOU

// const fileName = './images/moscow_small.jpeg';

// async function detectarPontosdeReferencia() {
//   try {
//     const [result] = await client.landmarkDetection(fileName);
//     const landmarks = result.landmarkAnnotations;

//     console.log('Landmarks:');
//     landmarks.forEach(landmark => console.log(landmark));
//   }
//   catch (error){
//     console.error('Error processing image:', error.message);
//   }
// }

// detectarPontosdeReferencia();

/////////////////////////////////////////////////DETECTAR LOGOTIPOS

//TESTE 1
// const fileName = './images/Google-Symbol.png';

// async function detectarLogotipos() {
//   try {
//     const [result] = await client.logoDetection(fileName);
//     const logos = result.logoAnnotations;

//     console.log('Logos:');
//     logos.forEach(logo => console.log(logo));
//   } catch (error) {
//     console.error("Error processing image:", error.message);
//   }
// }

// detectarLogotipos();

//TESTE 2

// const fileName = './images/microsoft.png';

// async function detectarLogotipos() {
//   try {
//     const [result] = await client.logoDetection(fileName);
//     const logos = result.logoAnnotations;

//     console.log('Logos:');
//     logos.forEach(logo => console.log(logo));
//   } catch (error) {
//     console.error("Error processing image:", error.message);
//   }
// }

// detectarLogotipos();

/////////////////////////////////////////////////DETECTAR OBJETOS

const fileName = "./images/bicycle_original.jpeg";

async function detectarObjetos() {
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

detectarObjetos();


// mail: tuxaua-ai@tuxaua-ai.iam.gserviceaccount.com
