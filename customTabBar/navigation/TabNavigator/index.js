// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/AntDesign';

// import Home from '../../screens/Home';
// import Browse from '../../screens/Browse';
// import Library from '../../screens/Library';

// const Tab = createBottomTabNavigator();

// const screenOptions = (route, color) => {
//   let iconName;

//   switch (route.name) {
//     case 'Home':
//       iconName = 'home';
//       break;
//     case 'Browse':
//       iconName = 'appstore-o';
//       break;
//     case 'Library':
//       iconName = 'folder1';
//       break;
//     default:
//       break;
//   }

//   return <Icon name={iconName} color={color} size={24} />;
// };

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({color}) => screenOptions(route, color),
//       })}
//       tabBarOptions={{
//         activeTintColor: 'white',
//         inactiveTintColor: '#d9d9d9',
//         style: {
//           borderTopColor: '#66666666',
//           backgroundColor: 'transparent',
//         },
//       }}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Browse" component={Browse} />
//       <Tab.Screen name="Library" component={Library} />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from '../../screens/Home';
import Browse from '../../screens/Browse';
import Library from '../../screens/Library';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
