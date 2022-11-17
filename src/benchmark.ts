import autocannon, { Options, Result } from 'autocannon';

export interface AutocannonOpts {
  connections: number;
  pipelining: number;
  duration: number;
}

export const benchmark = async (opts: AutocannonOpts): Promise<Result> => new Promise((resolve, reject) => {
  const options: Options = {
    ...opts,
    url: 'http://localhost:3000',
  }

  autocannon(options, (err, result) => {
    if (err) {
      reject(err)
    } else {
      resolve(result)
    }
  });
});