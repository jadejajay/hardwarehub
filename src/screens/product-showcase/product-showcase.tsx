/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { memo, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { View } from '@/ui';

import { Hardware } from './hardware';
import { HomeDecore } from './home-decore';
import { Sanitary } from './sanitary';
import { Tiles } from './tiles';
import { Wooden } from './wooden';

const { width } = Dimensions.get('window');

const headers = ['Hardware', 'Tiles', 'Sanitary', 'Wooden', 'Home Decore'];

let animationActive = true;
let animationActiveRef: NodeJS.Timeout | null;

export function ProductShowcase() {
  const [headerWidths, setWidths] = useState<number[]>([]);
  const [active, setActive] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const barTranslate = Animated.multiply(scrollX, -1);
  const barTranslate1 = useRef(new Animated.Value(0)).current;
  const headerScrollView = useRef<FlatList | null>(null);
  const itemScrollView = useRef<FlatList | null>(null);

  useEffect(() => {
    let leftOffset = 0;

    for (let i = 0; i < active; i += 1) {
      leftOffset += headerWidths[i] || 0;
    }

    headerScrollView.current?.scrollToIndex({
      index: active,
      viewPosition: 0.5,
    });
    Animated.spring(barTranslate1, {
      toValue: leftOffset,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  }, [active]);

  const onPressHeader = (index: number) => {
    if (animationActiveRef) {
      clearTimeout(animationActiveRef);
    }

    if (active !== index) {
      animationActive = false;
      animationActiveRef = setTimeout(() => {
        animationActive = true;
      }, 400);

      itemScrollView.current?.scrollToIndex({ index });
      LayoutAnimation.easeInEaseOut();
      setActive(index);
    }
  };

  const onScroll = (e: any) => {
    const x = e.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(x / width + 0.5);

    if (active !== newIndex && animationActive) {
      LayoutAnimation.easeInEaseOut();
      setActive(newIndex);
    }
  };

  const onHeaderLayout = (width: number, index: number) => {
    const newWidths = [...headerWidths];
    newWidths[index] = width;
    setWidths(newWidths);
  };

  return (
    <View className="mt-16 flex-1">
      <FlatList
        data={headers}
        ref={headerScrollView}
        keyExtractor={(item) => item}
        horizontal
        style={styles.headerScroll}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => <View style={[styles.headerBar, {}]} />}
        renderItem={({ item, index }) => (
          <View style={{ overflow: 'hidden' }}>
            <TouchableOpacity
              onLayout={(e) =>
                onHeaderLayout(e.nativeEvent.layout.width, index)
              }
              onPress={() => onPressHeader(index)}
              key={item}
              style={[
                styles.headerItem,
                {
                  backgroundColor: active === index ? '#f25600' : null,
                  borderRadius: 30,
                },
              ]}
            >
              <Text
                style={{
                  fontFamily: 'SSProBold',
                  color: active === index ? '#fff' : null,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Animated.View
        style={[
          styles.headerBar,
          {
            width: headerWidths[active],
            transform: [
              { translateX: barTranslate },
              { translateX: barTranslate1 },
            ],
          },
        ]}
      />
      <FlatList
        data={headers}
        ref={itemScrollView}
        keyExtractor={(item) => item}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        renderItem={({ item, index }) => (
          <Dynamic style={styles.mainItem} item={item} index={index} />
        )}
      />
    </View>
  );
}
type props = { item: string; index: number; style: any };
const Dynamic = memo(({ item, index, style }: props) => {
  switch (item) {
    case 'Hardware':
      return <Hardware data={index} style={style} />;
    case 'Tiles':
      return <Tiles data={index} style={style} />;
    case 'Sanitary':
      return <Sanitary data={index} style={style} />;
    case 'Wooden':
      return <Wooden data={index} style={style} />;
    case 'Home Decore':
      return <HomeDecore data={index} style={style} />;

    default:
      return null;
  }
});

const styles = StyleSheet.create({
  headerScroll: {
    flexGrow: 0,
  },
  headerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    borderBottomWidth: 1,
    padding: 7,
  },
  mainItem: {
    width: width,
  },
  headerBar: {
    height: 3,
    position: 'absolute',
    bottom: 1,
  },
});
