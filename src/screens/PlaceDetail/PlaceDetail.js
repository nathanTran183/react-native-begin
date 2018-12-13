import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Platform, ActivityIndicator, Alert } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { PlacesActions } from '../../store/actions/index';
import { Navigation } from 'react-native-navigation';

class PlaceDetail extends Component {
  deletePlace = () => {
    Alert.alert(
      'Delete ' + this.props.selectedPlace.name,
      'Do you want to delete this place?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        {
          text: 'OK', onPress: () => {
            this.props.removePlace(this.props.selectedPlace.id);
            Navigation.popToRoot(this.props.componentId);
          }
        },
      ],
      // { cancelable: false }
    )

  }

  render() {
    let content = (
      <View style={styles.container}>
        <View>
          <Image source={this.props.selectedPlace.img} style={styles.placeImage} />
          <MapView
            initialRegion={this.props.selectedPlace.location}
            style={styles.map}>
            <MapView.Marker coordinate={this.props.selectedPlace.location} />
          </MapView>
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.deletePlace}>
            <View style={styles.deletePlaceBtn}>
              <Icon name={Platform.OS === "android" ? "md-trash" : "ios-trash"} size={30} color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
    if (this.props.isLoading)
      content = (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    return (
      <View>
        {content}
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
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
  },
  map: {
    width: '100%',
    height: 250
  }
})

const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removePlace: (id) => dispatch(PlacesActions.removePlace(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetail);