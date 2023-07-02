// @ts-nocheck
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Image, Input, Pressable, View } from '@/ui';

const Navbar = () => {
  const { getParent } = useNavigation();

  const handleSearch = () => {
    // Logic to handle search goes here
    console.log('f');
  };

  return (
    <View className="absolute z-10 flex items-center justify-between rounded  ">
      {/* <View style={styles.searchIconContainer}> */}
      <View className="flex w-screen p-2">
        <Input
          className="h-9 rounded-lg border-b pr-9 pl-4 bg-white"
          placeholder="Search Ex: Rose Handle"
          onChange={handleSearch}
          caretHidden={false}
        />
      </View>
      <Pressable
        className="absolute top-3 right-3 items-center justify-center"
        onPress={handleSearch}
      >
        {/* Your search icon */}
        <Image
          // @ts-ignore
          className=" h-7 w-7"
          source={require('../../../assets/icon/zoom.png')}
        />
      </Pressable>
      {/* </View> */}
    </View>
  );
};

export default Navbar;
