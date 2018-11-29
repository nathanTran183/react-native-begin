import React from 'react';
import { Text, StyleSheet } from 'react-native';

const defaultInput = (props) => (
  <Text {...props} style={[styles.headingText, props.style]}>{props.children}</Text>
)

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
})


export default defaultInput;