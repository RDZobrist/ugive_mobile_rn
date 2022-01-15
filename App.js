import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  FontAwesome5, Octicons, Foundation } from '@expo/vector-icons';

import GiveDonateScreen from './src/screens/GiveDonateScreen'
import HomeScreen from "./src/screens/HomeScreen";

import * as React from 'react';
import HistoryScreen from './src/screens/HistoryScreen';
import ScheduleCounselingScreen from './src/screens/ScheduleCounselingScreen';
import SupportScreen from './src/screens/SupportScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { primaryColor, secondaryColor } from './constants/colors';
import useCachedResources from './helpers/useCachedResources';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default App = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='   '  // three spaces as route name to match route name for home screen 
        screenOptions={{
        tabBarActiveTintColor: secondaryColor
      }}
     >
      <Tab.Screen name="Give/Donate" component={GiveDonateScreen} options={{
          tabBarIcon: () => <FontAwesome5 name="donate" size={25}  color={primaryColor} />,
        }}   />
      <Tab.Screen name="History"  component={HistoryScreen}  options={{
          tabBarIcon: () => <FontAwesome5 name="history" size={25}  color={primaryColor} />,
        }} />
      {/* <Tab.Screen name="Schedule Counseling" component={ScheduleCounselingScreen}/> */}
      <Tab.Screen name="Support" component={SupportScreen}  options={{
          tabBarIcon: () => <Foundation name="telephone" size={25} color={primaryColor} />,
        }}  />
      <Tab.Screen name="Settings" component={SettingsScreen}  options={{
          tabBarIcon: () => <Octicons name="settings" size={25}  color={primaryColor} />,
        }} />
      <Tab.Screen name="   " //gave three spaces as name, so status bar renders blank white 
       options={{
      tabBarVisible: false, //like this
      tabBarButton: (props) => null, //this is additional if you want to hide the tab element from the bottom nav
    }} component={HomeScreen} />

    </Tab.Navigator>
    </NavigationContainer>  
    );
  };
};
   