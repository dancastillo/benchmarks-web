import minimist from 'minimist';
import { run } from './run';

const start = async () => {
  try {
    const argv = minimist(process.argv);
    const connections: number = Number(argv.c) || 10;
    const pipelining: number = Number(argv.p) || 1;
    const duration: number = Number(argv.d) || 10;
    const list: string|string[] = argv.l || 'all';

    await run(list, connections, pipelining, duration);
  } catch (err) {
    throw err;
  }
}

start();
