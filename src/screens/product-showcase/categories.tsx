/* eslint-disable react-native/no-inline-styles */
// import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';

import { Image, Text, TouchableOpacity, View } from '@/ui';

type Props = { data: any };
export const Categories = ({ data }: Props) => {
  const [selectedChipIndex2, setSelectedChipIndex2] = useState(0);

  const handleChipPress2 = (index) => {
    setSelectedChipIndex2(index);
  };

  return (
    <View className="flex-1">
      <Text className="text-xl" style={{ fontFamily: 'Ruluko' }}>
        Search By Categories
      </Text>
      <View className="flex-row flex-wrap">
        {data.map((item, i) => {
          return (
            <Chip key={i} label={item} onPress={() => handleChipPress2(i)} />
          );
        })}
        <View className="border-0.5 m-1 h-0 w-full" />
      </View>
    </View>
  );
};

const Chip = ({ label, onPress }: { label: string; onPress: () => void }) => {
  // const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className="m-2 w-24 rounded border p-1"
      style={{}}
    >
      <Image
        source={require('../../../assets/images/image-6.jpg')}
        className=" h-16"
      />
      <Text
        style={{
          fontSize: 12,
          fontFamily: 'Ruluko',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
