import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Music extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contents}>
                    <Text style={styles.text}>This is music</Text>
                </View>

            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
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