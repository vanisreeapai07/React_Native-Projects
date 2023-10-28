// import React, { Component } from "react";
// import { View, StyleSheet, Text, ActivityIndicator, FlatList } from 'react-native'

// export default class App extends Component {

//     constructor() {
//         super();
//         this.state = {
//             loader: false,
//             DATA: [],
//             count: null,
//             name: '',
//         }
//     }



//     getData() {
//         this.setState({ loader: true })
//         fetch('https://api.nationalize.io?name=nathaniel')
//             .then((response) => response.json())
//             .then((response) => {
//                 console.log('your res:', response)
//                 this.setState({
//                     loader: false,
//                     DATA: response.country,
//                     name: response.name,
//                     count: response.count
//                 })
//                 console.log('data', response.country)
//                 console.log('name', response.name)

//             })
//             .catch((error) => {
//                 console.log('error:', error)
//                 this.setState({ loader: false })
//             })
//     }


//     render() {

//         const renderItem = ({ item }) => (
//             <View style={styles.itemContainer}>
//                 <Text style={styles.item}>
//                     {item.probability}
//                 </Text>
//             </View>
//         )

//         return (
//             <View style={styles.container}>
//                 <ActivityIndicator size={24} color='blue' animating={this.state.loader}></ActivityIndicator>
//                 <Text onPress={() => this.getData()} style={styles.text}>
//                     helloo
//                 </Text>
//                 <View style={styles.nameCount}>
//                     <Text>Name: {this.state.name}</Text>
//                     <Text>Count: {this.state.count}</Text>


//                 </View>
//                 <FlatList style={styles.list}
//                     data={this.state.DATA}
//                     keyExtractor={(item) => item.country_id.toString()}
//                     renderItem={renderItem}
//                 />
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         alignItems: 'center'
//     },
//     text: {
//         color: 'black',
//         fontSize: 20
//     },
//     list: {
//         width: '95%',
//         marginTop: 10
//     },
//     itemContainer: {
//         backgroundColor: '#D3D3D3',
//         elevation: 5,
//         margin: 10
//     },
//     item: {
//         fontSize: 20,
//         padding: 10
//     },
//     nameCount: {
//         width: '90%',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         // backgroundColor: 'yellow'
//     }
// })

// import React, { Component } from "react";
// import { View, StyleSheet, Text, ActivityIndicator, FlatList } from "react-native";


// export default class App extends Component {

//     constructor() {
//         super();
//         this.state = {
//             loader: false,
//             count: null,
//             name: '',
//             country: [],
//         }
//     }

//     getData() {
//         this.setState({ loader: true })

//         fetch('https://api.nationalize.io?name=nathaniel')
//             .then((response) => response.json())
//             .then((response) => {
//                 this.setState({
//                     loader: false,
//                     count: response.count,
//                     name: response.name,
//                     country: response.country
//                 })

//             })
//             .catch((error) => {
//                 this.setState({ loader: false })
//                 console.log("error is ", error)
//             })
//     }

//     render() {

//         function renderItem({ item }) {
//             return (
//                 <View>
//                     <Text>
//                          {item.probability}
//                     </Text>
//                 </View>
//             )
//         }


//         return (
//             <View style={styles.container}>
//                 <ActivityIndicator size={20} color='blue' animating={this.state.loader}></ActivityIndicator>
//                 <Text onPress={() => this.getData()}>hellooo</Text>
//                 <Text>{this.state.count}</Text>
//                 <Text>{this.state.name}</Text>

//                 <FlatList style={styles.list}
//                     data={this.state.country}
//                     keyExtractor={(item) => item.country_id.toString()}
//                     renderItem={renderItem}
//                 />
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white'
//     },
//     list: {
//         backgroundColor: 'white',
//         width: '95%',
//         marginTop: 10
//     },
//     itemContainer: {
//         backgroundColor: '#D3D3D3'
//     }

// })


import React, { Component } from "react";
import { View, StyleSheet, Text, ActivityIndicator, FlatList } from 'react-native'

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            loader: false,
            bpi: [],
            chartname: '',
            disclaimer: ''
        }
    }

    getData() {
        this.setState({ loader: true });
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    loader: false,
                    bpi: response.bpi,
                    chartname: response.chartname,
                    disclaimer: response.disclaimer
                })
                console.log("Your res:", response);
            })
            .catch((error) => {
                this.setState({ loader: false })
                console.log("error is", error);
            })
    }

    render() {

        function renderItem({ item }) {
            <View>
                <Text>
                    {item.EUR}
                </Text>
            </View>
        }

        return (
            <View style={styles.container}>
                <ActivityIndicator size={20} color="blue" animating={this.state.loader} ></ActivityIndicator>
                <Text onPress={() => this.getData()}>
                    Click here
                </Text>
                <FlatList
                    data={this.state.bpi}
                    renderItem={renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

})