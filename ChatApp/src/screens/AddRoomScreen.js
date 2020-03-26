import React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function AddRoomScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'absolute', top: 30, right: 0, zIndex: 1 }}>
        <IconButton
          icon='close-circle'
          size={36}
          color='#6646ee'
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Create a new chat room</Text>
      </View>
    </View>
  );
}
