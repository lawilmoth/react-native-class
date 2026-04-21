import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { router } from "expo-router";
import MessageBubble from '../components/Message';

const sampleMessages = [
  { id: '1', message: 'Hello!', isCurrentUser: false },
  { id: '2', message: 'Hey, are you there?', isCurrentUser: false },
  { id: '3', message: 'I am here now. Sorry for the delay!', isCurrentUser: true },
  { id: '4', message: 'Perfect, the messages are coming through.', isCurrentUser: false },
];

export default function ChatScreen() {
  return (
    
      <View style={styles.container}>
        <Text style={styles.heading}>Chat Preview</Text>
        {sampleMessages.map((message) => (
          <MessageBubble
            key={message.id}
            isCurrentUser={message.isCurrentUser}
            message={message.message}
          />
        ))}
        <Button title="Go to Chat" onPress={() => router.push("./ProfileScreen")} />
      </View>
    
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    color: '#102542',
    marginBottom: 12,
  },
});
