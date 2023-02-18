import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({ onPress, colors, buttonText }) => {
	return (
		<LinearGradient
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			colors={colors}
			style={styles.btn}>
			<Pressable onPress={onPress} style={{ width: "100%" }}>
				<Text style={styles.buttonText}>{buttonText}</Text>
			</Pressable>
		</LinearGradient>
	);
};

export default GradientButton;

const styles = StyleSheet.create({
	btn: {
		height: 50,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 18,
		fontFamily: "open-sans-bold",
		textAlign: "center",
	},
});
