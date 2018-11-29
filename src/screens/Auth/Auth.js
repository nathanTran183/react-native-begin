import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import startMainTabs from '../MainTabs/StartMainTabs';
import { Navigation } from 'react-native-navigation';
class AuthScreen extends Component {

  signInHandler = () => {
    startMainTabs();
  }

  render() {
    console.log(this.props.componentId);
    return (
      <View>
        <Text>Authentication Screen</Text>
        <Button onPress={this.signInHandler} title="Sign In" />
      </View>
    );
  }
}

export default AuthScreen;