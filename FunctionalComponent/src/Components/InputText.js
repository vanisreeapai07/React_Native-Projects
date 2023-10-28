import { TextInput, } from 'react-native'
import tw from 'twrnc';
import React, { useState } from 'react'

const InputText = ({value,onChangeText}) => {

    

    const onChange = (text) => {
       if(onChangeText){
        onChangeText(text);
       }
    }

    return (
        <TextInput
            placeholder='name'
            style={tw`h-30 w-80 bg-white`}
            value={value}
            onChangeText={onChange}
        />
    )
}

export default InputText;

