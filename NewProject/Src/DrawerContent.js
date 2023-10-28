import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from 'react-native'
import { TouchableHighlight } from "react-native-gesture-handler";


export default class DrawerContent extends Component {
    render() {
        return (
            <View style={styles.conatiner}>
                <View style={styles.header}>
                    <View style={styles.row1}>
                        <View style={styles.iconStyle}>
                            <Image source={require('../assets/crown.png')}
                                style={styles.imgStyle}
                            ></Image>
                        </View>
                        <View>
                            <Text style={styles.text}>Favaz</Text>
                            <TouchableHighlight style={styles.button1}>
                                <Text style={styles.button1text}>Gold</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.row2}>
                        <TouchableHighlight style={styles.button2}>
                            <Text style={styles.button2text}>Invite</Text>
                        </TouchableHighlight>
                        <View>
                            <Text style={styles.text2}>Total Coin</Text>
                            <Text style={styles.text2}>coin:20000</Text>
                        </View>

                    </View>
                </View>
                <Text style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Home')}
                >Home</Text>
                <View style={styles.line}></View>
                <Text style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Profile')}
                >Profile</Text>
                <View style={styles.line}></View>
                <Text style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Wallet')}
                >Wallet Balance</Text>
                <View style={styles.line}></View>
                <Text style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Records')}
                >Records</Text>
                <View style={styles.line}></View>
                <Text style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Refund')}
                >Refund and policies</Text>
                <View style={styles.line}></View>
                <Text style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Settings')}
                >Settings</Text>
                <View style={styles.line}></View>
                <Text style={styles.menu}
                    onPress={() => this.props.navigation.navigate('AboutUs')}
                >About Us</Text>
                <View style={styles.line}></View>
                <Text style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Help')}
                >Help</Text>
                <TouchableHighlight style={styles.buttonLogout}>
                    <Text style={styles.logout}>LogOut</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: 'white'

    },
    menu: {
        fontSize: 18,
        marginLeft: 40,
        marginTop: 20,
        color: 'black',

    },
    header: {
        height: '26%',
        backgroundColor: '#12171a',
    },
    row1: {
        flexDirection: 'row',
        height: 100,
        marginTop: 28
    },
    iconStyle: {
        height: 100,
        width: 100,

    },
    imgStyle: {
        height: '100%',
        width: '100%',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 110,
    },
    button1: {
        height: 24,
        width: 80,
        backgroundColor: '#476170',
        borderRadius: 6,
        marginLeft: 94,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button1text: {
        color: 'white',
        fontSize: 14,
    },
    button2: {
        height: 24,
        width: 80,
        marginTop: 6,
        marginLeft: 2,
        backgroundColor: 'white',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'yellow',
        borderWidth: 2
    },
    button2text: {
        color: 'black',
        fontSize: 14,
        // fontWeight: 'bold',
    },
    text2: {
        color: 'white',
        fontSize: 14,
        // marginTop: 10,
        marginLeft: 110,
    },
    row2: {
        flexDirection: 'row',
        height: 60,
        marginTop: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logout: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold'
    },
    buttonLogout: {
        height: 24,
        width: 80,
        marginTop: 80,
        marginLeft: 88,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        width: '88%',
        height: 0.5,
        marginLeft: 34,
        marginTop: 10,
        backgroundColor: 'black'
    }
})