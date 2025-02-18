import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Welcome!</Text>
      <Pressable
        onPress={() => router.push("/home")}
        style={{
          backgroundColor: "#007bff",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Go to Home</Text>
      </Pressable>
    </View>
  );
}
