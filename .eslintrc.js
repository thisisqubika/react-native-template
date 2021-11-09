module.exports = {
  env: {
    jest: true,
  },
  extends: ['@react-native-community', 'plugin:import/recommended', 'plugin:react-native-a11y/all'],
  plugins: ['module-resolver', 'testing-library'],
  parser: 'babel-eslint',
  root: true,
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'import/newline-after-import': 'error',
    'import/order': 'error',
    'module-resolver/use-alias': 'error',
    'no-console': 'warn',
    'testing-library/await-async-query': 'error',
    'testing-library/await-async-utils': 'error',
    'testing-library/no-await-sync-events': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-unnecessary-act': 'error',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/no-wait-for-multiple-assertions': 'error',
    'testing-library/no-wait-for-snapshot': 'error',
    'testing-library/prefer-find-by': 'warn',
  },
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    'import/resolver': {
      'babel-module': {},
    },
  },
};
