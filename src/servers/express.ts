import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.json({ hello: 'world' });
});

app.listen(3000);

console.log('EXPRESS listening on http://localhost:3000');
