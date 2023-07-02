/* eslint-disable unicorn/filename-case */
/* eslint-disable react-native/no-inline-styles */
import Constants from 'expo-constants';
import React from 'react';
import type { StyleProp, ViewProps, ViewStyle } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import type { AnimateProps } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

import { SBImageItem } from './SBImageItem';
import { SBTextItem } from './SBTextItem';

interface Props extends AnimateProps<ViewProps> {
  style?: StyleProp<ViewStyle>;
  index: number;
  pretty?: boolean;
}

export const SBItem: React.FC<Props> = (props) => {
  const { style, index, pretty, testID, ...animatedViewProps } = props;
  const enablePretty = Constants?.manifest?.extra?.enablePretty || false;
  const [isPretty, setIsPretty] = React.useState(pretty || enablePretty);
  return (
    <LongPressGestureHandler
      onActivated={() => {
        setIsPretty(!isPretty);
      }}
    >
      <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
        {isPretty ? (
          <SBTextItem style={style} index={index} />
        ) : (
          <SBImageItem style={style} index={index} />
        )}
      </Animated.View>
    </LongPressGestureHandler>
  );
};
