# Contributing to Steller

>🎉 Thank you for your interest in improving Steller! 🎉

## Development Environment

Node.js (using [nvm](https://github.com/nvm-sh/nvm))
```
nvm install && nvm use
```

Install dependencies
```
yarn
```

## Pull Request Guidelines

* Submit pull requests against the `dev` branch
* Work within the `src` directory
* Provide a detailed description of the changes included in the PR
* Add or update tests as necessary
* Ensure the CI build is passing

## Useful NPM Scripts

Run all tests
```
yarn test
```

Run tests in watch mode
```
yarn test:watch
```

Build compiled CSS with default values
```
yarn build
```

Run ESLint and Stylelint
```
yarn lint
```

Autofix ESLint and Stylelint errors
```
yarn lint:fix
```
