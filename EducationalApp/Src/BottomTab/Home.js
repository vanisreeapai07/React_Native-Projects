import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'

// class FlexContent extends Component {
//     render() {
//         return (
//             <View>
//                 <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>
//                     {this.props.name}
//                 </Text>
//             </View>
//         )
//     }
// }


export default class Home extends Component {

    // componentDidMount() {
    //     console.log(this.props.route.params.username)
    // }

    render() {

        const classData = [
            {
                id: 1,
                class: 'class 1'
            },
            {
                id: 2,
                class: 'class 2'
            },
            {
                id: 3,
                class: 'class 3'
            },
            {
                id: 4,
                class: 'class 4'
            },
            {
                id: 5,
                class: 'class 5'
            }
        ]

        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.headerView}>
                        <View style={styles.textView}>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>

                                <Icon name='menu' size={20} />

                            </TouchableOpacity>

                            <Text style={styles.headerStyle}>
                                Inmakes
                            </Text>
                            <Text style={styles.secondHeader}>
                                Learning <Text style={{ color: '#00C458' }}>Hub</Text>
                            </Text>
                        </View>
                        <View style={styles.box} >
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.circle}></View>
                                <Text style={{ color: '#00C458', fontSize: 14 }}>
                                    Classes
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ margin: 20, }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                            GoodMorning
                        </Text>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                            Vanisree
                        </Text>
                        {/* <FlexContent name={this.props.route.params.username} /> */}

                    </View>

                    <FlatList
                        style={{ paddingHorizontal: 10 }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={classData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.horizontalscroll} >
                                <View style={{
                                    flexDirection: 'row', width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <View style={styles.circle}></View>
                                    <Text style={{ color: '#00C458', fontSize: 14 }}>
                                        {item.class}
                                    </Text>
                                </View>
                            </View>
                        )}
                    />



                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        //  backgroundColor: 'blue',
                        height: 160, width: '100%', marginTop: 24, marginLeft: 10
                    }}>
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>

                            <View style={{
                                height: '100%',
                                width: 250,
                                backgroundColor: 'yellow',
                                marginRight: 20
                            }}>
                                <Image source={require('../../assets/img1.jpg')} style={styles.imgstyle} />
                            </View>
                            <View style={{
                                height: '100%',
                                width: 250,
                                backgroundColor: 'yellow',
                                marginRight: 20
                            }}>
                                <Image source={require('../../assets/img1.jpg')} style={styles.imgstyle} />
                            </View>
                            <View style={{
                                height: '100%',
                                width: 250,
                                backgroundColor: 'yellow',
                                marginRight: 20
                            }}>
                                <Image source={require('../../assets/img1.jpg')} style={styles.imgstyle} />
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{
                        height: 300,
                        width: '100%',
                        // backgroundColor: 'green',
                        marginLeft: 10, marginTop: 20, borderRadius: 20
                    }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{
                                height: '100%',
                                width: 250, borderRadius: 10,
                                backgroundColor: '#062E40', marginRight: 20
                            }}>
                                <Text style={{ color: "white" }}>HELLLOOOOO</Text>
                            </View>
                            <View style={{
                                height: '100%',
                                width: 250, borderRadius: 10,
                                backgroundColor: '#062E40', marginRight: 20
                            }}>
                                <Text style={{ color: "white" }}>HELLLOOOOO</Text>
                            </View>
                            <View style={{
                                height: '100%',
                                width: 250, borderRadius: 10,
                                backgroundColor: '#062E40', marginRight: 20
                            }}>
                                <Text style={{ color: "white" }}>HELLLOOOOO</Text>
                            </View>
                            <View style={{
                                height: '100%',
                                width: 250, borderRadius: 10,
                                backgroundColor: '#062E40', marginRight: 20
                            }}>
                                <Text style={{ color: "white" }}>HELLLOOOOO</Text>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}












const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollView: {
        height: '100%',
        width: '100%'
    },
    headerView: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    textView: {
        justifyContent: 'center',
        flex: 1,
    },
    headerStyle: {
        fontSize: 22,
        color: 'black',
        fontWeight: '600',
        textAlign: 'left',
    },
    box: {
        borderColor: '#00C458',
        borderWidth: 2,
        height: 42,
        width: '24%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        borderRadius: 60,
        backgroundColor: '#00C458',
        height: 16,
        width: '20%',
        marginRight: 4
    },
    secondHeader: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },
    horizontalscroll: {
        borderColor: '#00C458',
        borderWidth: 2,
        height: 42,
        width: 88,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        // paddingHorizontal: 6/s
    },
    imgstyle: {
        height: '100%',
        width: '100%',
        borderColor: 'blue',
        borderWidth: 2,

    }
})