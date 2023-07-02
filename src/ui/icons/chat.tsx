import * as React from 'react';

import { Image, View } from '@/ui';

type Props = {};
export const Chat = ({}: Props) => {
  return (
    <View className="justify-center items-center">
      <Image
        source={require('../../../assets/icon/chat.gif')}
        style={{ width: 36, height: 36 }}
      />
    </View>
  );
};
