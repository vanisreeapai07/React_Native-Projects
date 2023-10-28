import React, {Component} from "react";
import { View,StyleSheet, Text } from "react-native";
 
export default class Home extends Component{
   render(){
    return(
        <View style = {styles.container}>
         <Text style = {styles.hometext}>Hi to home</Text>
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
    hometext: {
        fontSize:24,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})