//########################################################################################################################
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
  View,
} from 'react-native';

import { ScrollView } from '@/ui';

import { AboutUs } from './about-company';
import { Catalogue } from './catalogue';
import { CompanyProfileCard } from './company-profile-card';
import { Contacts } from './contacts';
import { Gallery } from './gallery';
import Navbar from './navbar';
import { ProductsDetails } from './products-details';
import ReviewsComponent from './ratings';

const { width } = Dimensions.get('window');

const headers = [
  'Presents',
  'Products Details',
  'Catalogue',
  'Ratings',
  'Gallery',
  'Contacts',
  'About Company',
];

let animationActive = true;
let animationActiveRef: NodeJS.Timeout | null;

export function CompanyProfile() {
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
    <>
      <Navbar />
      <ScrollView style={styles.container}>
        {/* <ImageCard imageSource="" text="Company Profile" /> */}
        <View>
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
                      backgroundColor: active === index ? '#fcfcfc' : '#fff',
                    },
                  ]}
                >
                  <Text
                    style={{ color: active === index ? '#00f' : '#3d3d3d' }}
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
        </View>
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
      </ScrollView>
    </>
  );
}

type props = { item: string; index: number; style: any };
const Dynamic = memo(({ item, index, style }: props) => {
  switch (item) {
    case 'Presents':
      return <CompanyProfileCard data={index} style={style} />;
    case 'Products Details':
      return <ProductsDetails data={index} style={style} />;
    case 'Catalogue':
      return <Catalogue data={index} style={style} />;
    case 'Ratings':
      return <ReviewsComponent data={index} style={style} />;
    case 'Gallery':
      return <Gallery data={index} style={style} />;
    case 'Contacts':
      return <Contacts data={index} style={style} />;
    case 'About Company':
      return <AboutUs data={index} style={style} />;

    default:
      return null;
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
  },
  headerScroll: {
    flexGrow: 0,
  },
  headerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mainItem: {
    width: width,
    height: '100%',
    padding: 10,
  },
  headerBar: {
    height: 3,
    backgroundColor: '#00f',
    position: 'absolute',
    bottom: 1,
  },
});
