/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { ScrollView, Text, View } from '@/ui';

import { Categories } from './categories';
import { Products } from './products';
import { Companies } from './companies';

type Props = { style: any };
export const Hardware = ({ style }: Props) => {
  return (
    <View style={[style, { padding: 5 }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-20 w-full justify-center border">
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
            'category 5',
            'category 6',
            'category 7',
            'category 8',
          ]}
        />
        <Products />
        <Companies />
      </ScrollView>
    </View>
  );
};
