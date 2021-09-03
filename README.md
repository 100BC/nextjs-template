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

- Change browser styling defaults in `styles/globals.scss`.

  - Avoid creating global classnames, instead create a custom component

  - The repo uses [normalize.css](https://www.npmjs.com/package/normalize.css), which is imported in `pages/_app.tsx`

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

Open website on http://localhost:3000/

```
yarn dev
```

Open website on http://localhost:{PORT}/

```
yarn dev -p {PORT}
```

compile code

```
yarn build
```

start built code

```
yarn start
```

Run eslint and stylelint on the project concurrently

```
yarn lint:all
```

Lint only styles

```
yarn lint:styles
```

Lint only the code

```
yarn lint:code
```

Format project based on eslint, stylelint, and prettier rule sets

```
yarn format:all
```

Format only the styles

```
yarn format:styles
```

Format only the code

```
yarn format:code
```
