/* eslint-disable unicorn/filename-case */
export default () => [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'It uses the same design as React, letting you compose a rich mobile UI from declarative components https://facebook.github.io/react-native/',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
];
