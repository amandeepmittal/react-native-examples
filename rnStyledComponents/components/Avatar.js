import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 64px;
  height: 64px;
`;

const Image = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

const OnlineIndicator = styled.View`
  background-color: green;
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  top: 0;
  right: 0;
  border: 2px solid white;
`;

const Avatar = ({ imageSource }) => {
  return (
    <Container>
      <Image source={imageSource} />
      <OnlineIndicator />
    </Container>
  );
};

export default Avatar;
