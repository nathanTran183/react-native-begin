import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Navigation } from 'react-native-navigation';
import PlaceList from '../../components/PlaceList/PlaceList';
import { connect } from 'react-redux';
// import {PlacesActions} from '../../store/actions/index';

class FindPlaceScreen extends Component {

  state = {
    placesLoaded: false,
    fadeAnim: new Animated.Value(1)
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    Navigation.events().registerBottomTabSelectedListener(({ selectedTabIndex, unselectedTabIndex }) => {
      if (selectedTabIndex === unselectedTabIndex)
        Navigation.popToRoot(this.props.componentId);
    });
  }

  navigationButtonPressed({ buttonId }) {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true
        }
      }
    });
  }

  selectPlaceHandler = key => {
    const selectedPlace = this.props.places.find(x => x.key === key);
    Navigation.push(this.props.componentId, {
      component: {
        name: 'RNCourse.PlaceDetailScreen',
        passProps: {
          selectedPlace: selectedPlace
        },
        options: {
          topBar: {
            title: {
              text: 'Pushed screen'
            }
          }
        }
      }
    });
  }

  placesSearchHandler = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  render() {
    // console.log(this.props);
    let content = (
      <Animated.View style={{
        opacity: this.state.fadeAnim,
        transform: [
          {
            scale: this.state.fadeAnim.interpolate({
              inputRange: [0,1],
              outputRange: [12, 1]
            })
          }
        ]
      }}>
      <TouchableOpacity onPress={this.placesSearchHandler}>
        <View style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Find Place</Text>
        </View>
      </TouchableOpacity>
      </Animated.View>
    );
    if (this.state.placesLoaded) {
      content = (
        <PlaceList places={this.props.places} onItemSelected={this.selectPlaceHandler} />
      );
    }
    return <View style={this.state.placesLoaded ? null : styles.buttonContainer}>{content}</View>

  }
}

const styles = StyleSheet.create({
  searchButton: {
    borderColor: '#6d6acd',
    borderWidth: 3,
    borderRadius: 50,
    padding: 20
  },
  searchButtonText: {
    color: '#6d6acd',
    fontWeight: 'bold',
    fontSize: 26
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlaceScreen);