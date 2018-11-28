import React from 'react';
import { Modal, View, Image, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.deletePlaceBtn}>
              <Icon name="delete" size={30} color="red" />
            </View>
          </TouchableOpacity>
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
  },
  deletePlaceBtn: {
    alignItems: 'center',
  }
})

export default PlaceDetail