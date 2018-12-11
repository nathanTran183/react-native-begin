import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = (props) => {
  // console.log(props.valid);
  // console.log(props.touched);
  // console.log(props.touched ? props.valid ? 'valid' : 'invalid' : 'null' )  
  return (
  <TextInput {...props} style={[
    styles.input, 
    props.style, 
    props.touched ? props.valid ? styles.valid : styles.invalid : null    
  ]} />
)
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: "#eee",
    padding: 10,
    marginTop: 8,
    marginBottom: 8,
    width: "100%",
  },
  invalid: {
    backgroundColor: '#f9c0c0',
    borderColor: 'red'
  },
  valid: {
    backgroundColor: '#c9e9d0',
    borderColor: 'green'
  }
})


export default defaultInput;