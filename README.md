# nextjs-template

Template to use to bootstrap NextJS project with Typescript and SCSS

## Installation

1. Make sure [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/) are installed on the system

2. Install packages: `yarn install`

3. Start dev server: `yarn dev`

## Scripts

```bash
# open website on http://localhost:3000/
yarn dev

# compile code
yarn build

# start built code
yarn start

# find TypeScript Errors
yarn type-check

# Run eslint and stylelint on the project concurrently
yarn lint:all

# Format project based on eslint, stylelint, and prettier rule sets
yarn format:all
```

## Linting and Formatting

```bash
# Linting
# You can use VSCode ESLint, and StyleLint Extensions for automatic Linting
yarn lint:all

yarn eslint . --ext .js,.jsx,.ts,.tsx

yarn stylelint "styles/**/*.scss"

# auto formats according to the rules
# can enable auto format for Prettier via VSCode Extensions
yarn format:all

yarn eslint . --ext .js,.jsx,.ts,.tsx --fix

yarn prettier --write .

yarn stylelint "styles/**/*.scss" --fix
```
