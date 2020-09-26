import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.View`
  width: 100%;
  height: 50px;
  padding-horizontal: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.Text`
  font-size: 28;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: #3a86e9;
`;

const IconButtonsRow = styled.View`
  flex-direction: row;
`;

const IconButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #e6e6e6;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
`;

const Header = ({ headerTitle }) => {
  return (
    <Container>
      <HeaderTitle>{headerTitle}</HeaderTitle>
      <IconButtonsRow>
        <IconButton activeOpacity={0.7} onPress={() => true}>
          <MaterialCommunityIcons name='magnify' size={28} color='#010101' />
        </IconButton>
        <IconButton activeOpacity={0.7} onPress={() => true}>
          <MaterialCommunityIcons
            name='facebook-messenger'
            size={28}
            color='#010101'
          />
        </IconButton>
      </IconButtonsRow>
    </Container>
  );
};

export default Header;
