// Tab ICons...

// Menu
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';

// import { Easing } from 'react-native';
import {
  CardDetails,
  Cart,
  Home,
  Purchase,
  Search,
  WebScreen,
} from '@/screens';
import { Stories } from '@/screens/mainscreen/stories';

export type HomeStackParamList = {
  MainScreenView: undefined;
  Home: undefined;
  Search: undefined;
  HomeStack: undefined;
  Cart: undefined;
  Purchase: undefined;
  WebScreen: undefined;
  Stories: undefined;
  GstView: undefined;
  CardDetails: undefined;
};
export type DrawerStackParamList = {
  MainScreenView: undefined;
  AboutUs: undefined;
  OurServices: undefined;
  Contact: undefined;
  GstView: undefined;
  AdPlans: undefined;
  ArView: undefined;
  TermsConditions: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();
const Drawer = createDrawerNavigator<DrawerStackParamList>();

// const LeftDrawerScreen = () => {
//   return (
//     <Drawer.Navigator
//       id="drawer"
//       screenOptions={{
//         headerShown: false,
//       }}
//       initialRouteName="MainScreenView"
//     >
//       <Drawer.Screen name="MainScreenView" component={MainScreenView} />
//       <Drawer.Screen name="AboutUs" component={AboutUs} />
//       <Drawer.Screen name="Contact" component={Contact} />
//       <Drawer.Screen name="GstView" component={GstView} />
//       <Drawer.Screen name="AdPlans" component={AdPlans} />
//       <Drawer.Screen name="ArView" component={ArView} />
//       <Drawer.Screen name="OurServices" component={OurServices} />
//       <Drawer.Screen name="TermsConditions" component={TermsConditions} />
//     </Drawer.Navigator>
//   );
// };

// const timingConfig = {
//   animation: 'timing',
//   config: {
//     duration: 200,
//     easing: Easing.linear,
//   },
// };

// const options = {
//   gestureEnabled: true,
//   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
//   transitionSpec: {
//     open: timingConfig,
//     close: timingConfig,
//   },
// };
export const HomeNavigator = () => {
  return (
    <Stack.Navigator id="home" screenOptions={() => ({})}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="HomeStack" component={LeftDrawerScreen} /> */}
        <Stack.Screen name="HomeStack" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Stories" component={Stories} />
      </Stack.Group>

      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Purchase" component={Purchase} />
      <Stack.Screen name="CardDetails" component={CardDetails} />
      <Stack.Screen name="WebScreen" component={WebScreen} />
    </Stack.Navigator>
  );
};
