import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Contacts</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    }
})