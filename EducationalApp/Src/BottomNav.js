import React from 'react';

import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Home from './BottomTab/Home';
import Contact from './BottomTab/Contact';
import Exams from './BottomTab/Exams';
import Profile from './BottomTab/Profile';
import Recent from './BottomTab/Recent';

const Bottom = createBottomTabNavigator()

function BottomNav() {
    return (
        <Bottom.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 18, marginBottom: 10 },
                tabBarStyle: {
                    width: 380,
                    height: 76,
                    position: 'absolute',
                    bottom: 20,
                    borderRadius: 10,
                    marginHorizontal: 20
                }
            }}
        >
            <Bottom.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarActiveTintColor: '#00C458',
                    tabBarInactiveTintColor: 'grey',
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon name='home' size={24} color='#00C458' /> :
                            <Icon name='home' size={24} color="grey" />,
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        focused ? null : <Text>Home</Text>
                    )
                }}
            />
            <Bottom.Screen
                name='Recent'
                component={Recent}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#00C458',
                    tabBarInactiveTintColor: 'grey',
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon name="arrow-right" size={50} color='#00C458' /> :
                            <Icon name="arrow-right" size={50} color='grey' />
                }}
            />
            <Bottom.Screen
                name='Exams'
                component={Exams}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#00C458',
                    tabBarInactiveTintColor: 'grey',
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon name='assignment' size={28} color='#00C458' /> :
                            <Icon name='assignment' size={28} color='grey' />
                }}
            />
            <Bottom.Screen
                name='Profile'
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#00C458',
                    tabBarInactiveTintColor: 'grey',
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon name='person' size={30} color='#00C458' /> :
                            <Icon name='person' size={30} color='grey' />
                }}
            />
            <Bottom.Screen
                name='Contact'
                component={Contact}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#00C458',
                    tabBarInactiveTintColor: 'grey',
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon name='mail' size={30} color='#00C458' /> :
                            <Icon name='mail' size={30} color='grey' />
                }}
            />
        </Bottom.Navigator>
    )
}

export default BottomNav;