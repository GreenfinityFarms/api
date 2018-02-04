// Has to be ran from inside a browser

const Nes = require('nes');

var client = new Nes.Client('ws://localhost');

const start = async () => {

  try {

    await client.connect();
    const payload = await client.request('/h');  // Can also request '/h'
    // payload -> 'world!'
  }

  catch (err){

    console.log('Error: ', err);
  }
};

start();
