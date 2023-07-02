/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { ScrollView, Text, View } from '@/ui';

import { Categories } from './categories';
import { Companies } from './companies';
import { Products } from './products';

type Props = { style: any };
export const HomeDecore = ({ style }: Props) => {
  return (
    <ScrollView style={[style, { padding: 5 }]}>
      <View className="w-full h-20 justify-center border">
        <Text className="text-center" style={{ fontFamily: 'SSProBold' }}>
          Advertisement
        </Text>
      </View>
      <Categories
        data={[
          'Architecture',
          'Glass',
          'category 3',
          'category 4',

          'category 8',
        ]}
      />
      <Products />
      <Companies />
    </ScrollView>
  );
};
