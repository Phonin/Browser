# [![Phonin](https://phonin.github.io/Branding/icons/phonin.svg)](https://phonin.github.io/Browser/)

## CLI Commands

- `yarn`: Installs dependencies
- `yarn dist`: Build Electron and Preact
- `yarn lint`: Pass TypeScript files using ESLint
- `yarn dev`: Runs `yarn build`, then `yarn start`

### Preact Commands

- `yarn pdev`: Run a development, HMR server
- `yarn serve`: Run a production-like server
- `yarn build`/`yarn pbuild`: Production-ready Preact build
- `yarn test`: Run Jest and Enzyme with
  [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
  your tests

### Electron Commands

- `yarn run run`: Run Electron, provided `/dist` (created by `yarn build`) is available
- `yarn start`: Run Electron, provided `yarn dev` or `yarn serve` are running
- `yarn ebuild`: Build Electron

## Some assistance if the above is confusing

### Development

To start this project in Development mode, you can:

1. run `yarn pdev`, then, in another command line, `yarn run run` every time you make a change, or....
2. run `yarn dev` every time you make a change

### Production

To make a production build, run `yarn dist`
