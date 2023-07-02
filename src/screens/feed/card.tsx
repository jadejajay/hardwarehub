/* eslint-disable react-native/no-inline-styles */
import { AirbnbRating } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

// import { Marquee, MarqueeDirections } from 'react-native-ui-lib';
// import MarqueeText from 'react-native-marquee';
// import type { Post } from '@/api';
import { Image, Pressable, Text, View } from '@/ui';

// import type { Product } from './types';

// type Props = Product & { onPress?: () => void; data: any };

export const Card = ({
  data,
  onPress = () => {},
}: {
  data: any;
  onPress: any;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const duration = 5000;
  const directionHorizontal = true;
  const numOfReps = -1;

  // const blurhash ='|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    Animated.timing(animatedValue, {
      toValue: isFlipped ? 0 : 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };
  return (
    <Pressable
      style={{ width: '100%', height: 250, padding: 8 }}
      onPress={flipCard}
    >
      <Animated.View
        style={[
          styles.cardContainer,
          isFlipped && styles.flippedCard,
          frontAnimatedStyle,
        ]}
      >
        <Pressable onPress={onPress} style={{ width: '100%' }}>
          <Image
            source={data.image}
            style={{
              width: '100%',
              height: 180,
              resizeMode: 'stretch',
              borderRadius: 8,
            }}
          />
        </Pressable>
        <View className="flex-row items-center justify-start pl-4">
          <Image
            source={data.image}
            style={{
              width: 60,
              height: 60,
              borderRadius: 8,
            }}
          />
          <View className="w-full pl-3">
            <View style={{ width: '100%', flexDirection: 'column' }}>
              <Text style={styles.header} numberOfLines={2}>
                Name: xyz abc
              </Text>
              <View className="flex-row">
                <AirbnbRating
                  isDisabled={true}
                  count={3}
                  size={14}
                  reviewSize={0}
                />
              </View>
            </View>
          </View>
          {/* <Text style={styles.name}>{data.name}</Text> */}
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.cardContainer,
          styles.backCard,
          isFlipped && styles.flippedCard,
          backAnimatedStyle,
        ]}
      >
        <Text style={styles.details}>Color: {data.color}</Text>
        <Text style={styles.details}>Category: {data.category}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 8,
    backfaceVisibility: 'hidden',
    borderWidth: 1,
  },
  header: {
    fontSize: 10,
    fontWeight: '400',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    marginBottom: 5,
  },
  backCard: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: '100%',
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    borderWidth: 1,
  },
  flippedCard: {
    transform: [{ rotateY: '180deg' }],
  },
  companyContainer: {
    position: 'relative',
    width: '100%',
    paddingStart: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
