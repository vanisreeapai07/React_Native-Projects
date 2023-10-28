import React, { Component } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native'

export default class app1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/img.jpeg')}
          style={styles.BgImage}>
          <View style={styles.headerview}>
            <Image source={require('./assets/logo.png')}
              style={styles.logo}></Image>
            <Text style={styles.text}>LOGIN</Text>
          </View>
          <TextInput style={styles.inputview1}
            placeholder="Enter your UserId"
            placeholderTextColor={'white'} />
          <TextInput style={styles.inputview2}
            placeholder="Enter your Password"
            secureTextEntry={true}
            placeholderTextColor={'white'} />
          <TouchableHighlight style={styles.button}
            underlayColor='red'
            onPress={()=> console.log('hii nanduu')}>
            <Text style={styles.buttonText}>LOGIN</Text>
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
    backgroundColor: 'black'
  },
  BgImage: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 40,
    width: 40,
    borderWidth: 2,
    marginRight: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',

  },
  inputview1: {
    height: 40,
    width: '60%',
    borderWidth: 2,
    borderColor: 'red',
    marginTop: 80,
    paddingLeft: 16,
    fontWeight: 'bold',

  },
  inputview2: {
    height: 40,
    width: '60%',
    borderWidth: 2,
    borderColor: 'red',
    marginTop: 24,
    marginBottom: 120,
    paddingLeft: 16,
    fontWeight: 'bold'
  },
  headerview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: '60%',
    borderColor: 'red',
    backgroundColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
})