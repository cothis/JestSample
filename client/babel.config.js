console.log('여기오긴 오는고니??');

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: '>= 1%, not dead',
        useBuiltIns: 'usage',
        corejs: 3,
        modules: false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];

  return { presets };
};
