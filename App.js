/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { PlacesActions } from './src/store/actions/places';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import Img from './src/assets/beautiful-place.jpg'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class App extends Component {

  addPlaceHandler = placeName => {
    // if (placeName.trim() === "")
    //   return
    // let newPlaces = this.state.places.concat({
    //   key: Math.random(),
    //   name: placeName,
    //   img: { uri: 'https://www.visitbritain.com/sites/default/files/consumer_destinations/teaser_images/manchester_town_hall.jpg' }
    // });
    // this.setState({ places: newPlaces })
    this.props.addPlace(placeName);
  }

  placeSelectedHandler = (key) => {
    // this.setState(prevState => {
    //   return { selectedPlace: prevState.places.find(place => place.key === key) }
    // })
    this.props.selectPlace(key);
  }

  placeDeletedHandler = () => {
    // this.setState((prevState) => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== prevState.selectedPlace.key
    //     }),
    //     selectedPlace: null
    //   }
    // });
    this.props.deletePlace();
  }

  modalClosedHandler = () => {
    // this.setState({selectedPlace: null})
    this.props.deselectPlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native!</Text>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onAddItem={this.addPlaceHandler} />
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />
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
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPlace: (placeName) => dispatch(PlacesActions.addPlace(placeName)),
    deletePlace: () => dispatch(PlacesActions.deletePlace()),
    selectPlace: (key) => dispatch(PlacesActions.selectPlace(key)),
    deselectPlace: () => dispatch(PlacesActions.deselectPlace()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)