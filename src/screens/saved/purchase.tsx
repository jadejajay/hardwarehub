/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import { Image, Text, TouchableOpacity, View } from '@/ui';

export const PurchasePage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Brand 1',
      price: 99,
      quantity: 1,
      image: { uri: 'https://picsum.photos/seed/picsum/200/300' },
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Brand 2',
      price: 149,
      quantity: 1,
      image: { uri: 'https://picsum.photos/seed/picsum/200/300' },
    },
    // Add more products here
  ]);
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleAddQuantity = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleRemoveQuantity = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleRemoveProduct = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const handlePurchase = () => {
    // Implement purchase logic here
    alert('Purchase Successfull!!!');
    console.log('Purchasing:', products);
  };

  return (
    <View className="flex-1 items-center justify-center">
      {products.length === 0 ? (
        <Text className="text-lg">No products added.</Text>
      ) : (
        products.map((product) => (
          <View key={product.id} className="mb-8 flex flex-row items-center">
            <Image
              source={product.image}
              style={{ width: 100, height: 100, marginRight: 10 }}
              className="mr-4 h-24 w-24"
            />

            <View className="flex-1">
              <Text className="mb-2 text-lg font-semibold">{product.name}</Text>
              <Text className="mb-2 text-sm text-gray-500">
                {product.description}
              </Text>
              <Text className="mb-2 text-sm text-gray-500">
                Brand: {product.brand}
              </Text>
              <Text className="mb-2 text-sm text-gray-500">
                Price: ${product.price}
              </Text>

              <View className="mb-2 flex flex-row items-center">
                <TouchableOpacity
                  onPress={() => handleRemoveQuantity(product.id)}
                  style={{
                    backgroundColor: '#DD4B39',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 5,
                  }}
                  className="rounded bg-red-500 px-4 py-2"
                >
                  <Text className="text-white">-</Text>
                </TouchableOpacity>

                <Text className="mx-2 text-lg">{product.quantity}</Text>

                <TouchableOpacity
                  onPress={() => handleAddQuantity(product.id)}
                  style={{
                    backgroundColor: '#4CAF50',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 5,
                  }}
                  className="rounded bg-green-500 px-4 py-2"
                >
                  <Text className="text-white">+</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => handleRemoveProduct(product.id)}
                style={{
                  backgroundColor: 'blue',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
                className="rounded bg-blue-500 px-4 py-2"
              >
                <Text className="text-white">Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}

      {products.length > 0 && (
        <>
          <View className="flex flex-row justify-between">
            <Text className="text-lg font-semibold">Total Price:</Text>
            <Text className="text-lg font-semibold">${totalPrice}</Text>
          </View>
          <TouchableOpacity
            onPress={handlePurchase}
            style={{
              backgroundColor: 'green',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            className="rounded bg-green-500 px-8 py-4"
          >
            <Text className="text-lg text-white">Purchase</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
