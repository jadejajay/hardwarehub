import * as React from 'react';

import { Image, View } from '@/ui';

type Props = {};
export const Feed = ({}: Props) => {
  return (
    <View className="justify-center">
      <Image
        source={require('../../../assets/icon/basket.gif')}
        style={{ width: 32, height: 32 }}
      />
    </View>
  );
};
