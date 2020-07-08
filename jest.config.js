module.exports = {
  preset: '@testing-library/react-native',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest.setup.js',
  ],
  setupFilesAfterEnv: ['@testing-library/react-native/cleanup-after-each'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
  ],
};
