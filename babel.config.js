module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],

  plugins: [
    'styled-components',
  ],

  env: {
    production: {
      plugins: [
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
      ],
    },
  },
};
