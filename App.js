/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponentWithRedux('RNCourse.AuthScreen', () => AuthScreen, Provider, store);
Navigation.registerComponentWithRedux('RNCourse.FindPlaceScreen', () => FindPlaceScreen, Provider, store);
Navigation.registerComponentWithRedux('RNCourse.SharePlaceScreen', () => SharePlaceScreen, Provider, store);
Navigation.registerComponentWithRedux('RNCourse.PlaceDetailScreen', () => PlaceDetailScreen, Provider, store);


Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: 'RNCourse.AuthScreen',
        }
      }],
      options: {
        topBar: {          
          hideOnScroll: true,
          subtitle: {
            text: 'SIGN IN',
            fontSize: 14,
            color: 'red',
            fontFamily: 'Helvetica',
            alignment: 'center'
          },
        }
      }
    }
  }
})

/* import { Platform, StyleSheet, Text, View } from 'react-native';
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
    this.props.addPlace(placeName);
  }

  placeSelectedHandler = (key) => {
    this.props.selectPlace(key);
  }

  placeDeletedHandler = () => {
    this.props.deletePlace();
  }

  modalClosedHandler = () => {
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

export default connect(mapStateToProps, mapDispatchToProps)(App) */