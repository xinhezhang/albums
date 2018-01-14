import React from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: props.album.thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>Title: {props.album.title}</Text>
          <Text>Artist: {props.album.artist}</Text>
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
