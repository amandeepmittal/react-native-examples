import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export const TabItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 8,
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    marginHorizontal: 16,
    flex: 1,
  },
});
