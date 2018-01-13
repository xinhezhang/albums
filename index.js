// import library
import React from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/header';

// create a component
const App = () => (
  <Header />
);
// const App = () => {
//   return (
//     <Text>Hello World</Text>
//   );
// };

// render to the device
AppRegistry.registerComponent('albums', () => App);
