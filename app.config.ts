import type { ConfigContext, ExpoConfig } from '@expo/config';

import { ClientEnv, Env, withEnvSuffix } from './env';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  slug: 'obytesapp',
  version: Env.VERSION.toString(),
  orientation: 'portrait',
  icon: `${withEnvSuffix('./assets/icon')}.png`,
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#F75469',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.BUNDLE_ID,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: `${withEnvSuffix('./assets/icon')}.png`,
      backgroundColor: '#FFFFFF',
    },
    googleServicesFile: './google-services.json',
    package: Env.PACKAGE,
    config: {
      googleMaps: {
        apiKey: 'AIzaSyAZOmV7fUE7Hcw4mEio5rjyo2dtzrl_sg0',
      },
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    ['@bacons/link-assets', ['./assets/fonts/Inter.ttf']],
    'expo-localization',
    'expo-image-picker',
    '@react-native-firebase/app',
    '@react-native-firebase/perf',
    '@react-native-firebase/crashlytics',
    [
      'expo-notifications',
      {
        icon: './myNotification.png',
        color: '#ffffff',
        sounds: ['./mysound1.wav', './mysound2.wav'],
        mode: 'production',
      },
    ],
    [
      'expo-av',
      {
        microphonePermission: 'Allow HardwareHub to access your microphone.',
      },
    ],
    [
      'expo-camera',
      {
        cameraPermission: 'Allow HardwareHub to access your camera.',
      },
    ],
    [
      'expo-sensors',
      {
        motionPermission: 'Allow HardwareHub to access your device motion.',
      },
    ],
    [
      'expo-document-picker',
      {
        iCloudContainerEnvironment: 'Production',
      },
    ],
    [
      'expo-image-picker',
      {
        photosPermission:
          'The app accesses your photos to let you share them with your friends.',
      },
    ],
    [
      'expo-local-authentication',
      {
        faceIDPermission: 'Allow HardwareHub to use Face ID.',
      },
    ],
    [
      'expo-location',
      {
        locationAlwaysAndWhenInUsePermission:
          'Allow HardwareHub to use your location.',
      },
    ],
    [
      'expo-media-library',
      {
        photosPermission: 'Allow HardwareHub to access your photos.',
        savePhotosPermission: 'Allow HardwareHub to save photos.',
        isAccessMediaLocationEnabled: true,
      },
    ],
  ],
  extra: {
    ...ClientEnv,
  },
});
