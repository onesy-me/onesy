
module.exports = function (api) {
  const esm = api.env(['esm']);

  api.cache(true);

  const env = {
    presets: [
      ['@babel/preset-react', { runtime: 'automatic' }]
    ]
  };

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: 'defaults',
        browserslistEnv: process.env.BABEL_ENV || process.env.NODE_ENV,
        modules: esm ? false : 'commonjs'
      },
    ],

    ...(env?.presets || []),

    '@babel/preset-typescript'
  ];

  const plugins = [
    'babel-plugin-react-compiler',
    '@babel/plugin-transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',

    ...(env?.plugins || [])
  ];

  return {
    presets,
    plugins
  };
};
