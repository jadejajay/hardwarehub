/* eslint-disable react-native/no-inline-styles */

import Feather from '@expo/vector-icons/Feather';
import * as React from 'react';
import { Card } from 'react-native-ui-lib';

import { Image, ScrollView, Text, TouchableOpacity, View } from '@/ui';

type Props = {
  data: any;
  style: any;
  background: string;
  logo: string;
  rating: number;
  name: string;
  category: string;
  type: string;
  verified: boolean;
  premium: boolean;
  shareLink: string;
  callLink: string;
  whatsappLink: string;
  emailLink: string;
  websiteLink: string;
  locationLink: string;
};
export const CompanyProfileCard = ({
  style,
  logo = 'http://itekindia.com/nimmi/logos/logo1.jpg',
  rating = 4.5,
  name = 'Creative',
  category = 'Hardware',
  type = 'Manufacturer',
  verified = true,
  premium = true,
  shareLink = 'http://itekindia.com/nimmi/logos/logo1.jpg',
  callLink = 'http://itekindia.com/nimmi/logos/logo1.jpg',
  whatsappLink = 'http://itekindia.com/nimmi/logos/logo1.jpg',
  emailLink = 'http://itekindia.com/nimmi/logos/logo1.jpg',
  websiteLink = 'http://itekindia.com/nimmi/logos/logo1.jpg',
  locationLink = 'http://itekindia.com/nimmi/logos/logo1.jpg',
}: Props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style}>
      <Card elevation={10} style={{ flex: 1, padding: 10 }}>
        <Card.Image
          source={{ uri: logo }}
          style={{ width: 100, height: 100 }}
        />
        <Card.Section
          content={[{ text: name, text70: true, grey10: true }]}
          contentStyle={{ alignItems: 'center' }}
        />
        <View className="flex-row items-center">
          <Text className="text-2xl font-bold">{name}</Text>

          {verified && (
            <Image
              source={require('../../../assets/verified-icon.png')}
              style={{ width: 24, height: 24 }}
            />
          )}
        </View>
        <Text className="text-lg">{category}</Text>
        <Text className="text-lg">{type}</Text>
        <Text className="text-lg">
          {premium && <Feather name="star" size={24} color="black" />}
          {rating}
        </Text>
        <View className="flex-column absolute right-3 top-3 gap-3">
          <TouchableOpacity
            style={{ elevation: 8 }}
            onPress={() => shareDetails(shareLink)}
          >
            <Feather name="share" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ elevation: 8 }}
            onPress={() => callNumber(callLink)}
          >
            <Feather name="phone" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ elevation: 8 }}
            onPress={() => openWhatsApp(whatsappLink)}
          >
            <Feather name="message-circle" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ elevation: 8 }}
            onPress={() => sendEmail(emailLink)}
          >
            <Feather name="mail" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ elevation: 8 }}
            onPress={() => openWebsite(websiteLink)}
          >
            <Feather name="globe" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ elevation: 8 }}
            onPress={() => openLocation(locationLink)}
          >
            <Feather name="map-pin" size={24} />
          </TouchableOpacity>
        </View>
      </Card>
    </ScrollView>
  );
};
function shareDetails(shareLink: any): void {
  console.log('Function not implemented.', shareLink);
}

function callNumber(callLink: any): void {
  console.log('Function not implemented.', callLink);
}

function openWhatsApp(whatsappLink: any): void {
  console.log('Function not implemented.', whatsappLink);
}

function sendEmail(emailLink: any): void {
  console.log('Function not implemented.', emailLink);
}

function openWebsite(websiteLink: any): void {
  console.log('Function not implemented.', websiteLink);
}

function openLocation(locationLink: any): void {
  console.log('Function not implemented.', locationLink);
}
