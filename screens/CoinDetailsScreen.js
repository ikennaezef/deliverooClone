import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import coin from "../data/crypto.json";
import colors from "../constants/colors";
import CoinDetailHeader from "../components/CoinDetailHeader";

import {
	VictoryBar,
	VictoryChart,
	VictoryGroup,
	VictoryLine,
	VictoryTheme,
} from "victory-native";

const data = [
	{ x: 1453075200, y: 1.47 },
	{ x: 1453161600, y: 1.37 },
	{ x: 1453248000, y: 1.53 },
	{ x: 1453334400, y: 1.54 },
	{ x: 1453420800, y: 1.52 },
	{ x: 1453507200, y: 2.03 },
	{ x: 1453593600, y: 2.1 },
	{ x: 1453680000, y: 2.5 },
	{ x: 1453766400, y: 2.3 },
	{ x: 1453852800, y: 2.42 },
	{ x: 1453939200, y: 2.55 },
	{ x: 1454025600, y: 2.41 },
	{ x: 1454112000, y: 2.43 },
	{ x: 1454198400, y: 2.2 },
];

const windowWidth = Dimensions.get("window").width;

const CoinDetailsScreen = () => {
	const percentageColor =
		coin.market_data.price_change_percentage_24h < 0
			? colors.red400
			: colors.green500;
	return (
		<View style={styles.container}>
			<CoinDetailHeader
				image={coin.image.small}
				name={coin.name}
				rank={coin.market_data.market_cap_rank}
				symbol={coin.symbol}
			/>
			<Text style={styles.coinName}>{coin.name}</Text>
			<View style={styles.coinPricesContainer}>
				<Text style={styles.price}>${coin.market_data.current_price.usd}</Text>
				<View
					style={[
						styles.percentageBadge,
						{ backgroundColor: percentageColor },
					]}>
					<Ionicons name="caret-down" color={"#fff"} />
					<Text style={styles.percentage}>
						{coin.market_data.price_change_percentage_24h.toFixed(3)}
					</Text>
				</View>
			</View>
			<View style={styles.chart}>
				<VictoryGroup
					padding={24}
					width={windowWidth}
					height={250}
					theme={{
						...VictoryTheme.material,
						axis: {
							...VictoryTheme.material.axis,
							style: {
								...VictoryTheme.material.axis.style,
								grid: {
									fill: "none",
									stroke: "#fff",
								},
							},
						},
					}}>
					<VictoryLine
						style={{
							data: { stroke: "#c43a31" },
							parent: { border: "1px solid #ccc" },
						}}
						data={coin.prices.map(([x, y]) => ({ x, y }))}
						interpolation="natural"
					/>
				</VictoryGroup>
			</View>
		</View>
	);
};

export default CoinDetailsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 8,
		paddingTop: 36,
		backgroundColor: colors.dark500,
	},
	coinName: {
		color: colors.dark100,
		fontFamily: "inter-regular",
		fontSize: 14,
		marginTop: 14,
	},
	coinPricesContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	price: {
		color: "white",
		fontSize: 28,
		fontFamily: "inter-bold",
		letterSpacing: 1,
	},
	percentageBadge: {
		flexDirection: "row",
		alignItems: "center",
		padding: 6,
		backgroundColor: colors.green500,
		color: "white",
		borderRadius: 6,
	},
	percentage: {
		color: "white",
		fontFamily: "inter-regular",
		marginLeft: 4,
	},
	chart: {
		marginTop: 16,
		borderWidth: 2,
		borderColor: "green",
		alignItems: "center",
	},
});
