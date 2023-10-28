import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class Details extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         name: null,
    //     }
    // }

    // updateValue(username) {
    //     this.setState({
    //         name: username
    //     })
    // }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.headerView} >
                        <View style={styles.textView}>
                            <Text style={styles.headerStyle}>
                                Inmakes
                            </Text>
                            <Text style={styles.secondHeader}>
                                Learning <Text style={{ color: '#00C458' }}>Hub</Text>
                            </Text>
                        </View>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>
                            Student details
                        </Text>
                    </View>

                    <View style={styles.bottomsheet}>
                        <TextInput style={styles.textInput}
                            placeholder="Full name"
                            placeholderTextColor='#446270'
                            // onChangeText={(username) => this.updateValue(username)}
                        />
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.navigate('MyDrawer',
                            // { username: this.state.name }
                            )}
                        >
                            <Text style={{ fontSize: 20, color: 'white' }}>Register</Text>
                        </TouchableOpacity>
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
    scrollView: {
        height: '100%',
        width: '100%',
    },
    headerView: {
        height: 300,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 120
    },
    textView: {
        justifyContent: 'center',
        flex: 1
    },
    headerStyle: {
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
    bottomsheet: {
        height: 300,
        backgroundColor: '#002333',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        paddingTop: 60
    },
    textInput: {
        borderColor: '#13394A',
        backgroundColor: '#062E40',
        height: 60,
        width: '80%',
        borderRadius: 8,
        paddingLeft: 20,
        fontSize: 20, color:'white'
    },
    button: {
        height: 60,
        backgroundColor: '#00C458',
        width: '80%',
        marginTop: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})