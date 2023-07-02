/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

// Sample product data
const products = [
  {
    id: '1',
    name: 'Product 1',
    price: 19.99,
  },
  {
    id: '2',
    name: 'Product 2',
    price: 24.99,
  },
  {
    id: '3',
    name: 'Product 3',
    price: 124.99,
  },
  {
    id: '4',
    name: 'Product 4',
    price: 224.99,
  },
  {
    id: '5',
    name: 'Product 5',
    price: 234.99,
  },
  {
    id: '6',
    name: 'Product 6',
    price: 244.99,
  },
  {
    id: '7',
    name: 'Product 7',
    price: 524.99,
  },
  {
    id: '8',
    name: 'Product 8',
    price: 244.99,
  },
  {
    id: '9',
    name: 'Product 9',
    price: 234.99,
  },
  {
    id: '20',
    name: 'Product 20',
    price: 243.99,
  },
  // Add more products here
];

export const ProductListPage: React.FC = ({
  navigation,
}: {
  navigation: any;
}) => {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 16,
      }}
      onPress={() =>
        navigation.navigate('ProductShowcasePage', { productId: item.id })
      }
    >
      <Image
        source={{ uri: `https://picsum.photos/200/300?random=${item.id}` }}
        style={{ width: 200, height: 300, marginBottom: 8 }}
        resizeMode="cover"
      />
      <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
      <Text>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};
