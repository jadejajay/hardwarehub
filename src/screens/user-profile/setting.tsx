import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ListItemChevron } from '@rneui/base/dist/ListItem/ListItem.Chevron';
import * as React from 'react';

import { Text, TouchableOpacity, View } from '@/ui';

type Props = {};
export const Setting = ({}: Props) => {
  const { navigate } = useNavigation();
  return (
    <View className="flex-column m-2 rounded-md border">
      <TouchableOpacity
        className="flex-row justify-between p-3"
        onPress={() => navigate('Settings')}
      >
        <View className="flex-row gap-2">
          <Ionicons name="settings-outline" size={24} color="grey" />
          <Text variant="md">Settings</Text>
        </View>
        <ListItemChevron color="grey" size={24} />
      </TouchableOpacity>
    </View>
  );
};
