const presets = [
  [
    '@babel/env',
    {
      targets: { // версии браузеров которые нужно поддерживать
        edge: '17',
        firefox: '60',
        chrome: '64',
        safari: '11.1',
      },
      useBuiltIns: 'usage', // эта настройка babel-polyfill, если стоит значение usage, то будут подставлятся полифилы для версий браузеров которые указали выше.
      corejs: '3.0.0', // явно проставить версию corejs
      // eslint-disable-next-line no-dupe-keys
      targets: { // указать цели, для полифилов
        esmodules: true, // es модули
        ie: '11', // Internet Explorer 11
      },
    },
  ],
];

module.exports = { presets };
