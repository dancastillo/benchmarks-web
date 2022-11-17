# Benchmark Node.js Web Frameworks

## Getting Started


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dancastillo/benchmarks-web
   ```
2. Change directory
   ```sh
   cd benchmarks-web
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
   or

   ```sh
   yarn install
   ```


<!-- USAGE EXAMPLES -->
## Usage

Test all 
```
yarn start
```

```sh
Available options:
  -l
    Which web frameworks to benchmark
  # Directly from https://github.com/mcollina/autocannon
  -c NUM
        The number of concurrent connections to use. default: 10.
  -p NUM
        The number of pipelined requests to use. default: 1.
  -d SEC
        The number of seconds to run the autocannon. default: 10.
```

* `-l` - list out which files to bench mark. Default: `all`

  Run all object files `*-object.ts`
    ```sh
    yarn start -l object
    ```

    Run specific file `fastify.ts`
    ```sh
    yarn start -l fastify
    ```

    Run specific files `fastify.ts express.ts`
    ```sh
    yarn start -l fastify -l express
    ```