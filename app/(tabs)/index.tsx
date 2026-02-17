import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>HELLO WORLD this is react native</Text>
      <Link href="/login">login?</Link>
    </View>
  );
}
