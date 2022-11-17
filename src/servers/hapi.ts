import Hapi from '@hapi/hapi';

async function start () {
  const server = Hapi.server({ port: 3000 });

  server.route({
    method: 'GET',
    path: '/',
    handler: function () {
      return { hello: 'world' }
    },
    options: {
      cache: false,
    }
  });

  await server.start();
  console.log('HAPI listening on http://localhost:3000');
}

start();
