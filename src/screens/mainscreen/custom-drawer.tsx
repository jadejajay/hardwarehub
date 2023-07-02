/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Image, Text, TouchableOpacity, View } from '@/ui';

type Props = {
  name: String;
  profileImage: any;
};
export const Profile = ({ name, profileImage }: Props) => {
  return (
    <View style={{ marginTop: '10%', marginLeft: '3%' }}>
      <Image
        source={profileImage}
        style={{
          width: 70,
          height: 70,
          borderRadius: 10,
          marginTop: 2,
        }}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 10,
        }}
      >
        {name}
      </Text>

      <TouchableOpacity>
        <Text
          style={{
            marginTop: 4,
          }}
        >
          View Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};
