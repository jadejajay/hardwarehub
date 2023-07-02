import * as React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import { GradientText, List, Pressable } from '@/ui';
import { Text, View } from '@/ui';
import { useNavigation } from '@react-navigation/native';

const products = [
  {
    id: 1,
    name: 'LM6004',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6QVuPkB-8ijSrahF2KijjwHaHa%26pid%3DApi&f=1&ipt=d6a1b99fd961ced22f9438bed2563026cf0e1be4b9796fa991e69b690a578c52&ipo=images',
    },
  },
  {
    id: 6,
    name: 'BXI99',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.RQDtp5kiIAEkJXvkmrkatQHaHa%26pid%3DApi&f=1&ipt=9e6c99a9f263ece840681b5bddb1a49a4c72f042b699209e8d3749cd0197b666&ipo=images',
    },
  },
  {
    id: 5,
    name: 'LM45-8',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vzoEBHdxMbxrBsoiLpc6NQHaFS%26pid%3DApi&f=1&ipt=df01970098b5168bfc2cb92e7221d0239b10ba9f5aeb8f2ac69f472a59e6228c&ipo=images',
    },
  },
  {
    id: 3,
    name: '67 GGI',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.RtmJsFkJCyKJDvbJoaV7sgHaHa%26pid%3DApi&f=1&ipt=f94415594fdee126a0d7ba4046242a18e63c49fa23fbafaf76f0e0234b02b1bb&ipo=images',
    },
  },
  {
    id: 4,
    name: 'COI-67',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.lptn3VGsgM5T-6OGOWLMuQHaHa%26pid%3DApi&f=1&ipt=1e9ec6d066fd3ebb4e7a572a6ba894723e934d1b8d577dd34f8fe4d5ce5e8fdd&ipo=images',
    },
  },
  {
    id: 7,
    name: 'GUJ-77',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1KR5IWNlzlmWB9rQJ-HBUAHaEw%26pid%3DApi&f=1&ipt=2ec6d22994b6ffe0f1a0488ff37109313c6db8241f6dede20c07bfb12075d064&ipo=images',
    },
  },
  {
    id: 2,
    name: 'BLXM 900',
    image: {
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1jPzWnHlxbpZ6TOUxKLhNAHaHa%26pid%3DApi&f=1&ipt=372893ec00bfd45093bec0811354063b1d831fd0f6ed37c248b71b6a191a0b95&ipo=images',
    },
  },
  // Add more categories as needed
];

type Props = {
  text: string;
  width: number;
};
export const ProductSwiper = ({ text, width }: Props) => {
  const { getParent } = useNavigation();
  return (
    <View style={styles.newProductsContainer}>
      <View style={styles.headerContainer}>
        <GradientText t={text} w={width} />
        <TouchableWithoutFeedback
          onPress={() => console.log('see all pressed')}
        >
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableWithoutFeedback>
      </View>
      <List
        data={products}
        horizontal
        estimatedItemSize={250}
        renderItem={({ item, index }) => (
          <Pressable
            key={index}
            style={styles.productItem}
            onPress={() =>
              getParent()?.navigate('FeedNavigator', { screen: 'Products' })
            }
          >
            <Image
              source={item.image}
              style={styles.productImage}
              resizeMode="cover"
            />
            <Text style={styles.productName}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newProductsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  newProductsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productItem: {
    marginRight: 16,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 9,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  productName: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
