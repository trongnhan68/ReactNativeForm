

import React, { Component } from 'react'
import { Button } from 'react-native';

class DetailScreen extends Component {
    static navigationOptions = {
      title: 'Detail Screen',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Home')}
        />
      );
    }
  }

  export default DetailScreen