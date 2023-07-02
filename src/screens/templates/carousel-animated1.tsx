import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, {
  scrollTo,
  useAnimatedRef,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const { width } = Dimensions.get('screen');
const data = [
  { id: 1, label: '1' },
  { id: 2, label: '2' },
  { id: 3, label: '3' },
  { id: 4, label: '4' },
  { id: 5, label: '5' },
  { id: 6, label: '1' }, // put first item at last with different id
];
const transitionDelay = 3000;

export function UserProfileScreen() {
  const scrollRef = useAnimatedRef();
  const scroll = useSharedValue(0);
  useDerivedValue(() => {
    scrollTo(scrollRef, scroll.value * width - 20, 0, false);
  });

  useEffect(() => {
    let interval1: NodeJS.Timeout, interval2: NodeJS.Timeout;
    interval2 = setTimeout(() => {
      (function moveRow(delay: number) {
        scroll.value =
          scroll.value === data.length - 1
            ? 0
            : withSpring(scroll.value + 1, springConfig(0));

        interval1 = setTimeout(() => {
          moveRow(scroll.value === data.length - 1 ? 0 : transitionDelay);
        }, delay);
      })(transitionDelay);
    }, transitionDelay);
    return () => {
      if (interval1) clearTimeout(interval1);
      if (interval2) clearTimeout(interval2);
    };
  }, []);

  return (
    <Animated.ScrollView
      ref={scrollRef}
      horizontal
      pagingEnabled
      contentContainerStyle={styles.list}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
    >
      {data.map((x) => (
        <View style={styles.item} key={x.id}>
          <Text style={styles.txt}>{x.label}</Text>
        </View>
      ))}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
    gap: 10,
  },
  item: {
    height: 150,
    width: width - 20,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 20,
    color: '#fff',
  },
});

const springConfig = (velocity: number) => {
  'worklet';
  return {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
    velocity,
  };
};
