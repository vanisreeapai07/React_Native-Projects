import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'

export default class AboutUs extends Component {
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
        backgroundColor: 'yellow'
    },
    text: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white'
    }
})
