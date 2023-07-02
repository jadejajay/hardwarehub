import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ParallaxCarousel from 'react-native-reanimated-carousel';

const carouselData = [
  { id: 1, image: { uri: 'https://picsum.photos/id/27/200/300' } },
  { id: 2, image: { uri: 'https://picsum.photos/id/23/200/300' } },
  { id: 3, image: { uri: 'https://picsum.photos/id/37/200/300' } },
  // Add more images as needed
];

const CarouselItem = ({ item, parallaxProps }) => (
  <View style={styles.container}>
    <Image source={item.image} style={styles.image} {...parallaxProps} />
  </View>
);

const Carousel3 = () => {
  <ParallaxCarousel
    data={carouselData}
    renderItem={CarouselItem}
    sliderWidth={300}
    itemWidth={250}
    hasParallaxImages
  />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
  },
  imageContainer: {
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default Carousel3;
