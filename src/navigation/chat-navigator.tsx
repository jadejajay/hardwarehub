import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { ChatList, ChatPage } from '@/screens';

export type ChatStackParamList = {
  ChatList: undefined;
  ChatPage: undefined;
};

const Stack = createNativeStackNavigator<ChatStackParamList>();

// const GoToAddPost = () => {
//   const { navigate } = useNavigation();
//   return (
//     <Pressable onPress={() => navigate('AddPost')} className="p-2">
//       <Text className="text-primary-300">Create</Text>
//     </Pressable>
//   );
// };

export const ChatNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerRight: () => <GoToAddPost />,
        }
      }
      id="chat"
      initialRouteName="ChatList"
    >
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="ChatPage" component={ChatPage} />
    </Stack.Navigator>
  );
};
