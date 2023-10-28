import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'

export default class DrawerContent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Settings')}>Settings</Text>
                <Text style={styles.menu}>Subject</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    menu: {
        fontSize: 20,
        marginTop: 10, marginLeft: 10,
        color: 'white',
        fontWeight: 'bold'
    }
})