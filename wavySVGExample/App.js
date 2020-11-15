import React from 'react';
import ScreenOne from './src/screens/ScreenOne';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenTwo from './src/screens/ScreenTwo';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'black',
            // activeBackgroundColor: 'white',
            inactiveTintColor: 'gray',
            // inactiveBackgroundColor: 'black',
            labelStyle: {
              fontSize: 20
            }
          }}
        >
          <Tab.Screen name="ScreenOne" component={ScreenOne} />
          <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
