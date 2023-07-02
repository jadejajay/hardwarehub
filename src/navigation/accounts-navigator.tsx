import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import {
  Analytics,
  EditCompany,
  EditPost,
  EditProduct,
  EditReel,
  Saved,
  Settings,
  UserProfileScreen,
  Wishlist,
} from '@/screens';
import { OrderHistory } from '@/screens/';

export type AccountsStackParamList = {
  UserProfileScreen: undefined;
  Settings: undefined;
  Saved: undefined;
  OrderHistory: undefined;
  Analytics: undefined;
  Wishlist: undefined;
  EditCompany: undefined;
  EditPost: undefined;
  EditProduct: undefined;
  EditReel: undefined;
};

const Stack = createNativeStackNavigator<AccountsStackParamList>();

export const AccountsNavigator = () => {
  return (
    <Stack.Navigator
      id="accounts"
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="UserProfileScreen"
    >
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Saved" component={Saved} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="Analytics" component={Analytics} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="EditCompany" component={EditCompany} />
      <Stack.Screen name="EditPost" component={EditPost} />
      <Stack.Screen name="EditProduct" component={EditProduct} />
      <Stack.Screen name="EditReel" component={EditReel} />
    </Stack.Navigator>
  );
};
