import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Profile extends Component {
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
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center'
    }
})