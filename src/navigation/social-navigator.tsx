import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { Social } from '@/screens';
// import { MyGallery } from '@/screens/company-profile/image-gallery';
import { InstagramLayout } from '@/screens/social/post-list';
import YoutubeReanimated from '@/screens/social/video-list';


export type SavedStackParamList = {
  Social: undefined;
  Gallery: undefined;
  Reel: undefined;
};

const Stack = createNativeStackNavigator<SavedStackParamList>();

export const SocialNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Social" component={Social} />
      <Stack.Screen name="Gallery" component={InstagramLayout} />
      <Stack.Screen name="Reel" component={YoutubeReanimated} />
    </Stack.Navigator>
  );
};
