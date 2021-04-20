const alias = { '^@/(.+)': './src/\\1' }; // @/folder will be an alias to <root>/src/folder
const extensions = ['.android.js', '.ios.js', '.js', '.json', '.native'];

const presets = ['module:metro-react-native-babel-preset'];
const plugins = [['module-resolver', { alias, extensions }], 'react-native-reanimated/plugin'];

if (process.env.NODE_ENV === 'production') {
  plugins.unshift('transform-remove-console'); // reanimated plugin has to be listed last
}

module.exports = { presets, plugins };
