
import React, { Component } from 'react'
import { View, FlatList, TextInput, Button } from 'react-native';
import ListItem from './ListItem';
import NormalInput from './NormalInput'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home Screen',
    };

    state = {
        textValue: ""
    }

    onPressSubmit = () => {
        alert(this.state.textValue)
    }

    onTextChanged = val => {
        this.setState(preState => {
            return {
                textValue: preState.textValue + "+" + val
            }
        });
    }

    handleSumbitForm = values => {
        
        this.setState(preState => {
            return {
                textValue: values
            }
        });
    }

    tapOnItemhandler = string => {
        this.props.navigation.navigate('Detail')
    }

    render() {

        const { navigate } = this.props.navigation;

        return (

            <View>
                <NormalInput></NormalInput>
            </View>
        );
    }
}

export default HomeScreen