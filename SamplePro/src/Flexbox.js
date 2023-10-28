//FLEX
//STATE AND PROPS
//CONSTRUCTOR
//METHOD

import React, { Component } from "react";



import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native'

class FlexContent extends Component {
    render() {
        return (
            <View>
                <Text style={styles.contentStyle}>Hi my name is {this.props.name}</Text>
            </View>
        )
    }
}

export default class Flexbox extends Component {
    constructor() {
        super();
        this.state = {
            main_text: 'hello',
            sub_text: 'react',
        }
    }

    componentDidMount() {
        console.log('The username is ', this.props.route.params.username)

    }

    updateText() {
        this.setState({
            main_text: 'Hi (Hello upated)',
            sub_text: 'Framework (react updtaed)',
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.main_text}</Text>
                <Text style={styles.text}>{this.state.sub_text}</Text>
                <TouchableHighlight style={styles.button}
                    underlayColor='red'
                    onPress={() => this.updateText()}>
                    <Text style={styles.text}>UPDATE</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}
                    underlayColor='red'
                    onPress={() => this.props.navigation.navigate('Tab')}>
                    <Text style={styles.text}>new button</Text>
                </TouchableHighlight>

                <FlexContent name={this.props.route.params.username}>

                </FlexContent>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'

    },
    button: {
        height: 55,
        width: '60%',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 20,
    },
    contentStyle: {
        fontSize: 22,
        color: '#369',
        fontWeight: 'bold',
        marginTop: 20
    }
})

