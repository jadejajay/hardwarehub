/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';
import type { ICarouselInstance } from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';

import { SBItem } from '@/ui/core/components/SBItem';

import { ElementsText, window } from './constants';

const PAGE_WIDTH = window.width - 20;

export function Carousel12() {
  const [data, setData] = React.useState([...new Array(4).keys()]);
  const [isVertical, setIsVertical] = React.useState(false);
  const [isFast, setIsFast] = React.useState(false);
  const [isAutoPlay, setIsAutoPlay] = React.useState(true);
  const [isPagingEnabled, setIsPagingEnabled] = React.useState(true);
  const ref = React.useRef<ICarouselInstance>(null);

  const baseOptions = isVertical
    ? ({
        vertical: true,
        width: PAGE_WIDTH,
        height: PAGE_WIDTH / 2,
      } as const)
    : ({
        vertical: false,
        width: PAGE_WIDTH,
        height: 350,
      } as const);

  return (
    <View style={{ flex: 1, margin: 5, padding: 5 }}>
      <Carousel
        {...baseOptions}
        loop
        ref={ref}
        testID={'xxx'}
        style={{ width: '100%' }}
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 100 : 2000}
        data={data}
        pagingEnabled={isPagingEnabled}
        renderItem={({ index }) => <SBItem key={index} index={index} />}
      />
    </View>
  );
}
