
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../app/ChatScreen";
import ProfileScreen from "../app/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={ChatScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
