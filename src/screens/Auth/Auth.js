import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import startMainTabs from '../MainTabs/StartMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
// import ButtonWithBg from '../../components/UI/ButtonWithBg/ButtonWithBg';
import BackgroundImg from '../../assets/background.jpg';

class AuthScreen extends Component {
  state = {
    viewMode: 'portrait'
  }

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.updateState)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateState);
  }

  updateState = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
    })
  }


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
            <View style={this.state.viewMode === 'portrait' ? styles.portraitInputContainer : styles.landscapeInputContainer}>
              <View style={this.state.viewMode === 'portrait' ? styles.portraitInputWrapper : styles.landscapeInputWrapper}>
                <DefaultInput style={styles.input} placeholder="Email Address" />
              </View>
              <View style={this.state.viewMode === 'portrait' ? styles.portraitInputWrapper : styles.landscapeInputWrapper}>
                <DefaultInput style={styles.input} placeholder="Password" />
              </View>
            </View>
          </View>
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
  },
  landscapeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  portraitInputContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  landscapeInputWrapper: {
    width: '45%'
  },
  portraitInputWrapper: {
    width: '100%'
  }
})

export default AuthScreen;