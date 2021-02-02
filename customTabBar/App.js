import React from 'react';
import {View, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 22}}>React Native + Crowdbotics = 💜</Text>
      </View>
    </>
  );
};

export default App;
