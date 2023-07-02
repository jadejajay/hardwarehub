import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect } from 'react';

import { useAuth } from '@/core';
import { useIsFirstTime } from '@/core/hooks';
import { Onboarding } from '@/screens';

import { AuthNavigator } from './auth-navigator';
import { NavigationContainer } from './navigation-container';
import { TabNavigator } from './tab-navigator';
const Stack = createNativeStackNavigator();

export const Root = () => {
  const status = useAuth.use.status();
  const [fontsLoaded] = useFonts({
    Ruluko: require('../../assets/fonts/Ruluko-Regular.ttf'),
    Amita: require('../../assets/fonts/amita-regular.ttf'),
    SSProBold: require('../../assets/fonts/SourceSansPro-Bold.ttf'),
  });
  const [isFirstTime] = useIsFirstTime();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  onLayoutRootView();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'none',
      }}
      id="root"
    >
      {isFirstTime ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : (
        <Stack.Group>
          {status === 'signOut' ? (
            <Stack.Screen name="Auth" component={AuthNavigator} />
          ) : (
            <Stack.Screen name="App" component={TabNavigator} />
          )}
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
