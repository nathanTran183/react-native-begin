import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Platform } from 'react-native';
// import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { toHome, toSignIn } from '../../navigations/navigation';

class SideDrawer extends Component {
  onSignout = () => {
    toSignIn();
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <TouchableOpacity onPress={this.onSignout}>
          <View style={styles.drawerItem}>
            <Icon name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'} size={20} color="#aaa" style={{ margin: 5 }} />
            <Text>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "white",
    flex: 1
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
  }
});

export default SideDrawer;