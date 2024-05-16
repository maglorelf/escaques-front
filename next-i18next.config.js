const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es-ES',
    locales: ['es-ES'],
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
};
