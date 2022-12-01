import { View, Text } from "react-native";

import FocusAwareStatusBar from "../utils";

export default function TabTwo() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#be79df",
      }}
    >
      <Text style={{ color: "#fff" }}>Tab Two</Text>
      <FocusAwareStatusBar style="light" animated={true} />
    </View>
  );
}
