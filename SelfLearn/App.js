import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './Src/Login';
import Custom from './Src/Custom';
import TabContent from './Src/TabFun';
import calls from './Src/BottomTab/calls';
import Home from './Src/BottomTab/Home';
import recent from './Src/BottomTab/recent';



const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='TabContent'
        component={TabContent}
      />
      <Stack.Screen
        name='Custom'
        component={Custom}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  )
}

function MyBottomTab() {
  return (
    <BottomTab.Navigator
      screenOptions={{
      }}
    >
      <BottomTab.Screen />
    </BottomTab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}