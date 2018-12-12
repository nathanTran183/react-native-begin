import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceInput = (props) => {

  return (
    <FlatList
      keyExtractor={(item, index) => (item.id)}
      style={styles.listItemContainer}
      data={props.places}
      renderItem={({ item }) => (
        <ListItem
          onItemPressed={() => props.onItemSelected(item.id)}
          placeName={item.name}
          placeImage={item.img}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    width: '100%'
  }
})

export default PlaceInput;
