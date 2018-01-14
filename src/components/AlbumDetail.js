import React from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { thumbnail_image, title, artist } = album;
  const { thumbnailStyle, headerContentStyle } = styles;
  
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text>Title: {title}</Text>
          <Text>Artist: {artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {     // apply for image (must have)
    height: 50,
    width: 50,
  },
};

export default AlbumDetail;
