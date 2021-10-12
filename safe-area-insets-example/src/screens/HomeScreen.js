import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from '../components';

export const HomeScreen = () => {
  return (
    <Box isSafe style={[styles.container]}>
      <Box style={{ backgroundColor: 'blue', flex: 1 }}>
        <Text style={{ fontSize: 28, color: 'white' }}>Hello World</Text>
      </Box>
    </Box>
  );
  // return (
  //   <SafeAreaView style={[styles.container]}>
  //     <View style={{ backgroundColor: 'blue', flex: 1 }}>
  //       <Text style={{ fontSize: 28, color: 'white' }}>Hello World</Text>
  //     </View>
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});
