import React, {Component} from "react";
import { View,StyleSheet, Text } from "react-native";
 
export default class Profile extends Component{
   render(){
    return(
        <View style = {styles.container}>
         <Text style = {styles.protxt}>Hi to Profile</Text>
        </View>
    )
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
},
    protxt: {
        fontSize:24,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})