import React from 'react';
import styled from 'styled-components/native';
import PressableButton from './components/PressabeButton';

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;

export default function App() {
  return (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
      <PressableButton
        onPress={() => true}
        title='First button'
        bgColor='papayawhip'
      />
      <PressableButton
        onPress={() => true}
        title='First button'
        bgColor='#4267B2'
        primary
      />
    </Container>
  );
}
