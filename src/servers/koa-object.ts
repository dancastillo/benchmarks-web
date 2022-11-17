import Koa from 'koa';
import koaRouter from 'koa-router';
import { Engineer } from '../utils';

const app = new Koa()
const router = koaRouter();

router.get('/', async function (ctx) {
  const jobs = []

  for (let i = 0; i < 200; i += 1) {
    jobs[i] = new Engineer({
      id: i,
      title: 'Software Engineer',
      favorite: 'Koa'
    });
  }

  ctx.body = jobs;
});

app.use(router.routes())
app.listen(3000)
console.log('KOA OBJECT listening on http://localhost:3000');