import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import Home from '../screens/Home';


import {NativeModules} from 'react-native';

const HomeStack = createStackNavigator();

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator 
    initialRouteName="SignInPage" 
   screenOptions={{
    cardStyleInterpolator : CardStyleInterpolators.forNoAnimation,
    headerStyle: {
            height:64
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
   }}
    >
      <HomeStack.Screen
        name="HomePage"
        component={Home}
        options={{
          headerShown: false,
          title: 'Home',
          
         
        }}
      />
    
      <HomeStack.Screen
        name="SignInPage"
        component={SignIn}
        options={{
          headerShown: false,
          title: 'LOGIN',
        
        }}
      />
      
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigation;
