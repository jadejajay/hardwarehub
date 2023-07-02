/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { Text, View, ScrollView } from '@/ui';

import { Categories } from './categories';
import { Companies } from './companies';
import { Products } from './products';

type Props = { style: any };
export const Tiles = ({ style }: Props) => {
  return (
    <ScrollView style={[style, { padding: 5 }]}>
      <View className="h-20 w-full justify-center border">
        <Text className="text-center" style={{ fontFamily: 'SSProBold' }}>
          Advertisement
        </Text>
      </View>
      <Categories
        data={['Architecture', 'category 6', 'category 7', 'category 8']}
      />
      <Products />
      <Companies />
    </ScrollView>
  );
};