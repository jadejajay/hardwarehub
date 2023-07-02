/* eslint-disable react-native/no-inline-styles */
// import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import {
  ArrowRight,
  EmptyList,
  GradientText,
  List,
  ScrollView,
  SquareCard,
  Text,
  View,
} from '@/ui';

// type Props = Logos & { onPress?: () => void };

export const LogoStack = () => {
  // const { data, isLoading, isError } = useLogos();
  const data = [
    {
      id: '1',
      image: 'http://itekindia.com/nimmi/logos/logo1.jpg',
      isVerified: '1',
      isAd: '1',
      slug: "'company1'",
    },
    {
      id: '2',
      image: 'http://itekindia.com/nimmi/logos/logo2.png',
      isVerified: '1',
      isAd: '1',
      slug: "'company2'",
    },
    {
      id: '3',
      image: 'http://itekindia.com/nimmi/logos/logo3.png',
      isVerified: '1',
      isAd: '0',
      slug: "'company3'",
    },
    {
      id: '4',
      image: 'http://itekindia.com/nimmi/logos/logo4.jpg',
      isVerified: '1',
      isAd: '0',
      slug: "'company4'",
    },
    {
      id: '5',
      image: 'http://itekindia.com/nimmi/logos/logo5.jpg',
      isVerified: '0',
      isAd: '0',
      slug: "'company5'",
    },
    {
      id: '6',
      image: 'http://itekindia.com/nimmi/logos/logo6.jpg',
      isVerified: '0',
      isAd: '0',
      slug: "'company6'",
    },
    {
      id: '7',
      image: 'http://itekindia.com/nimmi/logos/logo7.jpg',
      isVerified: '0',
      isAd: '0',
      slug: "'company7'",
    },
  ];

  // const renderItem = React.useCallback(
  //   ({ item }) => <SquareCard {...item} onPress={() => navigate('ChatPage')} />,
  //   [navigate]
  // );
  const renderItem = ({ item, i }: { item: any; i: any }) => (
    <SquareCard {...item} index={i} />
  );

  if (false) {
    return (
      <View>
        <Text> Error Loading data </Text>
      </View>
    );
  }
  return (
    <View
      style={{
        height: 135,
        width: '100%',
        paddingHorizontal: 7,
        marginBottom: 8,
      }}
    >
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <GradientText t="Brands in highlight" w={175} />
        <TouchableWithoutFeedback style={{ marginTop: 8 }}>
          <ArrowRight />
        </TouchableWithoutFeedback>
      </View>
      <ScrollView horizontal style={{ height: 110, width: '100%' }}>
        <List
          data={data}
          horizontal
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => `item-${index}`}
          // ListEmptyComponent={<EmptyList isLoading={isLoading} />}
          estimatedItemSize={7}
        />
      </ScrollView>
    </View>
  );
};
