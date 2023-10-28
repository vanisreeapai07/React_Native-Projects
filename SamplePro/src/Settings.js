import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'

export default class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.setText}>Settings</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    setText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})
