// import library
import React from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/header';

// create a component
const App = () => {
  return (
    <Header headerText={'Albums'} />
  );
};

// render to the device
AppRegistry.registerComponent('albums', () => App);
