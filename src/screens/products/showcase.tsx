/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface ProductShowcaseProps {
  products: Product[];
  onProductPress: (product: Product) => void;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  onProductPress,
}) => {
  const renderProduct = (product: Product) => {
    return (
      <TouchableOpacity
        key={product.id}
        style={styles.productContainer}
        onPress={() => onProductPress(product)}
      >
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text
        style={{
          fontFamily: 'Ruluko',
          alignSelf: 'center',
          fontSize: 20,
          marginVertical: 25,
        }}
      >
        Find Latest Products
      </Text>
      <View style={styles.container}>{products.map(renderProduct)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  productContainer: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  productImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginHorizontal: 8,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888888',
    marginVertical: 8,
    marginHorizontal: 8,
  },
});

export default ProductShowcase;
