import React, { Component } from "react"
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import axios from "axios";

export default class Category extends Component {

    constructor() {
        super();
        this.state = {
            loader: false,
            DATA: []
        }
    }

    getData() {
        this.setState({ loader: true })

        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((response) => {
                 
                if (response.movies && response.movies.length > 0) {
                    this.setState({ DATA: response.movies, description: response.description })
                }

                this.setState({ loader: false })
                console.log('your res:', response)
            })
            .catch((error) => {
                this.setState({ loader: false })
                console.log('error is :', error)
            })

    }

    getAxiosData() {
        this.setState({ loader: true })
        axios.get('https://reactnative.dev/movies.json')
            .then((response) => {
                this.setState({ loader: false })
                console.log('AXIOS response:', response)
            })
            .catch((error) => {
                console.log('AXIOS ERROR', error)
            })
    }

    componentDidMount() {
        // this.getData()
    }

    render() {

        const renderItem = ({ item }) => (
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.title}</Text>
                <Text style={styles.itemDes}>{this.state.description}</Text>
            </View>
        )

        return (
            <View style={styles.container}>
                <ActivityIndicator size={30} color='blue' animating={this.state.loader} />
                <Text style={styles.hometxt}
                    onPress={() => this.getData()}>Hi to Category page</Text>
                <Text>{this.state.description}</Text>

                <FlatList style={{ width: '95%', marginTop: 10, paddingHorizontal: 20 }}
                    // contentContainerStyle={{ justifyContent: 'center' }}
                    // horizontal={true}
                    data={this.state.DATA}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem} />
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee'

    },
    hometxt: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    itemContainer: {
        width: '100%',
        height: 50,
        padding: 10,  //all sides ilum padding apply aakum , athan total padiing 10 kodthat
        backgroundColor: '#ffffff',
        marginVertical: 10,
        // alignItems: 'center',
        // justifyContent:  'center'
    },
    itemText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center' //
    },
    itemDes: {
        fontSize: 14,
        color: '#369',
        fontWeight: 'bold',
        marginTop: 10
    }
})
