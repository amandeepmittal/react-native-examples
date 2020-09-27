import React from 'react';
import styled from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RowContainer = styled.View`
  flex-direction: row;
  background: #ffffff;
  width: 100%;
  padding-horizontal: 10px;
  align-items: center;
`;

const RowMenu = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 40px;
`;

const RowMenuText = styled.Text`
  padding-left: 4px;
  font-weight: 500;
  font-size: 12px;
`;

const InputMenu = ({ menuItems }) => {
  return (
    <RowContainer>
      {menuItems.map(item => (
        <RowMenu key={item.id} onPress={() => true}>
          <MaterialCommunityIcons
            name={item.name}
            size={22}
            color={item.color}
          />
          <RowMenuText>{item.text}</RowMenuText>
        </RowMenu>
      ))}
    </RowContainer>
  );
};

export default InputMenu;
