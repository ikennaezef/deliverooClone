import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CoinItem from "../components/CoinItem";
import colors from "../constants/colors";
import coins from "../data/cryptocurrencies.json";

const HomeScreen = () => {
	return (
		<SafeAreaView className="flex-1">
			<Text className="text-xl font-[inter-regular]">
				This is the Home Screen
			</Text>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.dark500,
		paddingHorizontal: 8,
		paddingTop: 36,
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#8142EF",
	},
});
