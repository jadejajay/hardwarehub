import * as React from 'react';
import * as Animatable from 'react-native-animatable';

import { GradientText, Text, View } from '@/ui';

type Props = {};
export const Footer = ({}: Props) => {
  return (
    <View className="items-center h-32">
      <Text variant="md">Powered By</Text>
      <Animatable.View
        animation="zoomIn"
        iterationCount="infinite"
        duration={5000}
      >
        <GradientText t="IBAIS MEDIA" s={24} w={200} h={36} />
      </Animatable.View>
    </View>
  );
};
