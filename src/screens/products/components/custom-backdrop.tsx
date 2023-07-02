import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';
import React, { useMemo } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
} from 'react-native-reanimated';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: `rgba(0,0,0,${interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 0.5],
      Extrapolate.CLAMP
    )})`,
  }));

  // styles
  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [containerAnimatedStyle, style]
  );

  const blurViewProps = useAnimatedProps(() => {
    return {
      intensity: interpolate(
        animatedIndex.value,
        [-1, 0],
        [0, 20],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <AnimatedBlurView animatedProps={blurViewProps} style={containerStyle} />
  );
};

export default CustomBackdrop;
