import { StyleSheet, Text, View } from "react-native";

import Pressable from "./Pressable";

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} activeOpacity={0.5}>
        <Text style={styles.text}>Press me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
  button: {
    borderRadius: 4,
    backgroundColor: "#FF0063",
    padding: 8,
  },
});
