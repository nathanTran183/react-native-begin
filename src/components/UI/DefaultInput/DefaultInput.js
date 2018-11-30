import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = (props) => (
  <TextInput {...props} style={[styles.input, props.style]} />
)

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: "#eee",
    padding: 10,
    margin: 8,
    width: "100%",
  }
})


export default defaultInput;