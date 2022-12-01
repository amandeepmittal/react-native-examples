import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabOne from "../screens/TabOne";
import TabTwo from "../screens/TabTwo";

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="TabOne" component={TabOne} />
        <Tab.Screen name="TabTwo" component={TabTwo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
