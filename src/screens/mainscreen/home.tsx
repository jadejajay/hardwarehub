/* eslint-disable react-native/no-inline-styles */
import { useColorScheme } from 'nativewind';
import React, { memo, useRef, useState } from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { AboutUs } from '../about-us';
import { AdPlans } from '../ad-plans';
import { ArView } from '../ar-view';
import { Contact } from '../contact';
import { GstView } from '../gst-view';
import { OurServices } from '../our-services';
import { TermsConditions } from '../terms-conditions';
// Photo
import { Profile } from './custom-drawer';
import { TabButton } from './custom-tab';
import { MainScreenView } from './main';
// import CurrentScreen from "./screens/CurrentScreen";
import { logOutTab, tabs } from './util';

export function Home() {
  const { colorScheme } = useColorScheme();
  const [CurrentTab, setCurrentTab] = useState('Home');
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <View style={[styles.container, { backgroundColor: '#e5e5e5' }]}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          padding: 15,
        }}
      >
        <Profile
          name="any person"
          profileImage={require('../../../assets/images/image-1.jpg')}
        />

        <View style={{ flexGrow: 1, marginTop: 5 }}>
          {
            // Tab Bar Buttons....
          }
          {tabs.map((item) => {
            return (
              <TabButton
                currentTab={CurrentTab}
                setCurrentTab={setCurrentTab}
                text={item.text}
                icon={item.icon}
                key={item.id}
              />
            );
          })}
        </View>

        <View>
          <TabButton
            currentTab={CurrentTab}
            setCurrentTab={setCurrentTab}
            text={logOutTab.text}
            icon={logOutTab.icon}
            key={logOutTab.id}
          />
        </View>
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 0,
          paddingTop: 20,
          paddingBottom: 40,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            backgroundColor: 'transparent',
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => {
              // Do Actions Here....
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
            style={{ zIndex: 10, width: 50 }}
          >
            <View style={{ height: 45, backgroundColor: 'transparent' }}>
              <Image
                source={require('../../../assets/icon/menu.png')}
                style={{
                  width: 24,
                  height: 24,
                  marginLeft: 15,
                  marginTop: 15,
                }}
              />
            </View>
          </TouchableOpacity>
          <Comp str={CurrentTab} />
        </Animated.View>
      </Animated.View>
    </View>
  );
}

// For multiple Buttons...
type props = { str: string };
const Comp = memo(({ str }: props) => {
  switch (str) {
    case 'Home':
      return <MainScreenView />;
    case 'About Us':
      return <AboutUs />;
    case 'Gst Info':
      return <GstView />;
    case 'Our Services':
      return <OurServices />;
    case 'Ar View':
      return <ArView />;
    case 'Ad Plans':
      return <AdPlans />;
    case 'Contact Us':
      return <Contact />;
    case 'Terms':
      return <TermsConditions />;
    case 'LogOut':
      return null;

    default:
      return null;
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
