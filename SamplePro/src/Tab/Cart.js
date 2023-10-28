import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler"
import { ScreenContainer } from "react-native-screens"
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Cart extends Component {
    constructor() {
        console.log('constructor')
        super();
        this.state = {
            headerText: null
        }
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps')
        return null
    }

    updateState() {
        this.setState({ headerText: 'component update' })
    }

    componentDidMount() {
        console.log('component did mount')
    }


    removeItem() {
        this.setState({ headerText: null })
    }

    // shouldComponentUpdate(){
    //     console.log('shouldcomponent update called')
    //     return null
    // }

    componentDidUpdate() {
        console.log('component did update called')
    }

    componentWillUnmount(){
        console.log('component unmount called')
    }

    render() {
        console.log('Render called')
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}
                    contentContainerStyle={{ alignItems: 'center' }}>
                    <View style={styles.headercard}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{this.state.headerText}</Text>
                    </View>
                    <View style={styles.baselinecard}>

                        <View style={styles.textHolder}>
                            <Icon name='edit' size={16} color='black' />
                            <Text style={{ fontSize: 16, marginLeft: 10 }}>Mounting</Text>
                        </View>
                        <View style={styles.textHolder}>
                            <Icon name='edit' size={16} color='black' />
                            <Text style={{ fontSize: 16, marginLeft: 10 }}>Updating</Text>
                        </View>
                        <View style={styles.textHolder}>
                            <Icon name='edit' size={16} color='black' />
                            <Text style={{ fontSize: 16, marginLeft: 10 }}>UnMounting</Text>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={{
                    borderColor: 'black',
                    borderWidth: 1,
                    width: '90%',
                    height: 80,
                    elevation: 4,
                    marginBottom: 20,
                    marginLeft: 22,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'skyblue',
                }}
                    activeOpacity={0.8}
                    onPress={() => this.updateState()}
                >
                    <Text>Updating</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    borderColor: 'black',
                    borderWidth: 1,
                    width: '90%',
                    height: 80,
                    elevation: 4,
                    marginBottom: 20,
                    marginLeft: 22,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'skyblue',
                }}
                    activeOpacity={0.8}
                    onPress={() => this.removeItem()}
                >
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee'
    },
    hometxt: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    scrollContainer: {
        width: '100%',
        height: '100%',
    },
    scrollchildView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headercard: {
        width: '95%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        marginTop: 10,
        elevation: 4,
    },
    baselinecard: {
        width: '95%',
        padding: 15,
        backgroundColor: 'white',
        elevation: 4,
        marginTop: 30
    },
    textHolder: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },

})

