import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Settings from '../Drawer/Settings';
import Subject from '../Drawer/Subject';
import DrawerContent from '../DrawerContent';
import BottomNav from '../BottomNav';


const Drawer = createDrawerNavigator()

function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name='BottomNav'
                component={BottomNav}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name='Settings'
                component={Settings}

            />
            <Drawer.Screen
                name='Subject'
                component={Subject}

            />
        </Drawer.Navigator>
    )
}


export default MyDrawer;