const Nes    = require('nes');
const Hapi   = require('hapi');
const Routes = require('./routes')

const server = new Hapi.Server({ port: 3000, host: 'localhost' });

const start = async () => {

  await server.register(Nes);

  // Set up each route
  Routes.forEach( route => server.route(route) );

  // Start the server
  try {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  }
  catch (err) {
    console.log('Error: ', err);
  }
};

start();
