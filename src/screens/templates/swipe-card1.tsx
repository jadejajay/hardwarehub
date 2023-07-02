/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import type { PanResponderInstance } from 'react-native';
import {
  Animated,
  Dimensions,
  LayoutAnimation,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');
const offset = width / 5;

const random = () => parseInt(Math.random() * 150, 10);
const randomColor = () =>
  'rgb(' + random() + ',' + random() + ',' + random() + ')';
let _data: string[] | (() => string[]) = [];
for (let i = 0; i < 10; i += 1) _data.push(randomColor());

export default function SwipeCard() {
  const opacity = useRef(new Animated.Value(0)).current;
  const containerRef = useRef<View>(null);
  const [data, setData] = useState<string[]>(_data);

  const removeItem = () => {
    const newData = [...data];
    newData.splice(0, 1);
    newData.push(randomColor());
    LayoutAnimation.easeInEaseOut();
    setData(newData);
  };

  const setAction = (color?: string) => {
    if (color) containerRef.current?.setNativeProps({ backgroundColor: color });
    Animated.spring(opacity, {
      toValue: color ? 1 : 0,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };

  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const rotate = pan.x.interpolate({
    inputRange: [-width, 0, width],
    outputRange: ['-40deg', '0deg', '40deg'],
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: Animated.event([null, { dx: pan.x }], {
        useNativeDriver: false,
        listener: (e: any, g: { dx: number }) => {
          if (!isPositive && g.dx > offset) {
            isPositive = true;
            setAction('#00ff0066');
          } else if (isPositive && g.dx < offset) {
            isPositive = false;
            setAction();
          } else if (!isNegative && g.dx < -offset) {
            isNegative = true;
            setAction('#ff000066');
          } else if (isNegative && g.dx > -offset) {
            isNegative = false;
            setAction();
          }
        },
      }),
      onPanResponderRelease: (e, g) => {
        if (Math.abs(g.vx) > 1 || Math.abs(g.dx) > offset) {
          Animated.spring(pan, {
            toValue: { x: width * 2 * (g.dx < 0 ? -1 : 1), y: 0 },
            useNativeDriver: true,
            bounciness: 0,
          }).start();
          setTimeout(() => {
            removeItem();
          }, 100);
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
        isPositive = false;
        isNegative = false;
        setAction();
      },
      onPanResponderTerminate: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
        isPositive = false;
        isNegative = false;
        setAction();
      },
    })
  ).current;

  let isPositive = false;
  let isNegative = false;

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[StyleSheet.absoluteFill, { opacity }]}
        ref={containerRef}
      />
      <View style={styles.container}>
        {data.map((item, index) => (
          <Card
            key={item}
            item={item}
            index={index}
            removeItem={removeItem}
            data={data}
            setAction={setAction}
            pan={pan}
            rotate={rotate}
            panResponder={panResponder}
          />
        ))}
      </View>
    </View>
  );
}

interface CardProps {
  item: string;
  index: number;
  removeItem: () => void;
  data: string[];
  setAction: (color?: string) => void;
  pan: Animated.ValueXY;
  rotate: Animated.AnimatedInterpolation;
  panResponder: PanResponderInstance;
}

function Card({ item, index, data, pan, rotate, panResponder }: CardProps) {
  const marginTop = index * 10;

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        styles.center,
        { zIndex: data.length - index },
      ]}
    >
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.item,
          {
            backgroundColor: item,
            transform: [{ translateX: pan.x }, { rotate }],
            width: 80 - index * 1 + '%',
            marginTop,
          },
        ]}
      >
        <Text style={{ color: '#fff', fontSize: 25 }}>
          Swipe left or right!
        </Text>
        <Text style={{ color: '#fff', fontSize: 18 }}>{item}</Text>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: '70%',
    borderWidth: 1,
    borderColor: '#00000055',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
