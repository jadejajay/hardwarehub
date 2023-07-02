import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useColorScheme } from 'nativewind';
import type { ComponentType } from 'react';
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';

// import { Settings, Style } from '@/screens'; // Importing the 'Settings' and 'Style' components from '@/screens'
import {
  Accounts as AccountsIcon,
  Chat as ChatIcon,
  colors,
  Feed as FeedIcon,
  Home as HomeIcon,
  Saved as SavedIcon,
} from '@/ui'; // Importing colors, 'Feed' icon, 'Settings' icon, and 'Style' icon from '@/ui'

import { AccountsNavigator } from './accounts-navigator'; // Importing the 'FeedNavigator' component from the local './feed-navigator' file
import { ChatNavigator } from './chat-navigator'; // Importing the 'FeedNavigator' component from the local './feed-navigator' file
import { FeedNavigator } from './feed-navigator'; // Importing the 'FeedNavigator' component from the local './feed-navigator' file
import { HomeNavigator } from './home-navigator'; // Importing the 'FeedNavigator' component from the local './feed-navigator' file
import { SocialNavigator } from './social-navigator'; // Importing the 'FeedNavigator' component from the local './feed-navigator' file

type TabParamList = {
  HomeNavigator: undefined;
  ChatNavigator: undefined;
  FeedNavigator: undefined;
  SocialNavigator: undefined;
  AccountsNavigator: undefined;
};

type TabType = {
  name: keyof TabParamList;
  component: ComponentType<any>;
  label: string;
};

type TabIconsType = {
  [key in keyof TabParamList]: (props: SvgProps) => JSX.Element;
};

const Tab = createBottomTabNavigator<TabParamList>(); // Creating a bottom tab navigator using 'createBottomTabNavigator' from '@react-navigation/bottom-tabs'

const tabsIcons: TabIconsType = {
  HomeNavigator: (props: SvgProps) => <HomeIcon {...props} />, // Icon for the 'Style' tab
  ChatNavigator: (props: SvgProps) => <ChatIcon {...props} />, // Icon for the 'Style' tab
  FeedNavigator: (props: SvgProps) => <FeedIcon {...props} />, // Icon for the 'FeedNavigator' tab
  SocialNavigator: (props: SvgProps) => <SavedIcon {...props} />, // Icon for the 'Settings' tab
  AccountsNavigator: (props: SvgProps) => <AccountsIcon {...props} />, // Icon for the 'Settings' tab
};

export type TabList<T extends keyof TabParamList> = {
  navigation: NativeStackNavigationProp<TabParamList, T>;
  route: RouteProp<TabParamList, T>;
};

const tabs: TabType[] = [
  {
    name: 'HomeNavigator',
    component: HomeNavigator,
    label: 'Style',
  },
  {
    name: 'FeedNavigator',
    component: FeedNavigator,
    label: 'Feed',
  },
  {
    name: 'SocialNavigator',
    component: SocialNavigator,
    label: 'Social',
  },
  {
    name: 'ChatNavigator',
    component: ChatNavigator,
    label: 'Chat',
  },
  {
    name: 'AccountsNavigator',
    component: AccountsNavigator,
    label: 'Accounts',
  },
];

type BarIconType = {
  name: keyof TabParamList;
  color: string;
};

// Modify the BarIcon component to handle unknown tab names gracefully
const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name] || null; // Set Icon to null if tab name is unknown
  if (!Icon) {
    // Handle unknown tab name gracefully
    console.warn(`Unknown tab name: ${name}`);
    return null;
  }
  return <Icon color={color} {...reset} />;
};

export const TabNavigator = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Tab.Navigator
      id="tab"
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor:
          colorScheme === 'dark' ? colors.white : colors.black,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />, // Sets the tab bar icon based on the route name
        tabBarShowLabel: false,
      })}
    >
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        {tabs.map(({ name, component }) => {
          return <Tab.Screen key={name} name={name} component={component} />;
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};
