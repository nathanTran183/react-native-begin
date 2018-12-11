import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Dimensions, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
// import ButtonWithBg from '../../components/UI/ButtonWithBg/ButtonWithBg';
import BackgroundImg from '../../assets/background.jpg';
import validate from '../../utilities/validation';
import { toHome } from '../../navigations/navigation';

class AuthScreen extends Component {
  state = {
    viewMode: 'portrait',
    authMode: 'signin',
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: 'password'
        },
        touched: false
      }
    }
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

  authSubmitHandler = () => {
    toHome();
  }

  changeView = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === 'signin' ? 'signup' : 'signin'
      }
    })
  }

  onChangedTextHandler = (key, value) => {
    let connectedValue = {}
    if (this.state.controls[key].validationRules.equalTo) {
      connectedValue = {
        ...connectedValue,
        equalTo: this.state.controls[this.state.controls[key].validationRules.equalTo].value
      }
    }
    if (key === 'password') {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      }
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid: key === 'password' ? validate(prevState.controls.confirmPassword.value, prevState.controls.confirmPassword.validationRules, connectedValue) : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(value, prevState.controls[key].validationRules, connectedValue),
            touched: true
          },

        }
      }
    })
  }

  render() {
    let signUpView = (
      <View style={this.state.viewMode === 'portrait' ? styles.portraitInputWrapper : styles.landscapeInputWrapper}>
        <DefaultInput
          style={styles.input}
          placeholder="Confirm Password"
          value={this.state.controls.confirmPassword.value}
          valid={this.state.controls.confirmPassword.valid}
          touched={this.state.controls.confirmPassword.touched}
          onChangeText={(value) => this.onChangedTextHandler('confirmPassword', value)}
          secureTextEntry
        />
      </View>
    )
    if (this.state.authMode === 'signin')
      signUpView = null;
    return (
      <ImageBackground style={styles.backgroundImage} source={BackgroundImg}>
        <KeyboardAvoidingView style={styles.container}>
          <MainText>
            <HeadingText style={styles.headingText}>{this.state.authMode === 'signin' ? 'Sign In' : 'Sign Up'}</HeadingText>
          </MainText>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inputContainer}>
            <DefaultInput style={styles.input}
              placeholder="Email Address"
              value={this.state.controls.email.value}
              valid={this.state.controls.email.valid}
              touched={this.state.controls.email.touched}
              onChangeText={(value) => this.onChangedTextHandler('email', value)}
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <View style={this.state.viewMode === 'portrait' || this.state.authMode === 'signin' ? styles.portraitInputContainer : styles.landscapeInputContainer}>
              <View style={this.state.viewMode === 'portrait' || this.state.authMode === 'signin' ? styles.portraitInputWrapper : styles.landscapeInputWrapper}>
                <DefaultInput
                  style={styles.input}
                  placeholder="Password"
                  value={this.state.controls.password.value}
                  valid={this.state.controls.password.valid}
                  touched={this.state.controls.password.touched}
                  onChangeText={(value) => this.onChangedTextHandler('password', value)}
                  secureTextEntry
                />
              </View>
              {signUpView}
            </View>
          </View>
          </TouchableWithoutFeedback>
          <Button
            disabled={
              !this.state.controls.confirmPassword.valid && this.state.authMode === "signup" ||
              !this.state.controls.email.valid ||
              !this.state.controls.password.valid
            }
            onPress={this.authSubmitHandler}
            title={this.state.authMode === 'signin' ? "Sign In" : "Sign Up"}
          />
          <Text style={{ margin: 10, color: 'white' }} onPress={this.changeView}>{this.state.authMode === 'signin' ? "Don't have account? Sign Up!" : "Back to Sign In"}</Text>
        </KeyboardAvoidingView>
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