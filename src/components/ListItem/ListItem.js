import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem} >
                <Image resizeMode="stretch" style={styles.imageItem} source={props.placeImage} />
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: "100%",        
        padding: 10,
        marginTop: 5,
        backgroundColor: "#eee",
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageItem: {
        marginRight: 8,
        height: 30,
        width: 30
    }
})

export default ListItem;