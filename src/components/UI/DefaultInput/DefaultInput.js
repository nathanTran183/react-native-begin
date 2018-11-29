import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = (props) => (
  <TextInput {...props} style={[styles.input, props.style]} />
)

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#eee",
    padding: 10,
    margin: 8,
    width: "100%",
  }
})


export default defaultInput;