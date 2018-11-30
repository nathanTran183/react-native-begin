import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = props => (
	<DefaultInput
		placeholder={props.placeholder}
		value={props.placeName}
		onChangeText={props.onChangeText} />
)

export default placeInput;