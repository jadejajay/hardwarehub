/* eslint-disable react-native/no-inline-styles */
// import analytics from '@react-native-firebase/analytics';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const appInstanceId = analytics().getAppInstanceId();

const Navbar = () => {
  const { getParent } = useNavigation();
  const itemCount = 5;
  // const openDrawer = () => {
  //   // Logic to open the drawer goes here
  //   // @ts-ignore
  //   getParent('drawer').openDrawer();
  //   async () =>
  //     await analytics().logEvent('basket', {
  //       id: 3745092,
  //       item: 'mens grey t-shirt',
  //     });
  //   console.log('open drawer', appInstanceId);
  // };

  const handleSearch = () => {
    // Logic to handle search goes here
    // @ts-ignore
    getParent('home').navigate('Search');
  };

  const handleCart = () => {
    // Logic to handle cart goes here
    // @ts-ignore
    getParent('home').navigate('Cart');
  };
  return (
    <View style={styles.navbar}>
      {/* <TouchableOpacity onPress={openDrawer} style={styles.drawerIconContainer}>
        <Image
          // @ts-ignore
          source={require('../../../assets/icon/menu.png')}
          style={styles.drawerIcon}
        />
        <Image
          source={
            showMenu
              ? require('./close.png')
              : require('../../../assets/icon/menu.png')
          }
          style={styles.drawerIcon}
        />
      </TouchableOpacity> */}

      <View style={styles.searchIconContainer}>
        <TouchableOpacity onPress={handleSearch}>
          {/* Your search icon */}
          <Image
            // @ts-ignore
            source={require('../../../assets/icon/zoom.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCart}>
          {/* Your cart icon */}
          <Image
            // @ts-ignore
            source={require('../../../assets/icon/cart.png')}
            style={styles.cartIcon}
          />
          {itemCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{itemCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 55,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff00',
  },
  drawerIconContainer: {
    padding: 8,
  },
  searchIconContainer: {
    flexDirection: 'row',
    zIndex: 10,
  },
  searchIcon: {
    width: 28,
    height: 28,
  },
  cartIcon: {
    marginLeft: 7,
    width: 24,
    height: 24,
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    minWidth: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Navbar;
