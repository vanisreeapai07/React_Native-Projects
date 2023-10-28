import React, { useState } from "react";
import CustomButton from "../button";
import { View, Text, } from "react-native";

const Home = ({ navigation }) => {
    const [name, setName] = useState('Vani')
    return (
        <View>
            <Text>
                My name is vani : {name}
            </Text>

            <View style={{
                height: 50,
                width: '80%',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 40,
                marginTop: 40
            }}>
                <CustomButton
                    onPress={() => navigation.navigate('Login')}
                    text='Click here' />
            </View>
            <Update username={name} age={28} />
        </View>
    )
}



const Update = (props) => {
    return (
        <View>
            <Text>
                My name is vani : {props.username}
            </Text>
            <Text>
                My age is : {props.age}
            </Text>
        </View>
    )
}

export default Home;