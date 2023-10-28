import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native'

export default class DrawerContent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileIcon}>
                        <Image style={styles.profileImage}
                            source={require('../assets/logo.png')}></Image>
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.nameText}>Vanisreee</Text>
                        <Text style={styles.text}>vani@2001</Text>
                        <Text style={styles.text}>79994612762</Text>
                    </View>
                </View>

                < Text style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Home')}
                >Home</Text>
                <Text style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Profile')}
                >Profile</Text>
                <Text style={styles.menu}
                    onPress={() => this.props.navigation.navigate('AboutUs')}
                >About Us</Text>
                <Text style={styles.menu}
                    onPress={() => this.props.navigation.navigate('Settings')}
                >Settings</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    menu: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        color: '#4287f5',
        fontWeight: 'bold',
    },
    profileContainer: {
        height: '25%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileIcon: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        borderRadius: 50,
        marginTop: 10,
        marginLeft: 10
    },
    infoView: {
        marginLeft: 10
    },
    profileImage: {
        height: '100%',
        width: '100%',

    },
    nameText: {
        color: '#360',
        fontWeight: 'bold',
        marginBottom: 5

    },
    text: {
        color: '#4287f5',
        fontWeight: 'bold',
        marginBottom: 5
    }


})