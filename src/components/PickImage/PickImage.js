import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import ImagePlaceHolder from '../../assets/beautiful-place.jpg';

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={ImagePlaceHolder} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button style={styles.button} title='Pick Image' />
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  placeholder: {
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: 'black',
    width: "80%",
    height: 150
  },
  button: {
    margin: 10
  },
  previewImage: {
    width: '100%',
    height: '100%'
  }
})

export default PickImage;