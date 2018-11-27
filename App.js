/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import Img from './src/assets/beautiful-place.jpg'
import { black } from 'ansi-colors';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    places: [],
    selectedPlace: null
  }

  addPlaceHandler = placeName => {
    if (placeName.trim() === "")
      return
    let newPlaces = this.state.places.concat({
      key: Math.random(),
      name: placeName,
      img: { uri: 'https://www.visitbritain.com/sites/default/files/consumer_destinations/teaser_images/manchester_town_hall.jpg' }
    });
    this.setState({ places: newPlaces })
  }

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      console.log(prevState.places.find(place => place.key === key));
      return { selectedPlace: prevState.places.find(place => place.key === key) }
    })
  }

  placeDeletedHandler = () => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace: null
      }
    });
  }

  modalClosedHandler = () => {
    this.setState({selectedPlace: null})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native!</Text>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onAddItem={this.addPlaceHandler} />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },


});