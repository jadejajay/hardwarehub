import * as React from 'react';
import { Linking } from 'react-native';

// import IntentLauncher from 'react-native-intent-launcher';
import { Text, TouchableOpacity, View } from '@/ui';

type Props = {};
export const ArView = ({}: Props) => {
  // const intentUri =
  //   'https://arvr.google.com/scene-viewer/1.0' +
  //   '?file=http://itekindia.com/nimmi/ar/model.gltf' +
  //   '&mode=ar_only';

  // const packageId = 'com.google.ar.core';

  // Linking.canOpenURL(intentUri).then((supported) => {
  //   if (supported) {
  //     IntentLauncher.startActivity({
  //       action: IntentLauncher.ACTION_VIEW,
  //       data: intentUri,
  //       packageName: packageId,
  //     });
  //   } else {
  //     console.log('Cannot handle URL: ' + intentUri);
  //   }
  // });
  return (
    <View className="items-center justify-center">
      {/* <View className="absolute h-40 top-0 w-full z-20 bg-white"></View> */}
      {/* <WebView
        source={{
          // uri: 'https://3dviewer.net/#model=assets/models/DamagedHelmet.glb',
          // uri: intentUri,
          uri: 'http://itekindia.com/nimmi/ar/',
        }}
      /> */}
      <TouchableOpacity
        onPress={() => Linking.openURL('http://itekindia.com/nimmi/ar/')}
        className="items-center justify-center"
      >
        <Text className="items-center justify-center">Open 3d Model</Text>
      </TouchableOpacity>
      {/* <View className="absolute h-40 bottom-0 w-full z-20 bg-white"></View> */}
    </View>
  );
};
