// import React, { Component } from "react"
// import {
//   View,
//   StyleSheet,
//   ImageBackground,
//   Image,
//   Text,
//   TextInput,
//   TouchableHighlight,
// } from 'react-native'

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <ImageBackground source={require('./assets/img.jpeg')}
//           style={styles.bgimage}>
//           <Image source={require('./assets/logo.png')}
//             style={styles.logo} />
//           <Text style={styles.textView}>Login to Pinterest now </Text>
//           <TextInput style={styles.inputView}
//             placeholder="Username" placeholderTextColor='white'
//             maxLength={10} />
//           <TextInput style={styles.inputView}
//             placeholder="Password" placeholderTextColor='white'
//             secureTextEntry={true} />
//           <TouchableHighlight style={styles.buttonView}>
//             <Text style={styles.buttonText}>Login</Text>

//           </TouchableHighlight>
//         </ImageBackground>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%',
//     backgroundColor: '#000000',
//   },
//   bgimage: {
//     height: '100%',
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     height: 100,
//     width: 100,
//   },
//   textView: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: 12,
//   },
//   inputView: {
//     width: '80%',
//     height: 55,
//     borderWidth: 2,
//     borderColor: 'white',
//     marginTop: 50,
//     paddingLeft: 20,
//     fontSize: 18,

//   },
//   buttonView: {
//     width: '60%',
//     height: 55,
//     backgroundColor: '#ba0909',
//     marginTop: 100,
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: 28,
//     borderWidth: 2,
//     borderColor: 'white',
//     borderRadius: 8,
//   },
//   buttonText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white'
//   }
// })

import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'



import StackNav from "./src/stacknav";
import Flexbox from "./src/Flexbox";
import Home from './src/drawer/Home';
import Profile from './src/drawer/Profile';
import DrawerContent from './src/DrawerContent';
import Settings from './src/Settings';
import AboutUs from './src/AboutUs';
import Cart from './src/Tab/Cart';
import Category from './src/Tab/Category';
import Order from './src/Tab/Order';
import Search from './src/Tab/Search';
import Calls from './src/BottomTab/Calls'
import Chat from './src/BottomTab/Chat'
import Status from './src/BottomTab/Status'
// import Home from './src/functional_Component/Home'
// import About from './src/functional_Component/About'




const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createMaterialTopTabNavigator()
const BottomTab = createBottomTabNavigator()





function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={StackNav}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Flexbox'
        component={Flexbox}
      />

      <Stack.Screen
        name='Drawer'
        component={MyDrawer}
      />
      <Stack.Screen
        name='Tab'
        component={MyTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='BottomTab'
        component={MyBottomTab}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
         name= 'Home'
         component={Home}
      />
       <Stack.Screen
         name= 'About'
         component={About}
      /> */}

    </Stack.Navigator>

  )
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />} >
      <Drawer.Screen
        name='Home'
        component={Home} />
      <Drawer.Screen
        name='Profile'
        component={Profile} />
      <Drawer.Screen
        name='AboutUs'
        component={AboutUs} />
      <Drawer.Screen
        name='Settings'
        component={Settings} />
    </Drawer.Navigator>
  )
}

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: 'white' }

      }}
    >
      <Tab.Screen
        name='Lifecycle'
        component={Cart}
        options={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='shopping-cart' size={24} color='blue' /> :
              <Icon name='shopping-cart' size={24} color='grey' />

        }}
      />

      <Tab.Screen
        name='Category'
        component={Category}
        options={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='category' size={24} color='blue' /> :
              <Icon name='category' size={24} color='grey' />
        }}
      />
      <Tab.Screen
        name='Order'
        component={Order}
        options={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='shopping-bag' size={24} color='blue' /> :
              <Icon name='shopping-bag' size={24} color='grey' />
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='search' size={24} color='blue' /> :
              <Icon name='search' size={24} color='grey' />
        }}
      />
    </Tab.Navigator>
  )
}

function MyBottomTab() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: 'White' }
      }}>
      <BottomTab.Screen
        name='Calls'
        component={Calls}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='call' size={24} color='green' /> :
              <Icon name='call' size={24} color='grey' />
        }}
      />
      <BottomTab.Screen
        name='Chat'
        component={Chat}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='chat' size={24} color='green' /> :
              <Icon name='chat' size={24} color='grey' />
        }}
      />
      <BottomTab.Screen
        name='Status'
        component={Status}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='timelapse' size={24} color='green' /> :
              <Icon name='timelapse' size={24} color='grey' />
        }}
      />
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