import React, { Component } from "react";
import { View, StyleSheet, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BottomNav from "./BottomNav";


export default class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
           
                    <BottomNav />
                
            </View>
        )
    }
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white'
    },
    scrollView: {
        height: '100%',
        width: '100%'
    },

})