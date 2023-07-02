import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import type { TxKeyPath } from '@/core';
import { Text, View } from '@/ui';

type Props = {
  children: React.ReactNode;
  title?: TxKeyPath;
};

export const ItemsContainer = ({ children, title }: Props) => {
  return (
    <GestureHandlerRootView>
      {title && <Text variant="lg" className="pb-2 pt-4" tx={title} />}
      {
        <View className=" rounded-md border-[1px] border-neutral-200 dark:border-charcoal-700 dark:bg-charcoal-800">
          {children}
        </View>
      }
    </GestureHandlerRootView>
  );
};
