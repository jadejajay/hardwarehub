/* eslint-disable react-native/no-inline-styles */
import Feather from '@expo/vector-icons/Feather';
import * as React from 'react';

import {
  GradientText,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from '@/ui';

type Props = { title: string };
export const Catalogue = ({ title }: Props) => {
  return (
    <View className="mt-4">
      <GradientText t={title} />
      <ScrollView horizontal className="h-52 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <View className="flex-column m-1 w-28 text-ellipsis rounded-md border">
            <View className="flex-auto rounded-2xl bg-gray-100 ">
              <View className="h-full w-full rounded-md bg-white p-0.5">
                <Image
                  source={require('../../../assets/svg/bg.png')}
                  style={{ flex: 1, borderRadius: 6 }}
                />
              </View>
            </View>
            <View className="grow-0 items-center justify-center ">
              <Text variant="sm" className="text-center" numberOfLines={1}>
                Catalogue {item}
              </Text>
            </View>
            <View className="grow-0 flex-row items-center justify-between p-1">
              <TouchableOpacity className="flex-row items-center justify-center gap-2">
                <Feather name="eye" size={16} />
                <Text variant="sm" className="text-center">
                  {item + 9}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-center gap-2">
                <Feather name="download" size={16} />
                <Text variant="sm" className="text-center">
                  {index + 3}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <TouchableOpacity className="m-1 w-28 items-center justify-center">
          <Text className="font-bold">See All</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
