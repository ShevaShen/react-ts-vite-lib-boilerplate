# react-ts-vite-lib-boilerplate

A minimal React Typecript library boilerplate boostrapped by using Vite and Vitest.

## Tech Stack

- React, Typescript
- Eslint, Prettier
- Vite (Library Mode)
- Vitest, React Testing Library

## Available Scripts

In the project directory, you can run:

#### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

#### `yarn build`

Builds the library for production to the `dist` folder.\
It uses the Vite Library mode to bundle up everything in the `lib` folder, which will be used for publishing to npm.

#### `yarn lint`

Lint all files with the extension `ts` and `tsx` with eslint

#### `yarn format`

Format all files with the extension `ts`, `tsx` and `json` with prettier

#### `yarn test`

Run unit tests

#### `yarn coverage`

Run tests coverage

## How to test the library in local

1. Run `yarn pack`, this will generate a file like `your-library-v0.0.1.tgz`
2. Run `yarn add ./your-library-v0.0.1.tgz`, this will add the `your-library` package as a dependency in your local environment.
3. Run `yarn dev` and change the files import from `@lib` to `your-library`, this will allow the local dev to use the packaged library.

**Note**: If you run into issues, e.g. not seeing the latest changes reflected in the package. Try the following steps:

1. Remove the `.tgz` file and remove the `your-library` from the `package.json`
2. Remove all `node_modules`
3. Clear cache, `yarn cache clean your-library`, verify it with `yarn cache list --pattern your-library`
4. Repeat the steps above, e.g. generate a new `.tgz` file and install
5. Don't forget to install all node modules as well
