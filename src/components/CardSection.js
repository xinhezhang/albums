import React from 'react';
import { View } from 'react-native';

const CardSection = () => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
    </View>
  );
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

export default CardSection;
