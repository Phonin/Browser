# Phonin

## CLI Commands

- `yarn`: Installs dependencies

- `yarn dist`: Build Electron and Preact

### Preact Commands

- `yarn dev`: Run a development, HMR server

- `yarn serve`: Run a production-like server

- `yarn build`/`yarn pbuild`: Production-ready build

- `yarn lint`: Pass TypeScript files using ESLint

- `yarn test`: Run Jest and Enzyme with
  [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
  your tests

### Electron Commands

- `yarn run`: Run Electron, provided `/dist` (created by `yarn build`) is available

- `yarn start`: Run Electron, provided `yarn dev` or `yarn serve` are running

- `yarn ebuild`: Build Electron
