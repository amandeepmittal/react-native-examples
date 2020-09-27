import React from 'react';
import styled from 'styled-components/native';

const VerticalList = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    // backgroundColor: '#e7e7e7',
    paddingVertical: 20
  }
}))`
  flex: 1;
`;

const ListContainer = styled.View``;

const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;
const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;

const SmallAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const UserName = styled.Text`
  padding-left: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #010101;
`;

const PostDescription = styled.Text`
  font-size: 14px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;
const PostImage = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;

const Card = ({ data }) => {
  return (
    <VerticalList showsVerticalScrollIndicator={false}>
      {data.map(item => (
        <ListContainer key={item.id}>
          <Header>
            <Row>
              <SmallAvatar source={item.userAvatar} />
              <UserName>{item.userName}</UserName>
            </Row>
          </Header>
          <PostDescription>{item.postText}</PostDescription>
          <PostImage source={item.postImage} />
        </ListContainer>
      ))}
    </VerticalList>
  );
};

export default Card;
