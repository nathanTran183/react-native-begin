import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

class PickLocation extends Component {

  state = {
    focusedLocation: {
      latitude: 16.07436221,
      longitude: 108.21860222,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
    },
    marker: true
  }

  picklocationHandler = event => {
    const coord = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coord.latitude,
      longitude: coord.longitude
    }, 500);
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coord.latitude,
          longitude: coord.longitude
        }
      }
    });
    this.props.onLocationPicked({
      latitude: coord.latitude,
      longitude: coord.longitude,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
    })
  }

  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordEvent = {
        nativeEvent: {
          coordinate: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }
        }
      }
      this.picklocationHandler(coordEvent);
    }, err => {
      console.log(err);
    }, { enableHighAccuracy: true, timeout: 2000, maximumAge: 3600000 })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={styles.map}
          onPress={this.picklocationHandler}
          ref={ref => this.map = ref}>
          <MapView.Marker coordinate={this.state.focusedLocation} />
        </MapView>
        <View style={styles.button}>
          <Button title="Set Location" onPress={this.getCurrentLocation} />
        </View >
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  map: {
    width: "90%",
    height: 250,
    borderColor: 'red'
  },
  button: {
    margin: 10
  }
})

export default PickLocation;