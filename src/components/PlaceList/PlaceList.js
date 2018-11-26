import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceInput = (props) => {

    return (
        <FlatList
            style={styles.listItemContainer}
            data={props.places}
            renderItem={(data) => (
                <ListItem
                    key={data.item.key}
                    onItemPressed={() => props.onDeleteItem(data.item.key)}
                    placeName={data.item.name} 
                    placeImage={data.item.img}
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
