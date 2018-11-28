import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

class PlaceInput extends Component {
	state = {
		placeName: "",
		enabled: false
	}

	inputChangedHandler = value => {
		let enabled = true;
		if (value === "")
			enabled = false;
		this.setState({ placeName: value, enabled: enabled })
	};

	placeAddedHandler = () => {
		this.props.onAddItem(this.state.placeName);
		this.setState({ placeName: "", enabled: false })
	}

	render() {
		return (
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.placeInput}
					value={this.state.placeName}
					placeholder="Place Name"
					onChangeText={this.inputChangedHandler}
				/>
				<Button
					onPress={this.placeAddedHandler}
					title="Add"
					disabled={!this.state.enabled}
					style={styles.placeButton}
					color="#841584"
					accessibilityLabel="Learn more about this purple button" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	inputContainer: {
		width: "100%",
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	placeInput: {
		width: "70%",
		borderColor: "red"
	},
	placeButton: {
		width: "30%",
	},
})

export default PlaceInput;