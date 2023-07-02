/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Image, Text, TouchableOpacity, View } from '@/ui';

export const FavoriteItemsPage = () => {
  const { navigate } = useNavigation();

  const favoriteItems = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Brand 1',
      price: '$99',
      image: { uri: 'https://picsum.photos/seed/12/picsum/200/300' },
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Brand 2',
      price: '$149',
      image: { uri: 'https://picsum.photos/seed/picsum/200/300' },
    },
    // Add more favorite items here
  ];

  const handlePurchase = (item: {
    id?: number;
    name: any;
    description?: string;
    brand?: string;
    price?: string;
    image?: any;
  }) => {
    // Implement purchase logic here
    console.log('Purchasing', item.name);
    navigate('PurchasePage');
  };

  return (
    <View className="flex-1 ">
      <Text className="mb-8 text-3xl font-bold">Favorite Items</Text>

      {favoriteItems.map((item) => (
        <View key={item.id} className="mb-8 flex flex-row items-center">
          <Image
            source={item.image}
            style={{ width: 100, height: 100, marginRight: 10 }}
            className="mr-4 h-24 w-24"
          />

          <View className="flex-1">
            <Text className="mb-2 text-lg font-semibold">{item.name}</Text>
            <Text className="mb-2 text-sm text-gray-500">
              {item.description}
            </Text>
            <Text className="mb-2 text-sm text-gray-500">
              Brand: {item.brand}
            </Text>
            <Text className="mb-4 text-sm text-gray-500">
              Price: {item.price}
            </Text>

            <TouchableOpacity
              onPress={() => handlePurchase(item)}
              style={{
                backgroundColor: 'blue',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
              }}
              className="rounded bg-blue-500 px-4 py-2"
            >
              <Text className="text-white">Purchase</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};
