import React, { useRef } from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const headerHeight = 120;
const items = Array.from({ length: 20 }, (_, index) => index + 1);

export function AnimatedHeader1() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const _scrollY = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolateLeft: 'clamp',
  });
  const headerTranslate = Animated.diffClamp(
    _scrollY,
    0,
    headerHeight / 2
  ).interpolate({
    inputRange: [0, 1],
    outputRange: [0, -1],
  });

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
          }
        )}
      >
        {items.map((item) => (
          <View style={styles.item} key={item}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://i.ibb.co/YySxPQC/pro.jpeg',
              }}
            />
            <View style={styles.detail}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.description}>Message..</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Animated.View
        style={[
          styles.header,
          { transform: [{ translateY: headerTranslate }] },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingTop: headerHeight / 2,
  },
  header: {
    height: headerHeight,
    width: '100%',
    backgroundColor: '#075E54',
    position: 'absolute',
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 30,
    backgroundColor: '#ccc',
  },
  detail: {
    marginLeft: 10,
  },
  name: {
    fontSize: 15,
  },
  description: {
    opacity: 0.7,
  },
});
