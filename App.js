/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { black } from 'ansi-colors';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: "",    
    enabled: false
  };

  inputChangedHandler = value => {
    let enabled = true;
    if (value === "")
      enabled = false;
    this.setState({ placeName: value, enabled: enabled })
  };

  onPressLearnMore = () => {
    alert(this.state.placeName);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            value={this.state.placeName}
            placeholder="Place Name"
            onChangeText={this.inputChangedHandler}
          />
          <Button 
            onPress={this.onPressLearnMore}
            title="Add"
            disabled={!this.state.enabled}
            style={styles.placeButton}
            color="#841584"
            accessibilityLabel="Learn more about this purple button" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: "70%",
  },
  placeButton: {
    width: "30%",
  }
});