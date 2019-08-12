import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";

export default class ListItem extends Component {

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <TouchableOpacity onPress = {() => this.props.didTouchItem("Hello")}>
            <View style={styles.container}>
                <Image
                    source={pic}
                    style={styles.photoItem}
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>
                        Title dat o day
                    </Text>
                    <Text style={styles.subTitle}>
                        SubTitle Dat o day SubTitle Dat o day SubTitle Dat o day SubTitle Dat o day
                    </Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        paddingTop: 10,
        paddingLeft: 10
    },
    photoItem: {
        width: 100,
        height: 100,
    },
    contentContainer: {
        padding: 10,
        flexDirection: 'column',
        flex: 1,
    },

    title: {
        color: 'red'
    },

    subTitle: {
        top: 10
    }

});