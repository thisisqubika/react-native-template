module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          actions: './src/actions',
          assets: './src/assets',
          components: './src/components',
          controllers: './src/controllers',
          helpers: './src/helpers',
          localization: './src/localization',
          reducers: './src/reducers',
          selectors: './src/selectors',
        },
      },
    ],
  ],
};
