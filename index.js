// import library
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a component
const App = () => {
  return (
    <Text>Hello World</Text>
  );
};

// render to the device
AppRegistry.registerComponent('albums', () => App);
