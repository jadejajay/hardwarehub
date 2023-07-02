/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Carousel from 'react-native-snap-carousel';

import { Image, ScrollView, Text, View } from '@/ui';

export const CarouselPage = () => {
  const carouselData = [
    {
      id: 1,
      image: {
        uri: 'http://itekindia.com/nimmi/assets/photos/door1.jpg',
      },
      title: 'Slide 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      image: {
        uri: 'http://itekindia.com/nimmi/assets/photos/door1.jpg',
      },
      title: 'Slide 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      image: {
        uri: 'http://itekindia.com/nimmi/assets/photos/door1.jpg',
      },
      title: 'Slide 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more carousel slides here
  ];

  const renderItem = ({ item }) => (
    <View className="flex-1 items-center justify-center">
      <Image
        source={item.image}
        style={{ width: '100%', height: 200 }}
        className="mb-4 h-48 w-full"
      />

      <Text className="mb-2 text-2xl font-bold">{item.title}</Text>
      <Text className="mb-4 text-lg">{item.description}</Text>
    </View>
  );

  return (
    <ScrollView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <Carousel
          data={carouselData}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={250}
          layout={'default'}
          autoplay={true}
          autoplayInterval={3000} // Adjust the interval as needed (in milliseconds)
          loop={true}
        />
      </View>
    </ScrollView>
  );
};
