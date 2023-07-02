// @ts-recheck
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';

import { GradientText, Pressable, Text, View } from '@/ui';

const categories = [
  {
    id: 1,
    name: 'Architectural',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.S95Jdtj7K22S6T5HW_7-GwHaEc%26pid%3DApi&f=1&ipt=f2af18f5bcdc928b3c67adfe6d4eeeeb7ad83e8680ef4cef3653b694ce9f15e2&ipo=images',
    },
  },
  {
    id: 2,
    name: 'Furniture',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HzWOSOnei4wGekWzU4twUwHaHa%26pid%3DApi&f=1&ipt=532b8936865d1e4c9338ea385dd560c9bcfa69a65695f31f0fbf3840c0682895&ipo=images',
    },
  },
  {
    id: 3,
    name: 'Kitchen',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.hBpS2UvsFZV52NDXNEFyHQHaG6%26pid%3DApi&f=1&ipt=d9a2af378e485afa2defc0606a3d0f0dd5f4bec290a48cbf5e8de19eaf9c362b&ipo=images',
    },
  },
  {
    id: 4,
    name: 'Bathroom',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IA4Y5tNXNZZ2pezwM0pg6QHaJ4%26pid%3DApi&f=1&ipt=48d0eae3bb40994a97ff8215e98f78dc0145639355fe3305469517af0ee34756&ipo=images',
    },
  },
  {
    id: 5,
    name: 'Security',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.c3g1SdjHpvPVMBOPVG18DgHaIA%26pid%3DApi&f=1&ipt=0ea246a5f41ace14df26ab7858bc2091cc6acd1be893d166982bf5a41dfe31ef&ipo=images',
    },
  },
  {
    id: 6,
    name: 'Stair & Railing',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP._EyRDuA8_gN4mhSCReh5DgHaFj%26pid%3DApi&f=1&ipt=38d2535a0c98109c53712add20ad1552f6234dbdb97cd20f4dfecd3b047dbeab&ipo=images',
    },
  },
  {
    id: 7,
    name: 'Home & Office',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.e3V85yKRSm4sPBnTDUzJBgHaFX%26pid%3DApi&f=1&ipt=f0720e97f542b533ab247d0522f1ab6039fbbd14e80851de378c8f5be178f8d2&ipo=images',
    },
  },
  {
    id: 8,
    name: 'Interior',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2mnUcnxzC5VhCZlelVIfJgAAAA%26pid%3DApi&f=1&ipt=fddfc9b61fdd198854998cf0e6396f5f2f06e84a74e33be54259320ffa490cbb&ipo=images',
    },
  },
  {
    id: 9,
    name: 'Screw & Nails',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5JFTBRs9jb6Sxgd61MddXwHaF7%26pid%3DApi&f=1&ipt=6693dcc4f50507d5ab07b4764b581d10fe7211849b0d28afc0fcd2f32f987721&ipo=images',
    },
  },
  // Add more categories as needed
];

export const CategorySwiper = () => {
  const { getParent } = useNavigation();
  return (
    <View style={styles.container}>
      {/* <View style={styles.horizontalLine} /> */}
      <View className="m-2">
        <GradientText t="Categories" />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <Pressable
            key={category.id}
            style={styles.categoryItem}
            onPress={() => {
              getParent()
                ?.getParent()
                ?.navigate('FeedNavigator', { screen: 'ProductShowcase' });
              console.log(getParent()?.getParent()?.getId());
            }}
          >
            <View style={styles.imageContainer}>
              <Image
                source={category.image}
                style={styles.categoryImage}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
      {/* <View style={styles.horizontalLine} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'black',
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  imageContainer: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: '#f25600',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  categoryName: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
