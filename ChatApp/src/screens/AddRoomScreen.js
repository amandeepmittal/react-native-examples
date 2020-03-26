import React from 'react';
import { View, Text } from 'react-native';
import FormButton from '../components/FormButton';

export default function AddRoomScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Create a new chat room</Text>
      <FormButton
        mode='contained'
        title='Close Modal'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
