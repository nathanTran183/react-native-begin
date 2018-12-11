import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import ImagePlaceHolder from '../../assets/beautiful-place.jpg';
import ImagePicker from 'react-native-image-picker';

class PickImage extends Component {

  state = {
    pickedImage: null
  }

  onPickImage = () => {
    ImagePicker.showImagePicker({
      title: 'Select Place Image',      
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.setState({
          pickedImage: { uri: response.uri, base64: response.data },
        });
        this.props.onImagePicked(this.state.pickedImage)
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button style={styles.button} onPress={this.onPickImage} title='Pick Image' />
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