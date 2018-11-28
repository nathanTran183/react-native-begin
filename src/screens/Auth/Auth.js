import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import startMainTabs from '../MainTabs/StartMainTabs';

class AuthScreen extends Component {
  
  signInHandler = () => {
    startMainTabs();
  }
  
  render() {
    return (
      <View>
        <Text>Authentication Screen</Text>
        <Button onPress={this.signInHandler} title="Sign In" />
      </View>
    );
  }
}

export default AuthScreen;