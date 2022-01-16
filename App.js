import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  FontAwesome5, Octicons, Foundation } from '@expo/vector-icons';

import GiveDonateScreen from './src/screens/GiveDonateScreen'
import HomeScreen from "./src/screens/HomeScreen";
import HistoryScreen from './src/screens/HistoryScreen';
import ScheduleCounselingScreen from './src/screens/ScheduleCounselingScreen';
import SupportScreen from './src/screens/SupportScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import TwitterFeedScreen from './src/screens/TwitterFeedScreen';
import InstagramFeedScreen from './src/screens/InstagramFeedScreen';
import SendMessageScreen from './src/screens/SendMessageScreen';
import SendMessageScreen_ from './src/screens/DailyBibleVerseScreen';

import { primaryColor, secondaryColor } from './constants/colors';
import useCachedResources from './helpers/useCachedResources';


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
      <Tab.Screen name="Support" component={SupportScreen}  options={{
          tabBarIcon: () => <Foundation name="telephone" size={25} color={primaryColor} />,
        }}  />
      <Tab.Screen name="Settings" component={SettingsScreen}  options={{
          tabBarIcon: () => <Octicons name="settings" size={25}  color={primaryColor} />,
        }} />
      <Tab.Screen 
      name="Schedule Counseling" 
      component={ScheduleCounselingScreen}
      options={{
        tabBarVisible: false, 
        tabBarButton: (props) => null, 
      }} 
      />
      
        <Tab.Screen 
      name="Send Message" 
      component={SendMessageScreen}
      options={{
        tabBarVisible: false, 
        tabBarButton: (props) => null, 
      }} 
      />
       <Tab.Screen 
      name="Verse of the Day" 
      component={SendMessageScreen_}
      options={{
        tabBarVisible: false, 
        tabBarButton: (props) => null, 
      }} 
      />
        <Tab.Screen 
      name="Twitter Feed" 
      component={TwitterFeedScreen}
      options={{
        tabBarVisible: false, 
        tabBarButton: (props) => null, 
      }} 
      />
        <Tab.Screen 
      name="Instagram Feed" 
      component={InstagramFeedScreen}
      options={{
        tabBarVisible: false, 
        tabBarButton: (props) => null, 
      }} 
      />

      <Tab.Screen 
        name="   " //gave three spaces as name, so status bar renders blank white 
        options={{
          tabBarVisible: false, 
          tabBarButton: (props) => null, 
        }}  
        component={HomeScreen} />

    </Tab.Navigator>
    </NavigationContainer>  
    );
  };
};
   