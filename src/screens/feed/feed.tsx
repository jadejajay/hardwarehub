import React from 'react';

import { ProductList } from '../products';
import Navbar from './navbar';
import type { Product } from './types';

const list: Product[] = [
  {
    name: 'Product 123Product 123Product',
    image: 'https://picsum.photos/seed/696/3000/2000',
    category: 'Clothing',
    color: 'Red',
  },
  {
    name: 'Product 456',
    image: 'https://picsum.photos/200/200?random=456',
    category: 'Electronics',
    color: 'Green',
  },
  {
    name: 'Product 789',
    image: 'https://picsum.photos/200/200?random=789',
    category: 'Home Decor',
    color: 'Blue',
  },
];
const data: Product = list[0];

type Props = {};

export const Feed = ({}: Props) => {
  return (
    <>
      <Navbar />
      <ProductList />
    </>
  );
};
