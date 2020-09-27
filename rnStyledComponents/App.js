import React from 'react';
import styled from 'styled-components/native';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import Avatar from './components/Avatar';

const InputMenuData = [
  {
    id: '1',
    name: 'video-plus',
    color: '#32e0c4',
    text: 'Video'
  },
  {
    id: '2',
    name: 'image',
    color: '#4267b2',
    text: 'Photo/Gif'
  },
  {
    id: '3',
    name: 'record',
    color: '#f44336',
    text: 'Live'
  }
];

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const RowContainer = styled.View`
  width: 100%;
  padding-horizontal: 10px;
  flex-direction: row;
`;

export default function App() {
  return (
    <Container>
      <Header headerTitle='social' />
      <RowContainer>
        <Avatar imageSource={require('./assets/images/avatar1.png')} />
        <InputContainer menu={InputMenuData} />
      </RowContainer>
    </Container>
  );
}
