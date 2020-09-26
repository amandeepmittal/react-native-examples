import React from 'react';
import styled from 'styled-components/native';
import Header from './components/Header';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export default function App() {
  return (
    <Container>
      <Header headerTitle='social' />
    </Container>
  );
}
