import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (_, res) => {
  res.json({ hello: 'world' });
});

app.listen(3000);

console.log('EXPRESS MIDDLEWARE listening on http://localhost:3000');
