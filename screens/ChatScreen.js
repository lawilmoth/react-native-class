import React from 'react';
import { StyleSheet, View } from 'react-native';
import MessageBubble from '../components/Message';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <MessageBubble message="Hello!" />
      <MessageBubble message="Hey man, are you there" />
      <MessageBubble message="Are you getting my messages..." />
      <MessageBubble message="I think my messages aren't going through..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#881d9e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});