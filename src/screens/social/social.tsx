import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';

import { Content } from './content';
import FABButton from './fab-button';

const headerHeight = 100;

export function Social() {
  const { getParent } = useNavigation();
  let scrollValue = 0;
  let headerVisible = true;
  let focused = false;

  const animation = useRef(new Animated.Value(1)).current;
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, headerHeight / 2 - 2],
  });
  const inputTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [headerHeight / 4, 0],
  });
  const opacity = animation;

  const onScroll = (e) => {
    if (focused) return;

    const y = e.nativeEvent.contentOffset.y;

    if (y > scrollValue && headerVisible && y > headerHeight / 2) {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = false;
    }
    if (y < scrollValue && !headerVisible) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = true;
    }
    scrollValue = y;
  };

  return (
    <View style={styles.container}>
      <FABButton
        onPress={() => {
          getParent()?.navigate('AccountsNavigator', { screen: 'EditCompany' });
        }}
      />
      <Content onScroll={onScroll} />

      <View style={styles.header}>
        <Animated.View
          style={[styles.searchContainer, { transform: [{ translateY }] }]}
        >
          <Animated.View
            style={[
              styles.inputContainer,
              { opacity, transform: [{ translateY: inputTranslateY }] },
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder="Search Ex. Wooden Videos ..."
              numberOfLines={3}
              inputMode="search"
              onEndEditing={() => console.log('Search ended')}
              onFocus={() => (focused = true)}
              onBlur={() => (focused = false)}
            />
          </Animated.View>
        </Animated.View>

        <Animated.View style={styles.firstContainer}>
          <Text style={styles.name}>Explore Community</Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingTop: headerHeight,
  },
  item: {
    height: 100,
    marginTop: 5,
    marginHorizontal: 5,
    backgroundColor: '#d4d4d4',
  },
  header: {
    height: headerHeight / 2,
    width: '100%',
    position: 'absolute',
  },
  firstContainer: {
    height: headerHeight / 2,
    backgroundColor: '#fff',
    elevation: 2,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  searchContainer: {
    height: headerHeight / 2,
    backgroundColor: '#fff',
    width: '100%',
    position: 'absolute',
    elevation: 2,
    padding: 10,
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 3,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    padding: 0,
    paddingHorizontal: 15,
    fontSize: 15,
  },
});
