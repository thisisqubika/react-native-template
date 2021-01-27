module.exports = {
  env: {
    jest: true,
  },
  extends: [
    '@react-native-community',
    'plugin:import/recommended',
    'plugin:react-native-a11y/all',
    'plugin:testing-library/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['module-resolver'],
  parser: 'babel-eslint',
  root: true,
  rules: {
    'import/newline-after-import': 'error',
    'import/order': 'error',
    'module-resolver/use-alias': 'error',
    'no-console': 'warn',
  },
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    'import/resolver': {
      'babel-module': {},
    },
  },
};
