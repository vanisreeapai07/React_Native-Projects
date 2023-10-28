import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "./Tab/Home";
import Movies from "./Tab/Movies";
import Music from "./Tab/Music";
import Games from "./Tab/Games";
import Books from "./Tab/Books";

const Tab = createMaterialTopTabNavigator()

function TabContent() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarItemStyle: { width: 100, },
                tabBarStyle: { backgroundColor: '#08a85b' },
                tabBarIndicatorStyle: { backfaceVisibility: 'red' },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#d6d9d4',
                tabBarIndicatorStyle: {
                    backgroundColor: 'white'
                },
                tabBarScrollEnabled: true
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
            />
            <Tab.Screen
                name='Movies'
                component={Movies}
            />
            <Tab.Screen
                name='Music'
                component={Music}
            />
            <Tab.Screen
                name='Games'
                component={Games}
            />
            <Tab.Screen
                name='Books'
                component={Books}
            />
        </Tab.Navigator>
    )
}

export default TabContent;
