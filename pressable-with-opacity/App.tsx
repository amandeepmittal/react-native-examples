import { View, Text } from "react-native";

import CustomPressable from "./Pressable";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CustomPressable
        style={{ borderRadius: 4, backgroundColor: "#FF0063", padding: 8 }}
        activeOpacity={0.5}
      >
        <Text style={{ color: "white" }}>Press Me</Text>
      </CustomPressable>
    </View>
  );
}
