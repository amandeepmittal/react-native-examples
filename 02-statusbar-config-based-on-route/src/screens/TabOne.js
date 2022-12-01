import { View, Text } from "react-native";

import FocusAwareStatusBar from "../utils";

export default function TabOne() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tab One</Text>
      <FocusAwareStatusBar style="dark" animated={true} />
    </View>
  );
}
