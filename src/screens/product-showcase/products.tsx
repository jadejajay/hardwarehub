import * as React from 'react';

import { Image, Text, View } from '@/ui';

type Props = {};
export const Products = ({}: Props) => {
  return (
    <View className="w-full">
      <View className="w-full flex-row items-center justify-between">
        <Text variant="lg" style={{ fontFamily: 'Ruluko' }}>
          Search By Product Type
        </Text>
        <Text variant="sm">see all</Text>
      </View>
      <View className="flex-row flex-wrap">
        {[1, 2, 3, 4, 5, 6].map((v, i) => {
          return (
            <View className="w-1/2 p-2">
              <View key={i} className="border-0.5 rounded-md p-1">
                <Image
                  className="h-40 w-full rounded-md"
                  source={{ uri: 'https://picsum.photos/200/300' }}
                />
                <Text className="text-center text-sm" numberOfLines={1}>
                  Product {v}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
