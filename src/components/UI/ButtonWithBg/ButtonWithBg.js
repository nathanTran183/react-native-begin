import React from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';

const ButtonWithBg = props => (
  <TouchableHighlight onPress={props.onPress}>
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text>{props.title}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 5
  }
})

export default ButtonWithBg;