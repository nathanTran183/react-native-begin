import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { connect } from 'react-redux';
import { PlacesActions } from '../../store/actions/index';
import { Navigation } from 'react-native-navigation';

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    Navigation.events().registerBottomTabSelectedListener(({ selectedTabIndex, unselectedTabIndex }) => {
      if (selectedTabIndex === unselectedTabIndex === 0)
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

  addPlaceHandler = (placeName) => {
    this.props.addPlace(placeName);
  }

  render() {
    return (
      <View>
        <PlaceInput onAddItem={this.addPlaceHandler} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPlace: (placeName) => dispatch(PlacesActions.addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);