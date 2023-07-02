/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import type { Logos } from '@/api';

type Props = Logos & { onPress?: any } & { index: any };

export const SquareCard = ({ image, isVerified, isAd, index }: Props) => {
  const { getParent } = useNavigation();
  return (
    <View key={index} style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() =>
          getParent()?.navigate('FeedNavigator', { screen: 'CompanyProfile' })
        }
        style={styles.imageContainer}
      >
        <Image
          source={{ uri: image }}
          style={styles.logo}
          resizeMode="stretch"
        />
      </TouchableWithoutFeedback>

      {isAd === '1' && (
        <Image
          source={require('../../../../assets/special-icon.png')}
          style={{
            width: 35,
            height: 35,
            position: 'absolute',
            top: -3,
            left: -5,
          }}
        />
      )}
      {isVerified === '1' && (
        <Image
          source={require('../../../../assets/verified-icon.png')}
          style={styles.verifiedIcon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: 16,
    elevation: 4,
  },
  imageContainer: {
    width: 84,
    height: 78,
    borderRadius: 10,
    borderColor: '#f25600',
    borderWidth: 2,
  },
  logo: {
    width: 80,
    height: 74,
    borderRadius: 8,
    borderColor: 'black',
  },
  verifiedIcon: {
    position: 'absolute',
    bottom: -6,
    right: -6,
    width: 18,
    height: 18,
  },
});
