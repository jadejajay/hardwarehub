/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

import { GradientText, ScrollView, Text, TouchableOpacity, View } from '@/ui';

type Props = { title: string };
export const Post = ({ title }: Props) => {
  const { navigate } = useNavigation();
  return (
    <View className="mt-4">
      <GradientText t={title} />
      <ScrollView
        horizontal
        contentContainerStyle={{
          justifyContent: 'center',
          backgroundColor: 'red',
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <View
            key={item}
            className="m-px h-48 w-36 items-center justify-center rounded-md bg-red-500"
          >
            <Text className="text-xl font-bold text-white">{item}</Text>
          </View>
        ))}
        <TouchableOpacity
          onPress={() => navigate('Gallery')}
          className="m-px h-48 w-36 items-center justify-center rounded-md bg-transparent"
        >
          <Text className="text-xl font-bold">See All</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
