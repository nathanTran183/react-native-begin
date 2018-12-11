import React, { Component } from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import { PlacesActions } from '../../store/actions/index';

class SharePlaceScreen extends Component {

  state = {
    placeName: "",
    location: {
      value: null,
      valid: false
    },
    image: {
      value: null,
      valid: false
    }
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    // popToRoot(this.props.componentId);
  }

  navigationButtonPressed({ buttonId }) {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true
        }
      }
    });
  };

  addPlaceHandler = () => {
    this.props.addPlace(this.state.placeName, this.state.location.value, this.state.image.value);
    this.setState({
      placeName: '',
      location: {
        value: null,
        valid: false
      },
      image: {
        value: null,
        valid: false
      }
    })
  };

  placeNameChangedHandler = value => {
    this.setState({ placeName: value })
  };

  locationPickedHandler = location => {
    this.setState({
      location: {
        value: location,
        valid: true
      }
    })
  }

  imagePickedHandler = image => {
    this.setState({
      image: {
        value: image,
        valid: true
      }
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share Us Your Places</HeadingText>
          </MainText>
          <PickImage onImagePicked={this.imagePickedHandler} />
          <PickLocation onLocationPicked={this.locationPickedHandler} />
          <PlaceInput onChangeText={this.placeNameChangedHandler} placeName={this.state.placeName} placeholder="Place Name" />
          <View style={styles.button}>
            <Button
              title="Share This Place"
              onPress={this.addPlaceHandler}
              disabled={this.state.placeName === "" || !this.state.location.valid || !this.state.image.valid} />
          </View >
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  }
})

const mapDispatchToProps = dispatch => {
  return {
    addPlace: (placeName, location, image) => dispatch(PlacesActions.addPlace(placeName, location, image))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);