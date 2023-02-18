import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const Slide = ({ item }) => {
	return (
		<View style={styles.container}>
			<Image source={item.image} style={styles.image} />
			<Text style={styles.title}>{item.title}</Text>
			<Text style={styles.subtitle}>{item.subtitle}</Text>
		</View>
	);
};

export default Slide;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: width,
	},
	image: {
		width: width * 0.85,
		height: "60%",
		resizeMode: "contain",
		borderWidth: 2,
	},
	title: {
		color: "#461D8D",
		fontFamily: "open-sans-bold",
		fontSize: 28,
		textAlign: "center",
	},
	subtitle: {
		color: "#373737",
		fontFamily: "open-sans-bold",
		fontSize: 18,
		width: "75%",
		textAlign: "center",
	},
});
