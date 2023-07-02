import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

import { ScrollView } from '@/ui';

import ProductShowcase from './showcase';

const products = [
  {
    id: '1',
    name: 'Product 1',
    image: 'https://picsum.photos/200/300',
    price: 9.99,
  },
  {
    id: '2',
    name: 'Product 2',
    image: 'https://picsum.photos/200/300',
    price: 19.99,
  },
  {
    id: '3',
    name: 'Product 3',
    image: 'https://picsum.photos/200/300',
    price: 19.99,
  },
  {
    id: '4',
    name: 'Product 4',
    image: 'https://picsum.photos/200/300',
    price: 19.99,
  },
  {
    id: '5',
    name: 'Product 5',
    image: 'https://picsum.photos/200/300',
    price: 19.99,
  },
  {
    id: '6',
    name: 'Product 6',
    image: 'https://picsum.photos/200/300',
    price: 19.99,
  },
  {
    id: '7',
    name: 'Product 7',
    image: 'https://picsum.photos/200/300',
    price: 19.99,
  },
  {
    id: '8',
    name: 'Product 8',
    image: 'https://picsum.photos/200/300',
    price: 19.99,
  },
  // Add more products as needed
];

type Props = {};
export const ProductList = ({}: Props) => {
  const { navigate } = useNavigation();
  const handleProductPress = (product) => {
    // Handle the press event for the product
    navigate('Demo');
    // console.log('Product pressed:', product);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="mt-7 flex-1">
      <ProductShowcase
        products={products}
        onProductPress={handleProductPress}
      />
    </ScrollView>
  );
};
