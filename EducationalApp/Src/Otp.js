import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Otp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollview} contentContainerStyle={{ alignItems: 'center', }}>
                    <View style={styles.headerView}>
                        <View style={styles.textStyle}>
                            <Text style={styles.headerStyle}>
                                Inmakes
                            </Text>
                            <Text style={styles.secondHeader}>
                                Learning <Text style={{ color: '#00C458' }}>Hub</Text>
                            </Text>
                        </View>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>
                            Verification Code
                        </Text>
                        <Text style={styles.text}>
                            Please type verfication code
                        </Text>
                    </View>

                    <View style={styles.bottomSheet}>
                        <View style={styles.otpView}>
                            <TextInput style={styles.otp1}
                            />
                            <TextInput style={styles.otp1}
                            />
                            <TextInput style={styles.otp1}
                            />
                            <TextInput style={styles.otp1}
                            />
                            <TextInput style={styles.otp1}
                            />
                            <TextInput style={styles.otp1}
                            />
                        </View>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.navigate('Details')}
                        >
                            <Text style={{ color: 'white', fontSize: 20 }}>Resend OTP</Text>
                        </TouchableOpacity>
                        <View style={styles.iconview}>
                            <Icon name='phone' size={20} color='#00C458'></Icon>
                            <Text style={styles.iconText}>Contact Us</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollview: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'red'
    },
    headerView: {
        width: '100%',
        height: 300,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 120
    },
    headerStyle: {
        fontSize: 22,
        color: 'black',
        fontWeight: '600',
        textAlign: 'left',
    },
    textStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    secondHeader: {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
    },
    bottomSheet: {
        height: 260,
        width: '100%',
        backgroundColor: '#002333',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20
    },
    otpView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '42%',
        width: '100%',
        // backgroundColor: 'red'
    },
    otp1: {
        borderColor: '#13394A',
        backgroundColor: '#062E40',
        width: '14%',
        textAlign: 'center',
        height: '64%',
        borderRadius: 6,
        marginRight: 6
    },
    button: {
        borderWidth: 2,
        backgroundColor: '#00C458',
        height: '28%',
        width: '92%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 2
    },
    iconview: {
        flexDirection: 'row',
        marginTop: 20
    },
    iconText: {
        color: '#00C458',
        fontSize: 16,
        paddingHorizontal: 8
    }

})