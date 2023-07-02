/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { Text, View } from '@/ui';

type Props = {};
export const Header = ({}: Props) => {
  return (
    <View className="h-32 w-full  items-center justify-center rounded-xl bg-red-500">
      <Text
        style={{
          fontFamily: 'Amita',
          fontSize: 24,
          textAlign: 'center',
          lineHeight: 32,
          color: 'white',
        }}
      >
        Create Awesome Posts and Showcase Here.
      </Text>
    </View>
  );
};
