import React from "react";
import tw from 'twrnc';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomButton = ({onPress,text}) => {
    return (
        <TouchableOpacity style={styles.buttonStyle}
           onPress={onPress}>
            <Text style={{ color: 'white' }}>
               {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: '100%',
        width: '100%',
        borderRadius: 8,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CustomButton;