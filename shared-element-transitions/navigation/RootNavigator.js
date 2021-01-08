import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress
      }
    };
  }
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='Details'
          component={Details}
          options={() => options}
          sharedElementsConfig={route => {
            const { item } = route.params;

            return [
              {
                id: `item.${item.id}.image_url`,
                animation: 'move',
                resize: 'clip'
              },
              {
                id: `item.${item.id}.title`,
                animation: 'fade',
                resize: 'clip'
              },
              {
                id: `item.${item.id}.description`,
                animation: 'fade',
                resize: 'clip'
              },
              {
                id: `item.${item.id}.iconName`,
                animation: 'move',
                resize: 'clip'
              }
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
