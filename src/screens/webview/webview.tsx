import * as React from 'react';
import { WebView } from 'react-native-webview';

import { Text, View } from '@/ui';

type Props = {};
export const WebScreen = ({}: Props) => {
  return (
    <View>
      <View className="flex-1 items-center justify-center">
        <Text variant="body" className="text-center">
          Web Screen
        </Text>
      </View>
    </View>
  );
};
