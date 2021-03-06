const ENV = process.env.BABEL_ENV;
let config;

if (ENV === 'es6') {
  config = {};
} else {
  config = {
    presets: [
      [
        'env',
        {
          targets: {
            ie: 11,
            edge: 14,
            firefox: 45,
            chrome: 49,
            safari: 10,
            node: '6.10',
          },
        },
      ],
    ],
  };
}

module.exports = config;
