import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BooksListApp() {
  return (
    <View style={styles.container}>
      <Text>BooksList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
