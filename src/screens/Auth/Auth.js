import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import startMainTabs from '../MainTabs/StartMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class AuthScreen extends Component {

  signInHandler = () => {
    startMainTabs();
  }

  openSignUpView = () => {
    alert('Open Sign Up View');
  }

  render() {
    return (
      <View style={styles.container}>
        <HeadingText style={styles.headingText}>Sign In</HeadingText>
        <View style={styles.inputContainer}>
          <DefaultInput style={styles.input} placeholder="Email Address" />
          <DefaultInput style={styles.input} placeholder="Password" />
        </View>
        <Button onPress={this.signInHandler} title="Sign In" />
        <Text style={{ margin: 10 }} onPress={this.openSignUpView}>Don't have account? Sign Up!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: 'center',
    margin: 10
  },
  
  inputContainer: {
    width: "80%"
  },
  input: {
    borderColor: "#bbb",
    backgroundColor: "#eee"
  }
})

export default AuthScreen;