/* eslint-disable react-native/no-inline-styles */
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const messages = [
  {
    id: '1',
    sender: {
      id: 'user1',
      name: 'John Doe',
      avatar: 'https://picsum.photos/seed/picsum/200/300',
    },
    content: 'Hello',
    timestamp: '9:30 AM',
    isRead: true,
  },
  {
    id: '2',
    sender: {
      id: 'user2',
      name: 'Jane Smith',
      avatar: 'https://example.com/avatar2.jpg',
    },
    content: 'How are you?',
    timestamp: '11:45 AM',
    isRead: false,
  },
  {
    id: '3',
    sender: {
      id: 'user2',
      name: 'Jane Smith',
      avatar: 'https://example.com/avatar2.jpg',
    },
    content: 'i am fine  you',
    timestamp: '11:45 AM',
    isRead: false,
  },
  // Add more message data here
];

export const Chat = () => {
  const [inputText, setInputText] = useState('');
  const [chatMessages, setChatMessages] = useState(messages);

  const handleInputChange = (text: React.SetStateAction<string>) => {
    setInputText(text);
  };

  const handleSendMessage = () => {
    const newMessage = {
      id: `${chatMessages.length + 1}`,
      sender: {
        id: 'user1',
        name: 'John Doe',
        avatar: 'https://example.com/avatar1.jpg',
      },
      content: inputText,
      timestamp: new Date().toLocaleTimeString(),
      isRead: false,
    };

    setChatMessages((prevMessages) => [newMessage, ...prevMessages]);
    setInputText('');
  };

  const handleFileSelection = async () => {
    // const result = await DocumentPicker.getDocumentAsync();
    // if (!result.cancelled) {
    //   // Handle the selected file
    //   console.log(result.uri);
    // }
  };

  const renderMessageBubble = ({ item }: { item: any }) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: item.sender.id === 'user1' ? 'flex-end' : 'flex-start',
        marginBottom: 8,
      }}
    >
      <View
        style={{
          backgroundColor: item.sender.id === 'user1' ? '#2979FF' : '#E0E0E0',
          borderRadius: 16,
          paddingVertical: 8,
          paddingHorizontal: 12,
        }}
      >
        <Text
          style={{ color: item.sender.id === 'user1' ? '#FFFFFF' : '#000000' }}
        >
          {item.content}
        </Text>
        <Text style={{ fontSize: 12, color: '#9E9E9E', marginTop: 4 }}>
          {item.timestamp}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={chatMessages}
        renderItem={renderMessageBubble}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        inverted
      />
      <View
        style={{ borderTopWidth: 1, borderTopColor: '#E0E0E0', padding: 16 }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={{
              flex: 1,
              backgroundColor: '#F5F5F5',
              borderRadius: 24,
              paddingVertical: 8,
              paddingHorizontal: 16,
              marginRight: 8,
            }}
            placeholder="Type a message"
            value={inputText}
            onChangeText={handleInputChange}
          />
          <TouchableOpacity onPress={handleSendMessage}>
            <MaterialIcons name="send" size={24} color="#2979FF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFileSelection}>
            <MaterialIcons
              name="attach-file"
              size={24}
              color="#2979FF"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
