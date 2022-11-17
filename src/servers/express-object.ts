import express from 'express';
import cors from 'cors';
import { Engineer } from '../utils';

const app = express();

app.use(cors());

app.get('/', (_, res) => {
  const jobs = []

  for (let i = 0; i < 200; i += 1) {
    jobs[i] = new Engineer({
      id: i,
      title: 'Software Engineer',
      favorite: 'Express'
    });
  }

  res.json(jobs);
});

app.listen(3000);

console.log('EXPRESS OBJECT listening on http://localhost:3000');
