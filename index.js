const Nes    = require('nes');
const Hapi   = require('hapi');
const Routes = require('./routes')

const server = new Hapi.Server({ port: 3000, host: 'localhost' });

const start = async () => {

  // Register Middlewares //
  await server.register([
    {
      plugin: Nes
    },
    {
      plugin: require('good'),
      options: {
        ops: {
          interval: 1000
        },
        reporters: {
          myConsoleReporter: [{
              module: 'good-squeeze',
              name: 'Squeeze',
              args: [{ log: '*', response: '*' }]
          }, {
              module: 'good-console'
          }, 'stdout']
        }
      }
    }
  ]);

  // Setup routes //
  Routes.forEach( route => server.route(route) );

  // Start server //
  try {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  }
  catch (err) {
    console.log('Error: ', err);
  }
};

start();
