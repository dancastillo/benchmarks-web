import Koa from 'koa';

const app: Koa = new Koa();

app.use(async function (ctx: Koa.Context) {
  ctx.body = { hello: 'world' };
});

app.listen(3000);
console.log('KOA listening on http://localhost:3000');