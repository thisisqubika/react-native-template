module.exports = {
  preset: 'react-native',
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/jest.setup.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: ['node_modules/(?!react-native|@react-native|@react-navigation)'],
  collectCoverage: true,
  coverageReporters: ['text'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/assets/**',
    '!src/constants/**',
    '!src/localization/**',
    '!src/mocks/**',
    '!src/test-utils/**',
    '!src/theme/**',
  ],
};
