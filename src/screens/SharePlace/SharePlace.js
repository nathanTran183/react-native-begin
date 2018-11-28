import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

class SharePlaceScreen extends Component {
  changePage = () => {
    Navigation.mergeOptions('HomePageBottomTabs', {
      bottomTabs: {
        currentTabIndex: 1,
        visible: false
      }
    })
  }

  render() {
    return (
      <View>
        <Text>On SharePlaceScreen</Text>
        <Button onPress={this.changePage} title="Change Page" />
      </View>
    )
  }
}

export default SharePlaceScreen;