import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Title>Home Screen</Title>
      <Title>All chat rooms will be listed here</Title>
      <Title>{user.uid}</Title>
      <FormButton
        modeValue='contained'
        title='Logout'
        onPress={() => logout()}
      />
      <FormButton
        modeValue='contained'
        title='Add Room'
        onPress={() => navigation.navigate('AddRoom')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
