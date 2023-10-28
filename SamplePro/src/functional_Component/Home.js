import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


export default function Home({navigation}) {
    const [count, setCount] = useState(0);

    const value = 5;

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>helloo : {count} </Text>
            <TouchableOpacity style={{
                width: '80%',
                height: 50,
                backgroundColor: 'yellow',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20
            }}

                onPress={() => navigation.navigate('About', {myValue: value})}  >

                <Text>Click here</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
        justifyContent: 'center'
    }
})