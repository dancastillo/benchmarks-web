import fastify from 'fastify';
import { Engineer } from '../utils';

const app = fastify();

const opts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            title: { type: 'string' },
            employer: { type: 'string' }
          }
        }
      }
    }
  }
}

app.get('/', opts, (request, reply) =>{
  const jobs = []

  for (let i = 0; i < 200; i += 1) {
    jobs[i] = new Engineer({
      id: i,
      title: 'Software Engineer',
      favorite: 'Fastify'
    });
  }

  reply.send(jobs);
})

app.listen({ port: 3000 });
console.log('FASTIFY BIG OBJECT listening on http://localhost:3000');