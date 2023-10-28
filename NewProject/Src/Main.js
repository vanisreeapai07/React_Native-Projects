import React, { Component } from "react";
import {
    View, StyleSheet, Text, TouchableHighlight
} from 'react-native'

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>WELCOME </Text>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>Click here</Text>
                </TouchableHighlight>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4287f5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        color: 'black'
    },
    button: {
        height: 55,
        width: 250,
        borderWidth: 4,
        borderColor: 'black',
        backgroundColor: 'green',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    buttonText: {
        fontSize: 14,
        color: 'white'


    }
})