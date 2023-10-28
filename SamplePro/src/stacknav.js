import React, { Component } from "react"
import Flexbox from "./Flexbox"



import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native'

export default class StackNav extends Component {

  constructor() {
    super();
    this.state = {
      name: null
    }
  }

  updateValue(username) {
    this.setState({ name: username })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/img.jpeg')}
          style={styles.bgimage}>
          <Image source={require('../assets/logo.png')}
            style={styles.logo} />
          <Text style={styles.textView}>Login to Pinterest now </Text>

          <TextInput style={styles.inputView}
            placeholder="Username"
            placeholderTextColor='white'
            underlineColorAndroid='transparent'
            maxLength={10}
            onChangeText={(username) => this.updateValue(username)}
          />

          <TextInput style={styles.inputView}
            placeholder="Password" placeholderTextColor='white'
            secureTextEntry={true}
          />

          <TouchableHighlight style={styles.buttonView}
            // underlayColor='transparent'
            onPress={() => this.props.navigation.navigate("Tab", { username: this.state.name })}>
            <Text style={styles.buttonText}>Login</Text>

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
  bgimage: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
  textView: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 12,
  },
  inputView: {
    width: '80%',
    height: 55,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 50,
    paddingLeft: 20,
    fontSize: 24,
    color: 'white',

  },
  buttonView: {
    width: '60%',
    height: 55,
    backgroundColor: '#ba0909',
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  }
})