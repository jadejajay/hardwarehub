/* eslint-disable react-native/no-inline-styles */
//create random sized gallery components

import { useNavigation } from '@react-navigation/native';
import { MasonryFlashList } from '@shopify/flash-list';
import * as React from 'react';
import { TouchableNativeFeedback } from 'react-native';

import { Image, View } from '@/ui';

type Props = {
  style: any;
};

const data = [
  {
    id: '1',
    image: 'https://picsum.photos/id/2/200/300',
    height: 300,
  },
  {
    id: '2',
    image: 'https://picsum.photos/id/23/200/300',
    height: 400,
  },
  {
    id: '3',
    image: 'https://picsum.photos/id/7/200/300',
    width: 200,
    height: 200,
  },
  {
    id: '4',
    image: 'https://picsum.photos/id/3/200/300',
    height: 100,
  },
  {
    id: '5',
    image: 'https://picsum.photos/id/37/200/300',
    height: 400,
  },
  {
    id: '6',
    image: 'https://picsum.photos/id/27/200/300',
    height: 300,
  },
  {
    id: '7',
    image: 'https://picsum.photos/id/24/200/300',
    height: 300,
  },
  {
    id: '8',
    image: 'https://picsum.photos/id/247/200/300',
    height: 400,
  },
  {
    id: '9',
    image: 'https://picsum.photos/id/44/200/300',
    width: 200,
    height: 200,
  },
  {
    id: '14',
    image: 'https://picsum.photos/id/43/200/300',
    height: 100,
  },
  {
    id: '25',
    image: 'https://picsum.photos/id/25/200/300',
    height: 400,
  },
  {
    id: '36',
    image: 'https://picsum.photos/id/57/200/300',
    height: 300,
  },
];
export const Gallery = ({ style }: Props) => {
  const { getParent } = useNavigation();
  return (
    <View style={style}>
      <View className="flex-1 border border-cyan-50 ">
        <MasonryFlashList
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableNativeFeedback
              onPress={() =>
                getParent()?.navigate('SocialNavigator', { screen: 'Gallery' })
              }
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: '100%',
                  height: item.height,
                  borderWidth: 2,
                  borderColor: '#fff',
                }}
              />
            </TouchableNativeFeedback>
          )}
          estimatedItemSize={200}
        />
      </View>
    </View>
  );
};
