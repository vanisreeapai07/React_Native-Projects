import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.headerView}>
                        <View style={styles.textView}>
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

                    <View style={{ margin: 20, backgroundColor: 'green' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                            GoodMorning
                        </Text>
                        {/* <FlexContent name={this.props.route.params.username}>
                        </FlexContent> */}
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
        height: 40,
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
})