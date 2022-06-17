module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          "@assets": "./src/assets",
          "@config": "./src/config",
          "@components": "./src/components",
          "@localization": "./src/localization",
          "@navigation": "./src/navigation",
          "@network": "./src/network",
          "@screens": "./src/screens"
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
