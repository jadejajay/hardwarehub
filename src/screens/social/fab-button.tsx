import React from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Image } from '@/ui';
interface FABButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

const FABButton: React.FC<FABButtonProps> = ({ onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.8}
    >
      <Image
        source={require('../../../assets/icon/plus.gif')}
        className="h-full w-full"
        contentFit="contain"
      />
      {/* You can add your FAB icon or content here */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 54,
    height: 54,
    borderRadius: 28,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    zIndex: 1000,
  },
});

export default FABButton;
