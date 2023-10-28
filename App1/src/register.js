import React, { Component } from "react";
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
} from 'react-native'

class Me extends Component {
    render() {
        return (
            <View>
                <Text style={styles.statetext}>Begin your
                    {this.props.name}</Text>
            </View>
        )
    }
}


export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            maintext: 'Not Registered',
        }
    }

    update() {
        this.setState({
            maintext: 'REGISTER SUCCEFULLY'
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/img.jpeg')}
                    style={styles.bgimage}
                    imageStyle={{ opacity: 0.7 }}>

                    <View style={styles.newView}>
                        <Image source={require('../assets/logo.png')}
                            style={styles.logo}></Image>
                        <Text style={styles.text}>REGISTER</Text>
                    </View>
                    <TextInput style={styles.inputtext}
                        placeholder="Enter your name"
                        placeholderTextColor='white' />
                    <TextInput style={styles.inputtext}
                        placeholder="Enter your Email Id"
                        placeholderTextColor='white' />
                    <TextInput style={styles.inputtext}
                        placeholder="Password"
                        placeholderTextColor='white'
                        secureTextEntry={true} />
                    <View style={styles.newView}>
                        <TextInput style={styles.numbertext}
                            placeholder="+91"
                            placeholderTextColor='white'
                            secureTextEntry={true} />
                        <TextInput style={styles.inputtext2}
                            placeholder="Enter mobile number "
                            placeholderTextColor='white'
                            secureTextEntry={true} />
                    </View>
                    <TouchableHighlight style={styles.button}
                        underlayColor='red'
                        onPress={() => this.update()}>
                        <Text style={styles.buttontext}>REGISTER</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button}
                        onPress={() => this.props.navigation.navigate('Drawer')}>
                        <Text style={styles.buttontext}>Navigate</Text>
                    </TouchableHighlight>

                    <Text style={styles.statetext}>{this.state.maintext}</Text>
                    <Me name='journey with us'></Me>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black'
    },
    bgimage: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo: {
        height: 62,
        width: 62,
    },
    newView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginRight: 20,
        marginLeft: 14,
    },
    inputtext: {
        height: 40,
        width: '60%',
        borderWidth: 2,
        borderColor: 'white',
        fontWeight: 'bold',
        paddingLeft: 16,
        marginBottom: 14,
    },
    numberview: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numbertext: {
        height: 40,
        width: 48,
        borderWidth: 2,
        borderColor: 'white',
        fontWeight: 'bold',
        paddingLeft: 16,
        marginBottom: 14,
        marginRight: 4

    },
    inputtext2: {
        height: 40,
        width: 210,
        borderWidth: 2,
        borderColor: 'white',
        fontWeight: 'bold',
        paddingLeft: 16,
        marginBottom: 14,
    },
    button: {
        borderColor: 'white',
        borderWidth: 2,
        height: 40,
        width: '60%',
        textAlign: 'center',
        justifyContent: 'center'
    },
    buttontext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 80
    },
    statetext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10
    },
    contentstyle: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    }

})