/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { APIProvider } from '@/api';
import { hydrateAuth, loadSelectedTheme } from '@/core';
import { RootNavigator } from '@/navigation';

hydrateAuth();
loadSelectedTheme();
SplashScreen.preventAutoHideAsync();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <APIProvider>
          <SafeAreaProvider>
            <RootNavigator />
          </SafeAreaProvider>
          <FlashMessage position="top" />
        </APIProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
