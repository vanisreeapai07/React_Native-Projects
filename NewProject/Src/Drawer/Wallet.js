import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'

export default class Wallet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hii to homee</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'green'
    },
    text: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white'
    }
})
