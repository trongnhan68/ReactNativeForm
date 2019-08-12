
import React from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

AppRegistry.registerComponent('Hello', () => App)