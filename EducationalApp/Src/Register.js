import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'

export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ width: '100%', height: '100%' }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={styles.FirstView}>
                            <View style={styles.logoview}>
                                <Text style={styles.headerText}>
                                    Inmakes
                                </Text>
                                <Text style={styles.secondHeader}>
                                    Learning <Text style={{ color: '#00C458' }}>Hub</Text>
                                </Text>
                            </View>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>
                                Enter your mobile number
                            </Text>
                            <Text style={styles.text}>
                                We will send you an OTP to verify
                            </Text>
                        </View>

                        <View style={styles.bottomsheet}>
                            <View style={styles.numberview}>
                                <TextInput style={styles.input1}
                                    placeholder="+91"
                                    placeholderTextColor={'white'}
                                />
                                <TextInput style={styles.input2}
                                    placeholder="Mobile number"
                                    placeholderTextColor={'#446270'}
                                />
                            </View>
                            <TouchableOpacity style={styles.button} 
                                 onPress={()=> this.props.navigation.navigate('Otp')}
                            >
                                <Text style={{ color: 'white', fontSize: 20 }}>Continue</Text>
                            </TouchableOpacity>
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
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    headerText: {
        fontSize: 22,
        color: 'black',
        fontWeight: '600',
        textAlign: 'left',

    },
    secondHeader: {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
        color: 'black',
        fontWeight: '100'
    },
    FirstView: {
        height: 520,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingBottom: 20
    },
    logoview: {
        flex: 1,
        justifyContent: 'center',
    },
    numberview: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '28%'
    },
    bottomsheet: {
        backgroundColor: '#002333',
        height: 280,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    mobnum: {
        borderColor: '#13394A',
        backgroundColor: '#062E40',
        width: 50
    },
    input1: {
        borderColor: '#13394A',
        backgroundColor: '#062E40',
        width: '18%',
        textAlign: 'center',
        height: '100%',
        borderRadius: 6
    },
    input2: {
        borderRadius: 6,
        borderColor: '#13394A',
        backgroundColor: '#062E40',
        width: '72%',
        height: '100%',
        marginHorizontal: 6,
        paddingHorizontal: 20,
        fontSize: 18
    },
    button: {
        borderWidth: 2,
        backgroundColor: '#00C458',
        height: '28%',
        width: '92%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 20
    }
})