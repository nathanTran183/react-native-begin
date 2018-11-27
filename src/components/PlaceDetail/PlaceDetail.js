import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const PlaceDetail = (props) => {
  let modalContent = null;
  if (props.selectedPlace)
    modalContent = (
      <View>
        <Image source={props.selectedPlace.img} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );

  return (
    <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType='fade'>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted}></Button>
          <Button title="Close" onPress={props.onModalClosed}></Button>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
})

export default PlaceDetail