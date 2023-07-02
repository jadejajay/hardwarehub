/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import TextTicker from 'react-native-text-ticker';

type Props = {
  text: string;
};
export const MarqueeText = ({ text }: Props) => {
  return (
    <TextTicker
      style={{ fontSize: 13, width: 64 }}
      duration={5000}
      loop
      bounce
      repeatSpacer={200}
      marqueeDelay={500}
    >
      {text}
    </TextTicker>
  );
};
