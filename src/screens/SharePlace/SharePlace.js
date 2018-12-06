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
    placeName: ""
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
  };

  addPlaceHandler = () => {
    if (this.state.placeName.trim() !== '') {
      this.props.addPlace(this.state.placeName);
      this.setState({placeName: ''})
    }
  };

  placeNameChangedHandler = value => {
    this.setState({ placeName: value })
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share Us Your Places</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput onChangeText={this.placeNameChangedHandler} placeName={this.state.placeName} placeholder="Place Name" />
          <View style={styles.button}>
            <Button title="Share This Place" onPress={this.addPlaceHandler} />
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
    addPlace: (placeName) => dispatch(PlacesActions.addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);