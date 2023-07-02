/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { Image, Text, View } from '@/ui';

import Navbar from './navbar';

type Props = {};
export const AboutUs = ({}: Props) => {
  const companyData = {
    name: 'Company XYZ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet interdum sem, ac tempus lacus volutpat id. Donec viverra vel arcu ac convallis. Morbi gravida luctus lacinia. Ut ut arcu ut felis tincidunt placerat vel sit amet ipsum. Curabitur nec consequat ipsum, ac commodo libero.',
    location: '123 Main Street, City, Country',
    logo: { uri: 'https://picsum.photos/id/89/200/300' },
  };
  return (
    <View>
      <View className="items-center justify-center p-5">
        <Image
          source={companyData.logo}
          style={{
            width: 200,
            height: 200,
            marginBottom: 20,
            borderRadius: 20,
          }}
          className="mb-4 h-48 w-48"
        />
        <Text className="mb-8 text-3xl font-bold">{companyData.name}</Text>

        <Text className="mb-4 text-lg">{companyData.description}</Text>

        <Text className="text-lg ">Location: {companyData.location}</Text>
      </View>
    </View>
  );
};
