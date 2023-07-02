/* eslint-disable react-native/no-inline-styles */
import Feather from '@expo/vector-icons/Feather';
import * as React from 'react';

import { Image, ScrollView, Text, View, Pressable } from '@/ui';
import { useNavigation } from '@react-navigation/native';

type Props = { style: any };
export const Catalogue = ({ style }: Props) => {
  const { navigate } = useNavigation();
  const data = [1, 2, 3, 4, 5];
  return (
    <ScrollView style={style} showsVerticalScrollIndicator={false}>
      <Pressable
        className="flex-1 flex-row flex-wrap"
        onPress={() => navigate('PdfView')}
      >
        {/* repeated */}
        {data.map((item, index) => (
          <View className="h-64 w-1/2 p-4 ">
            <View className="flex-column flex-1 text-ellipsis rounded-md border">
              <View className="flex-auto rounded-2xl bg-gray-100 ">
                <View className="h-full w-full rounded-md bg-white p-0.5">
                  <Image
                    source={require('../../../assets/svg/bg.png')}
                    style={{ flex: 1, borderRadius: 6 }}
                  />
                </View>
              </View>
              <View className="grow-0 items-center justify-center ">
                <Text variant="md" className="text-center">
                  Catalogue {item}
                </Text>
              </View>
              <View className="grow-0 flex-row items-center justify-between p-1">
                <View className="flex-row items-start justify-start gap-3">
                  <Feather name="eye" size={24} />
                  <Text variant="md" className="text-center">
                    {item + 9}
                  </Text>
                </View>
                <View className="flex-row items-center justify-center gap-3">
                  <Feather name="download" size={24} />
                  <Text variant="md" className="text-center">
                    {index + 3}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
        {/* content */}
      </Pressable>
    </ScrollView>
  );
};
