/* eslint-disable react-native/no-inline-styles */
import { FontAwesome5 } from '@expo/vector-icons/';
import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';

import { GradientText, ScrollView, Text, TouchableOpacity, View } from '@/ui';
type Props = { title: string };

import { useNavigation } from '@react-navigation/native';
import * as VideoThumbnails from 'expo-video-thumbnails';

const VideoThumbnail = () => {
  const [image, setImage] = useState('');
  useEffect(() => {
    generateThumbnail();
  }, []);

  const generateThumbnail = async () => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(
        'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        {
          time: 10000,
        }
      );
      setImage(uri);
      console.log(uri);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={{ width: '100%', height: '100%', borderRadius: 10 }}
      >
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '40%',
            left: '40%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: 10,
            borderRadius: 100,
          }}
        >
          <FontAwesome5 name="play" size={24} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};
export const Videos = ({ title }: Props) => {
  const { navigate } = useNavigation();
  return (
    <View className="mt-4">
      <GradientText t={title} />
      <ScrollView
        horizontal
        contentContainerStyle={{ justifyContent: 'center' }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <View
            key={item}
            className="m-px h-56 w-36 items-center justify-center rounded-md bg-red-500"
          >
            <VideoThumbnail />
          </View>
        ))}
        <TouchableOpacity
          onPress={() => navigate('Reel')}
          className="m-px h-56 w-36 items-center justify-center rounded-md bg-transparent"
        >
          <Text className="text-xl font-bold">See All</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
