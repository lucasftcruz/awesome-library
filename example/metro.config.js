const path = require('path');
const { getDefaultConfig } = require('@react-native/metro-config');
const { getConfig } = require('react-native-builder-bob/metro-config');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = getConfig(getDefaultConfig(__dirname), {
  root,
  pkg,
  project: __dirname,
  resolver: {
    extraNodeModules: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  watchFolders: [
    path.resolve(__dirname, '../src'),
    path.resolve(__dirname, '../node_modules'),
  ],
});
