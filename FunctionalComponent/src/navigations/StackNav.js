import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../login";
import Home from "../pages/Home";
import details from "../details";

const Stack =  createStackNavigator();

function ScreenNav(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = 'Home'
                component={Home}
            />
            <Stack.Screen
                name = 'Login'
                component={Login}
            />
            <Stack.Screen
                name = 'details'
                component={details}
            />
        </Stack.Navigator>
    )
}

export default ScreenNav;