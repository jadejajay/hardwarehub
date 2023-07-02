import * as React from 'react';

import { View } from '@/ui';

import { ChatComponent } from './example/App';

type Props = {};
export const ChatPage = ({}: Props) => {
  return (
    <View className="flex-1">
      <ChatComponent />
    </View>
  );
};
