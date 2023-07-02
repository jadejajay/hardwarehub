/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { GradientText } from '../text';

export const ImageCard: React.FC<{ imageSource: string; text: string }> = ({
  imageSource,
  text,
}) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: imageSource }}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.text}>
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          useNativeDriver={true}
        >
          <GradientText t={text} s={25} h={50} w={150} />
        </Animatable.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    alignSelf: 'center',
    margin: 4,
    width: '95%',
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    alignSelf: 'center',
  },
});
