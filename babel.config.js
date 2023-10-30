module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@assets': './assets',
            '@components': './components',
            '@lib': './lib',
            '@screens': './screens',
            '@contexts': './contexts',
            '@hooks': './hooks',
            '@navigators': './navigators',
            '@constants': './constants',
          },
        },
      ],
    ],
  };
};
