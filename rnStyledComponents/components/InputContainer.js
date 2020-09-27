import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: 60px;
  font-size: 18px;
  flex: 1;
  color: #010101;
  margin-left: 10px;
`;

const InputContainer = () => {
  return (
    <Container>
      <TextInput placeholder="What's on your mind?" />
    </Container>
  );
};

export default InputContainer;
