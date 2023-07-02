import IonIcons from '@expo/vector-icons/Ionicons';
import * as React from 'react';

import { Image, Input, ScrollView, Text, TouchableOpacity, View } from '@/ui';

import Navbar from './navbar';

type Props = {};
export const GstView = ({}: Props) => {
  const [search, setSearch] = React.useState('');
  const [result, setResult] = React.useState('Api is not working');

  const handleSearch = () => {
    console.log('search', search);
    setResult('');
  };
  return (
    <View>
      <View className="mt-20 w-screen items-center">
        <Text className="text-xl text-indigo-600">
          Find GST Number Information
        </Text>
        <View className="w-screen p-3">
          <Input
            className="m-2 w-max rounded-lg border  border-indigo-600 p-2 pr-10"
            placeholder=" Ex : 24AAAAA0000A1Z5"
            value={search}
            onChangeText={(e) => {
              setSearch(e);
            }}
          />
          <TouchableOpacity
            className="absolute right-7 top-7"
            onPress={handleSearch}
          >
            <IonIcons name="search" size={24} color="rgb(79, 70, 229)" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="w-screen">
        {result ? (
          <View className="w-full p-3">
            <Text variant="h3" className="text-red-600">
              {result}
            </Text>
          </View>
        ) : (
          <View className="flex-row items-center justify-center p-3">
            <Image
              source={{
                uri: 'https://cdn.dribbble.com/users/898770/screenshots/3744292/search-bar.gif',
              }}
              className="h-32 w-60"
              contentFit="none"
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};
