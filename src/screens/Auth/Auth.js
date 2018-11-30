import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import startMainTabs from '../MainTabs/StartMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
// import ButtonWithBg from '../../components/UI/ButtonWithBg/ButtonWithBg';
import BackgroundImg from '../../assets/background.jpg';

class AuthScreen extends Component {

  signInHandler = () => {
    startMainTabs();
  }

  openSignUpView = () => {
    alert('Open Sign Up View');
  }

  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={BackgroundImg}>
        <View style={styles.container}>
          <MainText>
            <HeadingText style={styles.headingText}>Sign In</HeadingText>
          </MainText>
          <View style={styles.inputContainer}>
            <DefaultInput style={styles.input} placeholder="Email Address" />
            <DefaultInput style={styles.input} placeholder="Password" />
          </View>
          {/* <ButtonWithBg onPress={this.signInHandler} color={'blue'} title="Sign In" /> */}
          <Button onPress={this.signInHandler} title="Sign In" />
          <Text style={{ margin: 10 }} onPress={this.openSignUpView}>Don't have account? Sign Up!</Text>
        </View>
      </ImageBackground>
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
  backgroundImage: {
    width: "100%",
    flex: 1
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