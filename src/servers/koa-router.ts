import Koa from 'koa';
import koaRouter from 'koa-router';

const app = new Koa()
const router = koaRouter();

router.get('/', async function (ctx) {
  ctx.body = { hello: 'world' }
})

app.use(router.routes())
app.listen(3000)
console.log('KOA ROUTER listening on http://localhost:3000');