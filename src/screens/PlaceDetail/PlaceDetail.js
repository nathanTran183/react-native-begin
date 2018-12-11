import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { PlacesActions } from '../../store/actions/index';
import { Navigation } from 'react-native-navigation';

class PlaceDetail extends Component {
  deletePlace = () => {
    this.props.deletePlace(this.props.selectedPlace.key);
    Navigation.popToRoot(this.props.componentId);
  }

  render() {
    return (
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

const mapDispatchToProps = dispatch => {
  return {
    deletePlace: (key) => dispatch(PlacesActions.deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);