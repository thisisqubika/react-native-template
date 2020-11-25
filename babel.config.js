module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          actions: './src/actions',
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          controllers: './src/controllers',
          helpers: './src/helpers',
          localization: './src/localization',
          navigation: './src/navigation',
          reducers: './src/reducers',
          selectors: './src/selectors',
          storage: './src/storage',
          store: './src/store',
          'test-utils': './src/test-utils',
        },
      },
    ],
  ],
};
