import * as React from 'react';

import { Image, View } from '@/ui';

type Props = {};
export const Accounts = ({}: Props) => {
  return (
    <View className="justify-center items-center">
      <Image
        source={require('../../../assets/icon/man.gif')}
        style={{ width: 32, height: 32 }}
      />
    </View>
  );
};
