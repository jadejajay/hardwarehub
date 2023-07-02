import * as React from 'react';

import { GradientText, Text, View } from '@/ui';

type Props = {};
export const Credit = ({}: Props) => {
  return (
    <View className="h-30 flex-1 items-center">
      <Text className="text-base ">Powered by</Text>
      <GradientText t="IBAIS MEDIA" h={27} />
    </View>
  );
};
