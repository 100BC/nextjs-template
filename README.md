# nextjs-template

Template to use to bootstrap [NextJS](https://nextjs.org/) project with [Typescript](https://www.typescriptlang.org/) and [SCSS](https://sass-lang.com/).

The template has settings and prebuilt features described below for easier development. Change them as needed.

This template will be updated regularly with new defaults and updates

## Installation

1. Make sure [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/) are installed on the system.

2. Consider installing the project recommended extensions for VS Code.

   2.1. Optionally add `.vscode` to the `.gitignore` and use `git rm -r --cached .vscode` command to remove it from the upstream repository. Recommended for collaborative projects.

   2.2. This project uses [Peacock Extension](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) to theme VS Code Editor. Edit/remove it as you see fit in `.vscode`.

3. Install packages: `yarn install`

4. Start dev server: `yarn dev`

## Guidelines & Recommendations

### Meta Tags & Structure

- Every page component located in `pages/*` should be wrapped in the `<Layout>` component for easy meta tag customization.

  - The repo utilizes [Open Graph Protocol](https://opengraphprotocol.org/) and [TwitterCards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards). The default values are defined in `utils/constants.ts`.

### Styling

- Page component styles are located in `styles/*` and can be imported with `@styles/*`. Whereas component stylesheets should be located within their respective folders named as `styles.module.scss`.

  - Consider adding the snippets located at the bottom of the README to `typescriptreact.json` file in User Snippets to help with styling.

- Change browser styling defaults in `styles/globals.scss`.

  - Avoid creating global classnames, instead create a custom component

- The repo uses [normalize.css](https://www.npmjs.com/package/normalize.css), which is imported in `pages/_app.tsx`

- The repo has responsive font size of base 10, 9, 8 based on screen size.

- The repo provides two helper functions located in `utils/styleHelpers.ts` to handle common use cases with CSS Module classNames.

- `$max-width` scss variable defined in `styles/abstracts/_media-query.scss` allows consistent responsive size

- Theme colors are defined in `styles/abstracts/_media-query.scss`

### Other

- The repo uses [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack) to allow inline SVG components.

- ESLint, Stylelint, and Prettier are pre-configured for this repository

- Two TypeScript Generic Types are located in `utils/interfaces.ts` to handle niche use cases. The Generic Types are utilized by the `<Layout>` component

## Configure Default Settings

### Change these settings as needed before releasing/working on the project

- Change `i18n` locale in `next.config.js`

- Edit the Google Fonts in `pages/_document.tsx`. The default is [Roboto](https://fonts.google.com/specimen/Roboto).

- Generate and replace the default Favicon settings in `pages/_document.tsx` and `public/*`. [RealFaviconGenerator](https://realfavicongenerator.net) was used to create the temporary favicon.

- Change default meta tags variables in `utils/constants.ts`

- Create an image for Open Graph Protocol and replace the placeholder in `public/OGP.png`. The placeholder is defined in `pages/index.tsx`. The image should `1200x630` in dimension or 1.91:1 aspect ratio for best result. Square images of minimum size of `200x200` will also work.

- Edit theming colors in `styles/abstracts/_themes.scss`. Use [Adobe Color](https://color.adobe.com/) to create a gradient. Default is `#4A43DE` and its shades are used.

- Edit any styling presets as needed.

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

## Suggested Snippets

### Add to `typescriptreact.json`

```
"Create module className": {
  "prefix": "cst",
  "body": ["className={styles.${1:className}}"],
  "description": "Create module className"
},

"import styles": {
  "prefix": "imps",
  "body": ["import styles from './styles.module.scss';"],
  "description": "import styles"
},

"import @styles": {
  "prefix": "@imps",
  "body": ["import styles from '@styles/${1:page}.module.scss';"],
  "description": "import page styles"
},
```
