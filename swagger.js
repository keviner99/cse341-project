/*
I used this website as a guide to create this file 
https://www.npmjs.com/package/swagger-autogen
*/
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'cse341-my-project.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./routes/index.js');
// });


swaggerAutogen(outputFile, endpointsFiles, doc);