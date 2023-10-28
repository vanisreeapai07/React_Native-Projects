import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hii to Profile</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'blue'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})
