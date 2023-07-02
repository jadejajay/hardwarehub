/* eslint-disable react-native/no-inline-styles */
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { Image, SafeAreaView, Text, TouchableOpacity, View } from '@/ui';

type Chat = {
  id: string;
  user: string;
  lastMessage: string;
  avatar: string;
  timestamp: string;
  online: boolean;
  unread: boolean;
};

const chats: Chat[] = [
  {
    id: '1',
    user: 'John Doe',
    lastMessage: 'Hello',
    avatar: 'https://example.com/avatar1.jpg',
    timestamp: '9:30 AM',
    online: true,
    unread: true,
  },
  {
    id: '2',
    user: 'Jane Smith',
    lastMessage: 'How are you?',
    avatar: 'https://example.com/avatar2.jpg',
    timestamp: '11:45 AM',
    online: false,
    unread: false,
  },
  // Add more chat data here
];

export const ChatList: React.FC = () => {
  const { navigate } = useNavigation();
  const [searchText, setSearchText] = React.useState('');
  const [filteredChats, setFilteredChats] = React.useState(chats);
  const [isInputVisible, setIsInputVisible] = React.useState(false);

  const handleChatPress = (chat: Chat) => {
    navigate('ChatPage');
  };
  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = chats.filter((chat) =>
      chat.user.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredChats(filtered);
  };
  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
    setSearchText('');
  };

  const renderChatItem = ({ item }: { item: Chat }) => (
    <TouchableOpacity
      className="flex-row items-center border-b border-gray-200 p-4"
      onPress={() => handleChatPress(item)}
    >
      <View className="shrink-0">
        {/* // eslint-disable-next-line react/jsx-no-undef */}
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 48, height: 48, borderRadius: 24 }}
        />
        {item.online && (
          <View className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
        )}
      </View>
      <View className="ml-4 flex-1">
        <View className="flex-row items-center justify-between">
          <Text
            className={`text-lg font-semibold ${
              item.unread ? 'text-black' : 'text-gray-500'
            }`}
          >
            {item.user}
          </Text>
          <Text className="text-sm text-gray-500">{item.timestamp}</Text>
        </View>
        <Text className="mt-1 text-gray-500">{item.lastMessage}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="gray" />
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg font-semibold text-gray-500">
        No chats available
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-row items-center justify-between border-b border-gray-200 p-4">
        <Text className="text-lg font-semibold">Chats</Text>
        <TouchableOpacity className="p-2" onPress={toggleInputVisibility}>
          {isInputVisible ? (
            <MaterialIcons name="cancel" size={24} color="black" />
          ) : (
            <MaterialIcons name="search" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      {isInputVisible && (
        <View className="border-b border-gray-200 p-2">
          <View className="w-full flex-row items-center rounded-lg bg-white p-4">
            <TextInput
              style={styles.input}
              placeholder="Search"
              value={searchText}
              onChangeText={handleSearch}
            />
          </View>
        </View>
      )}
      <FlashList
        data={filteredChats}
        renderItem={renderChatItem}
        estimatedItemSize={10}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmptyState}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 20,
    width: '100%',
    margin: 12,
    borderBottomWidth: 1,
  },
});
