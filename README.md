# nextjs-template

Template to use to bootstrap [NextJS](https://nextjs.org/) project with [Typescript](https://www.typescriptlang.org/) and [SCSS](https://sass-lang.com/).

The template has settings and prebuilt features described below for easier development. Change them as needed.

This template will be updated regularly with new defaults and updates

## Installation

1. Make sure [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/) are installed on the system.

2. Consider installing the project recommended extensions for VS Code.

   2.1. This project uses [Peacock Extension](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock), to theme VS Code Editor. Edit/remove it as you see fit.

3. Install packages: `yarn install`

4. Start dev server: `yarn dev`

## Guidelines

- Every page component located in `pages/*` must be wrapped in the `<Layout>` component for easy meta tag customization.

- Page component styles are located in `styles/*` and can be imported with `@styles/*`. Whereas component stylesheets should be located within their respective folders named as `styles.module.scss`.

- Change browser styling defaults in `styles/config/_standard.scss`. The `globals.scss` file is for global classnames.

  - To create a global style first create an SCSS template or mixin in `styles/abstracts/{_template or _mixin}.scss` for reusability and extend it in `globals.scss`

  - The repo uses [Normalize.css](https://necolas.github.io/normalize.css/) via `styles/config/_normalize.scss`

  - The repo has system based automatic dark/light mode swap.

  - The repo has responsive font size of base 10, 9, 8 based on screen size.

- The repo utilizes [Open Graph Protocol](https://opengraphprotocol.org/) and [TwitterCards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards). The default values are defined in `utils/constants.ts`.

- The repo uses [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack) to allow inline SVG components.

## Default Settings

### Change these settings as needed before releasing/working on the project

- Edit the Google Fonts in `pages/_document.tsx`. The default is [Roboto](https://fonts.google.com/specimen/Roboto).

- Generate and replace the default Favicon settings in `pages/_document.tsx` and `public/*`. [RealFaviconGenerator](https://realfavicongenerator.net) was used to create the temporary favicon.

- Change default meta tags variables in `utils/constants.ts`

- Create an image for Open Graph Protocol and replace the placeholder in `public/OGP.png`. The placeholder is defined in `pages/index.tsx`. The image should `1200 x 630` in dimension for best result.

- Edit theming colors in `styles/abstracts/_themes.scss`. Use [Adobe Color](https://color.adobe.com/) to create a gradient. Default is `#4A43DE` and its shades are used.

- Edit any styling presets as needed.

- Remove `.gitkeep` files as needed.

## Scripts

```bash
# Note these scripts have only been tested on UNIX systems

# starts the website on http://localhost:3000/
yarn dev

# compile code
yarn build

# starts the compiled code on http://localhost:3000/
yarn start

# find TypeScript Errors
yarn tsc

# Run eslint and stylelint on the project concurrently
yarn lint:all

# Format project based on eslint, stylelint, and prettier rule sets
yarn format:all
```

## Linting and Formatting

```bash
# Note these scripts have only been tested on UNIX systems

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
