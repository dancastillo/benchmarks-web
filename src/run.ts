import autocannon, { Result } from 'autocannon';
import { fork } from 'child_process';
import { AutocannonOpts, benchmark } from './benchmark';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getServers } from './utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const testFolder = join(__dirname, 'servers/');

export const run = async (list: string | string[], connections: number, pipelining: number, duration: number) => {
  const servers = getServers(testFolder, list);

  for (const server of servers) {
    const svr = join(testFolder, server);
    const forked = fork(svr);

    // wait for server to start up
    await new Promise(f => setTimeout(f, 1000));

    const opts: AutocannonOpts = {
      connections,
      pipelining,
      duration
    };

    const results: Result = await benchmark(opts);

    // log to console
    console.log(autocannon.printResult(results));

    forked.kill('SIGINT')
    // wait for server to be killed
    await new Promise(f => setTimeout(f, 1000));
  }

}