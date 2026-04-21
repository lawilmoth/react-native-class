import { StyleSheet, Text, View } from 'react-native';

export default function MessageBubble({ message, isCurrentUser = false }) {
  return (
    <View
      style={[
        styles.bubble,
        isCurrentUser ? styles.currentUserBubble : styles.otherUserBubble,
      ]}
    >
      <Text style={[styles.text, isCurrentUser && styles.currentUserText]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    marginVertical: 4,
    maxWidth: '78%',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#102542',
  },
  currentUserBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#2f80ed',
  },
  currentUserText: {
    color: '#ffffff',
  },
  otherUserBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#e5edf8',
  },
});
