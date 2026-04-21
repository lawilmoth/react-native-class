import React from "react";
import { View, Text, StyleSheet } from "react-native";

type MessageBubbleProps = {
  isCurrentUser: boolean;
  message: string;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({
  isCurrentUser,
  message,
}) => {
  return (
    <View
      style={[
        styles.container,
        isCurrentUser ? styles.currentUser : styles.otherUser,
      ]}
    >
      <Text
        style={[
          styles.text,
          isCurrentUser ? styles.currentUserText : styles.otherUserText,
        ]}
      >
        {message}
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    maxWidth: "75%",
    padding: 10,
    borderRadius: 16,
    marginVertical: 4,
  },
  currentUser: {
    alignSelf: "flex-end",
    backgroundColor: "#007AFF", // iOS blue
    borderTopRightRadius: 4,
  },
  otherUser: {
    alignSelf: "flex-start",
    backgroundColor: "#E5E5EA", // iOS gray
    borderTopLeftRadius: 4,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  currentUserText: {
    color: "#FFFFFF",
  },
  otherUserText: {
    color: "#000000",
  },
});


export default MessageBubble;