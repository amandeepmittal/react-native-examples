import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ItemComponent({items}) {
  return (
    <View style={styles.itemsList}>
      {items.map((item, index) => {
        return (
          <View key={index}>
            <Text style={styles.itemtext}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
