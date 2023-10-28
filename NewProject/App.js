// import React, { Component } from "react";
// import {
//     View, StyleSheet, Text, TouchableHighlight
// } from 'react-native'

// export default class New extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.text}>WELCOME </Text>
//                 <TouchableHighlight style={styles.button}
//                   onPress={()=> this.navigation.navigate('Drawer')}>
//                     <Text style={styles.buttonText}>Click here</Text>
//                 </TouchableHighlight>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'rose',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     text: {
//         fontSize: 18,
//         color: 'black'
//     },
//     button: {
//         height: 55,
//         width: 250,
//         borderWidth: 4,
//         borderColor: 'black',
//         backgroundColor: 'green',
//         borderRadius: 8,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 40
//     },
//     buttonText: {
//         fontSize: 14,
//         color: 'white'


//     }
// })

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Login from './Src/Login'
import Main from '././Src/Main'
import Home from './Src/Drawer/Home'
import Profile from './Src/Drawer/Profile'
import Wallet from './Src/Drawer/Wallet'
import Records from './Src/Drawer/Records'
import Refund from './Src/Drawer/Refund'
import Settings from './Src/Drawer/Settings'
import AboutUs from './Src/Drawer/AboutUs'
import Help from './Src/Drawer/Help'
import DrawerContent from './Src/DrawerContent'
import TopTab from './Src/TopTab'
import TabContent from './Src/Tab/TabContent'


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
// const Tab = createMaterialTopTabNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Main'
                component={Main}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Drawer'
                component={MyDrawer}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='TabContent'
                component={TabContent}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name= 'TopTab'
                component={TopTab}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name='Home'
                component={Home}

            />
            <Drawer.Screen
                name='Profile'
                component={Profile}
            />
            <Drawer.Screen
                name='Wallet'
                component={Wallet}
            />
            <Drawer.Screen
                name='Records'
                component={Records}
            />
            <Drawer.Screen
                name='Refund'
                component={Refund}
            />
            <Drawer.Screen
                name='Settings'
                component={Settings}
            />
            <Drawer.Screen
                name='AboutUs'
                component={AboutUs}
            />
            <Drawer.Screen
                name='Help'
                component={Help}
            />
        </Drawer.Navigator>
    )
}

// function MyTab() {
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 tabBarLabelStyle: { fontSize: 12 },
//                 tabBarItemStyle: { width: 100 , margin: 5},
//                 tabBarStyle: { backgroundColor: 'white' },
//                 tabBarIndicatorStyle:{backfaceVisibility: 'red'}
//             }}
//         >
//             <Tab.Screen
//                 name='Chapter'
//                 component={Chapter}
//                 options={{
//                     tabBarActiveTintColor: 'red',

                    
//                     tabBarInactiveTintColor: 'grey'
//                 }}
//             />
//             <Tab.Screen
//                 name='QnBank'
//                 component={QnBank}
//                 options={{
//                     tabBarActiveTintColor: 'red',
//                     tabBarInactiveTintColor: 'grey'
//                 }}
//             />
//             <Tab.Screen
//                 name='Resources'
//                 component={Resources}
//                 options={{
//                     tabBarActiveTintColor: 'red',
//                     tabBarInactiveTintColor: 'grey'
//                 }}
//             />
//             <Tab.Screen
//                 name='Videos'
//                 component={Videos}
//                 options={{
//                     tabBarActiveTintColor: 'red',
//                     tabBarInactiveTintColor: 'grey'
//                 }}
//             />
//         </Tab.Navigator>
//     )
// } 

export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )

}

