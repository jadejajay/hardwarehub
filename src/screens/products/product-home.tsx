/* eslint-disable react-native/no-inline-styles */
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

import { Image, Text, View } from '@/ui';

type Props = {};
export const ProductHome = ({}: Props) => {
  const { navigate } = useNavigation();
  return (
    <View className="flex-1">
      <View className="absolute inset-x-0 top-0 h-3/4 w-full bg-orange-200">
        <Image
          source={{
            uri: 'http://itekindia.com/nimmi/assets/photos/door1.jpg',
          }}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <View className="absolute inset-x-0 bottom-0 z-10 h-60 items-center justify-center rounded-t-3xl bg-red-600">
        <Text variant="h3" className="text-center">
          Home
        </Text>
      </View>
      <View className="flex-column absolute right-2 top-10 gap-6 rounded-full">
        <View className="items-center justify-center rounded-full bg-white p-1">
          <MaterialIcons name="share" size={30} color={'black'} />
        </View>
        <View className="items-center justify-center rounded-full bg-white p-1">
          <MaterialIcons name="file-download" size={30} color={'black'} />
        </View>
        <View className="items-center justify-center rounded-full bg-white p-1">
          <MaterialIcons name="phone" size={30} color={'black'} />
        </View>
        <View className="items-center justify-center rounded-full bg-white p-1">
          <MaterialIcons name="3d-rotation" size={30} color={'black'} />
        </View>
        <View className="items-center justify-center rounded-full bg-white p-1">
          <MaterialIcons name="chat" size={30} color={'black'} />
        </View>
        <View className="items-center justify-center rounded-full bg-white p-1">
          <MaterialIcons name="bookmark-border" size={30} color={'black'} />
        </View>
      </View>
    </View>
  );
};
