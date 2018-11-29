import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { connect } from 'react-redux';
import { PlacesActions } from '../../store/actions/index';

class SharePlaceScreen extends Component {
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