
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Chat" onPress={() => router.push("./ChatScreen")} />
    </View>
  );
}
