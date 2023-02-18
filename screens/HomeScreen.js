import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Welcome Home</Text>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#D9D0E9",
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#8142EF",
	},
});
