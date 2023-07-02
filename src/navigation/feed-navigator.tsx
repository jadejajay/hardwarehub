import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import {
  AddPost,
  ArView,
  CompanyProfile,
  Feed,
  PdfView,
  Post,
  ProductList,
  ProductShowcase,
} from '@/screens';
import { Products } from '@/screens/products/post';
import { ProductHome } from '@/screens/products/product-home';

export type FeedStackParamList = {
  Feed: undefined;
  PdfView: undefined;
  Post: { id: number };
  AddPost: undefined;
  ArView: undefined;
  Demo: undefined;
  PHome: undefined;
  Products: undefined;
  ProductShowcase: undefined;
  Details: undefined;
  CompanyProfile: undefined;
};

const Stack = createNativeStackNavigator<FeedStackParamList>();

export const FeedNavigator = () => {
  return (
    <Stack.Navigator
      id="feed"
      screenOptions={{ headerShown: false }}
      initialRouteName="Feed"
    >
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Group>

      <Stack.Screen name="AddPost" component={AddPost} />
      <Stack.Screen name="Demo" component={Products} />
      <Stack.Screen name="PHome" component={ProductHome} />
      <Stack.Screen name="Products" component={ProductList} />
      <Stack.Screen name="ProductShowcase" component={ProductShowcase} />
      <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
      <Stack.Screen name="ArView" component={ArView} />
      <Stack.Screen name="PdfView" component={PdfView} />
    </Stack.Navigator>
  );
};
