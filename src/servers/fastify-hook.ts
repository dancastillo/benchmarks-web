import fastify from 'fastify';

const app = fastify();

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

app.addHook('preHandler', (req, reply, done) => {
  // some code
  done()
});

app.get('/', schema, function (req, reply) {
  reply.send({ hello: 'world' })
});

app.listen({ port: 3000 });
console.log('FASTIFY listening on http://localhost:3000');