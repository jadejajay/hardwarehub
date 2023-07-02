/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { Text, View, ScrollView } from '@/ui';

import { Categories } from './categories';
import { Companies } from './companies';
import { Products } from './products';

type Props = { style: any };
export const Sanitary = ({ style }: Props) => {
  return (
    <ScrollView style={[style, { padding: 5 }]}>
      <View className="h-20 w-full justify-center border">
        <Text className="text-center" style={{ fontFamily: 'SSProBold' }}>
          Advertisement
        </Text>
      </View>
      <Categories
        data={['Architecture', 'Glass', 'category 3', 'category 4']}
      />
      <Products />
      <Companies />
    </ScrollView>
  );
};
