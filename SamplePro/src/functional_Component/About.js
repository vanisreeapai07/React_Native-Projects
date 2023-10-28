import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


const About = ({ route }) => {
    const valueReceived = route.params?.myValue
    const [count, setCount] = useState(valueReceived)
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{
                width: '20%',
                height: 50,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20
            }}
                onPress={() => setCount(count + 1)}
            >
                <Text style={{ fontSize: 26, fontWeight: 'bold' }}>+</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 20, marginTop: 48 }}>count: {count}</Text>

            <TouchableOpacity style={{
                width: '20%',
                height: 50,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 60
            }}
                onPress={() => setCount(count - 1)}
            >
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
        justifyContent: 'center'
    }
})