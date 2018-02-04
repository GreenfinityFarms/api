module.exports = {
  method: 'GET',
  path: '/',
  config: {
    id: 'hello',
    handler: (request, h) => {
      return 'world!';
    }
  }
}
