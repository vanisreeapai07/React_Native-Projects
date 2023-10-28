import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import TabContent from './TabFun';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Custom extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <Icon name='menu' style={styles.iconstyle} size={20}></Icon>
                    <TextInput style={styles.txt}
                        placeholder="GooglePlay"
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                    <Icon name='mic' style={styles.iconstyle} size={22}></Icon>
                </View>
                <TabContent />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#08a85b'
    },
    txt: {
        flexDirection: 'row',

    },
    inputView: {
        width: '94%',
        height: 55,
        borderWidth: 2,
        borderColor: 'grey',
        marginTop: 28,
        paddingLeft: 20,
        borderRadius: 6,
        marginLeft: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    txt: {
        flex: 1,
        fontSize: 18
    },
    iconstyle: {
        marginRight: 10
    },
})