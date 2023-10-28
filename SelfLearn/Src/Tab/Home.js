import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";



export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contents}>
                    <Text style={styles.text}>This is register</Text>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginTop: 250
    },
    contents: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})