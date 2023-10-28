import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'
import TabContent from "./Tab/TabContent";



export default class TopTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <Icon name='search' size={20}></Icon>
                    <TextInput style={styles.txt}
                        placeholder="Search for a service"
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <TabContent/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputView: {
        width: '86%',
        height: 55,
        borderWidth: 2,
        borderColor: 'grey',
        marginTop: 28,
        paddingLeft: 20,
        borderRadius: 14,
        marginLeft: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        flex: 1,
    }
})