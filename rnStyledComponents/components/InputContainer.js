import React from 'react';
import styled from 'styled-components/native';

import InputMenu from './InputMenu';

const Container = styled.View`
  width: 100%;
  height: 90px;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: 60px;
  font-size: 18px;
  flex: 1;
  color: #010101;
  margin-left: 10px;
`;

const Separator = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: #e9e9e9;
`;

const InputContainer = ({ menu }) => {
  return (
    <Container>
      <TextInput placeholder="What's on your mind?" />
      <Separator />
      <InputMenu menuItems={menu} />
    </Container>
  );
};

export default InputContainer;
