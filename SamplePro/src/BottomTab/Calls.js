import React, { Component } from "react"
import { View, Text, StyleSheet } from 'react-native'

export default class Calls extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hometxt}>Hi to calls page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    hometxt: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})
