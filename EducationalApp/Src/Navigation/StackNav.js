import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Register from '../Register';
import Otp from '../Otp';
import MainScreen from '../MainScreen';
import Details from '../Details';
import BottomNav from '../BottomNav';
import MyDrawer from './Drawer';
import Home from '../BottomTab/Home';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Otp'
        component={Otp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Details'
        component={Details}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='BottomNav'
        component={BottomNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='MainScreen'
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='MyDrawer'
        component={MyDrawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default StackNav;
