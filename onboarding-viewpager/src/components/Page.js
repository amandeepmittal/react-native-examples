import React from 'react';
import { View, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

const Page = ({ backgroundColor, iconName, title }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor
      }}
    >
      <Icon name={iconName} size={172} color="white" />
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Page;
