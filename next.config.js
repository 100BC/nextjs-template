module.exports = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },

  // Allows SVGs to be added as components
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
