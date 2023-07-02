/* eslint-disable react-native/no-inline-styles */
import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Text, View } from '@/ui';

type Props = {
  currentTab: any;
  setCurrentTab: any;
  text: string;
  icon: any;
};
export const TabButton = ({ currentTab, setCurrentTab, text, icon }: Props) => {
  // const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        if (text == 'LogOut') {
          // Do your Stuff...
        } else {
          setCurrentTab(text);
          // navigate(comp);
        }
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == text ? null : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderColor: '#f25600',
          borderBottomWidth: 1,
          borderRadius: 8,
          marginTop: 5,
        }}
      >
        {/* <Image
          source={icon}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == text ? '#f25600' : 'white',
          }}
        /> */}
        <MaterialIcons
          icon={icon}
          name={icon}
          style={{ color: currentTab == text ? '#f25600' : null }}
          size={25}
        />

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == text ? '#f25600' : null,
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
