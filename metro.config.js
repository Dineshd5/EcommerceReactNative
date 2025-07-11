const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'), // Add SVG transformer
    },
    resolver: {
        assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'), // Exclude .svg from asset extensions
        sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'], // Add .svg to source extensions
    },
};

module.exports = mergeConfig(defaultConfig, config);