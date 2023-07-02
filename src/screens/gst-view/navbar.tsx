// @ts-nocheck
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Navbar = () => {
  const { goBack } = useNavigation();
  const openDrawer = () => {
    // Logic to open the drawer goes here
    goBack();
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={openDrawer} style={styles.searchIconContainer}>
        {/* Your drawer icon */}
        <Image
          // @ts-ignore
          source={require('../../../assets/icon/go-back.png')}
          style={styles.drawerIcon}
        />
        <Text>GST Number Info</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff44',
    elevation: 3,
    zIndex: 100,
  },
  drawerIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  searchIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Navbar;
