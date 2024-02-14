const GoogleAPI = require('./google_routes');
const googleApi = new GoogleAPI();

// Router tester

googleApi.detectText('../../images/moscow_small.jpeg');
googleApi.detectColors('../../images/moscow_small.jpeg');
googleApi.detectLandmarks('../../images/moscow_small.jpeg');
googleApi.detectLogos('../../images/Google-Symbol.png');
googleApi.detectObjects('../../images/eletrodomesticos.jpg');
