import { Text, View } from 'react-native'
import React from 'react'

const details = ({route}) => {
    const {username} = route.params
    return (
        <View>
            <Text>details of {username}</Text>
        </View>
    )
}

export default details

