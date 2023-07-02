/* eslint-disable unicorn/filename-case */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  index?: number;
  showIndex?: boolean;
}

export const SBImageItem: React.FC<Props> = ({
  style,
  index: _index,
  showIndex = true,
}) => {
  const index = (_index || 0) + 1;

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="small" />
      <Image
        key={index}
        style={styles.image}
        source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9uaVWl8J7S9aIRfaipgQpQHaE8%26pid%3DApi&f=1&ipt=2072ae580d4252c6f14e93e22a0ed726bff451c65cb9d0cf2ccdabd88a69d570&ipo=images',
        }}
        resizeMode="stretch"
      />
      <Text
        style={{
          position: 'absolute',
          color: 'white',
          fontSize: 18,
          overflow: 'hidden',
          top: 5,
          left: 5,
        }}
      >
        {showIndex ? index : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
