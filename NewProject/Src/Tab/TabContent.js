import React from "react";


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chapter from "./Chapter";
import QnBank from "./QnBank";
import Resources from "./Resources";
import Videos from "./Videos";




const Tab = createMaterialTopTabNavigator()

function TabContent() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarItemStyle: { width: 100, },
                tabBarStyle: { backgroundColor: 'white' },
                tabBarIndicatorStyle: { backfaceVisibility: 'red' },
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'black',
               tabBarIndicatorStyle: {backgroundColor: 'red'
            },
            }}
        >
            <Tab.Screen
                name='Chapter'
                component={Chapter}
            />
            <Tab.Screen
                name='QnBank'
                component={QnBank}
            />
            <Tab.Screen
                name='Resources'
                component={Resources}
            />
            <Tab.Screen
                name='Videos'
                component={Videos}
            />
        </Tab.Navigator>
    )
}

export default TabContent;

