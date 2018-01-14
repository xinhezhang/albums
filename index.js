// import library
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => {
  // fix problem of last image display: "{ flex: 1 }", "{ paddingBottom: 64 }"
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// get rid of “Remote debugger is in a background tab” warning
console.ignoredYellowBox = ['Remote debugger'];

// render to the device
AppRegistry.registerComponent('albums', () => App);
