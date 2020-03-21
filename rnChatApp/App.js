import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { View, Text } from "react-native";

const App = () => {
  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>React Chat app</Text>
      </View>
    </PaperProvider>
  );
};

export default App;
