import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const CoinDetailHeader = ({ image, name, symbol, rank }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.headerContainer}>
			<Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
				<Ionicons name="chevron-back" color="white" size={18} />
			</Pressable>
			<View style={styles.tickerContainer}>
				<Image source={{ uri: image }} style={styles.image} />
				<Text style={styles.coinSymbol}>{symbol.toUpperCase()}</Text>
				<View style={styles.rankContainer}>
					<Text style={styles.rankText}>#{rank}</Text>
				</View>
			</View>
			<EvilIcons name="user" size={32} color="white" />
		</View>
	);
};

export default CoinDetailHeader;

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 6,
	},
	backButton: {
		padding: 6,
	},
	tickerContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	image: {
		width: 24,
		height: 24,
	},
	coinSymbol: {
		color: "white",
		fontFamily: "inter-bold",
		fontSize: 14,
		marginHorizontal: 6,
	},
	rankContainer: {
		padding: 4,
		backgroundColor: colors.dark300,
		borderRadius: 4,
		width: 32,
	},
	rankText: {
		color: "#fff",
		fontFamily: "inter-medium",
		textAlign: "center",
	},
});
