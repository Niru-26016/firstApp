import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <>
      <Tabs>
        <FontAwesome name="home" size={24} color="black" />
        <Tabs.Screen name="index" options={{ title: "home", tabBarIcon: ()=>(
          <FontAwesome name="home" size={24} color="black" />
        ), }} />
        <Tabs.Screen name="login" options={{ title: "Login" }} />
      </Tabs>
    </>
  );
}
