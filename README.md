# nextjs-template

Template to use to bootstrap Nextjs project with Typescript and SCSS

## Linters & Formatter

```bash
# You can use VSCode ESLint, and StyleLint Extensions for automatic Linting

yarn eslint . --ext .js,.jsx,.ts,.tsx

yarn stylelint "styles/**/*.scss"
```

### Formatting

```bash
# auto fixes the files according to the rules

# can enable auto format for Prettier via VSCode Extensions
yarn prettier --write .

# Prettier will not reorder based on rules
yarn stylelint "styles/**/*.scss" --fix
```
