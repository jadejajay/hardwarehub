import { ListItemChevron } from '@rneui/base/dist/ListItem/ListItem.Chevron';
import * as React from 'react';

import { Image, ScrollView, Text, TouchableOpacity, View } from '@/ui';

type Props = {};
const data = [1, 2, 3, 4, 5, 6, 7, 8];
export const Saved = ({}: Props) => {
  return (
    <View className="flex-column m-2 rounded-md border">
      <TouchableOpacity className="flex-row justify-between p-3">
        <Text variant="md">Saved</Text>
        <ListItemChevron color="grey" size={24} />
      </TouchableOpacity>
      <ScrollView horizontal className="flex-row gap-2 m-2">
        {data.map((item) => (
          <Image
            key={item}
            source={{ uri: 'https://picsum.photos/200' }}
            className="h-20 w-20 rounded-md border m-2"
          />
        ))}
      </ScrollView>
    </View>
  );
};
