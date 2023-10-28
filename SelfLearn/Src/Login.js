import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableHighlight, ImageBackground } from "react-native";

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/img.jpeg')}
                    style={styles.bgimage}>
                    <Text style={styles.text}>LOGIN</Text>
                    <TouchableHighlight style={styles.button}
                        onPress={() => this.props.navigation.navigate('Custom')}
                        underlayColor='transparent'
                    >
                        <Text style={styles.buttonTextL}>LOGIN</Text>
                    </TouchableHighlight>

                </ImageBackground>

            </View>


        )
    }
}



const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#000000',

    },
    text: {
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 200
    },
    button: {
        // borderWidth: 2,
        height: 50,
        width: '60%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 200,
        borderRadius: 14
    },
    bgimage: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextL: {
        fontSize: 26,
        color: 'black',
    }
})