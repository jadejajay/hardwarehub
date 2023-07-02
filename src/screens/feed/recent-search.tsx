import * as React from 'react';

import { List, Text, View } from '@/ui';

type Props = {};
export const RecentSearch = ({}: Props) => {
  return (
    <View className="h-12">
      <Text className="text-base">RecentSearch Component</Text>
      <List renderItem={} />
    </View>
  );
};
