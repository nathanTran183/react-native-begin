import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import PlaceList from '../../components/PlaceList/PlaceList';
import { connect } from 'react-redux';
// import {PlacesActions} from '../../store/actions/index';

class FindPlaceScreen extends Component {

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

  render() {
    // console.log(this.props);
        
    return (
      <View>
        <PlaceList places={this.props.places} onItemSelected={this.selectPlaceHandler} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlaceScreen);