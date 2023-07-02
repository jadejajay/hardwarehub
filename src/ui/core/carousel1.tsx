/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Dimensions, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

import clr from '../theme/colors';
import { SBImageItem } from './components/SBImageItem';

const PAGE_WIDTH = Dimensions.get('window').width;
const colors = [clr.black, clr.black, clr.black, clr.black, clr.black];

export function MainCarousel() {
  const progressValue = useSharedValue<number>(0);
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: 200,
  } as const;

  return (
    <GestureHandlerRootView>
      <View
        style={{
          marginTop: 5,
          alignItems: 'center',
        }}
      >
        <Carousel
          {...baseOptions}
          style={{
            width: '100%',
          }}
          loop
          pagingEnabled={true}
          snapEnabled={true}
          autoPlay={true}
          autoPlayInterval={3000}
          onProgressChange={(_, absoluteProgress) =>
            (progressValue.value = absoluteProgress)
          }
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          data={colors}
          renderItem={({ index }) => <SBImageItem index={index} />}
        />
        {!!progressValue && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 100,
              alignSelf: 'center',
            }}
          >
            {colors.map((backgroundColor, index) => {
              return (
                <PaginationItem
                  backgroundColor={backgroundColor}
                  animValue={progressValue}
                  index={index}
                  key={index}
                  isRotate={false}
                  length={colors.length}
                />
              );
            })}
          </View>
        )}
      </View>
    </GestureHandlerRootView>
  );
}

const PaginationItem: React.FC<{
  index: number;
  backgroundColor: string;
  length: number;
  animValue: Animated.SharedValue<number>;
  isRotate?: boolean;
}> = (props) => {
  const { animValue, index, length, backgroundColor, isRotate } = props;
  const width = 7;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: 'white',
        width,
        height: width,
        borderColor: '#f3f3f3',
        marginBottom: 10,
        borderRadius: 50,
        borderWidth: 2,
        overflow: 'hidden',
        transform: [
          {
            rotateZ: isRotate ? '90deg' : '0deg',
          },
        ],
      }}
    >
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};
