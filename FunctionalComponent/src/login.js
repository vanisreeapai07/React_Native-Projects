import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import InputText from "./Components/InputText";

const Login = ({ navigation }) => {

    const [name, setName] = useState(" ")

    return (
        <View>
            <Text>Name : {name}</Text>
            {/* <TextInput
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
            /> */}

            <InputText value={name} onChangeText={(newText) => setName(newText)} />
            <Button title="clear name"
                onPress={() => navigation.navigate('details', { username: name })} />
        </View>
    )
}

export default Login;