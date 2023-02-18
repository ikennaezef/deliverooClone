import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

const CoinItem = ({ coin }) => {
	const formatMCap = (mcap) => {
		if (mcap > 1000000000000) {
			return `${(mcap / 1000000000000).toFixed(3)} T`;
		} else if (mcap > 1000000000) {
			return `${(mcap / 1000000000).toFixed(3)} B`;
		} else if (mcap > 1000000) {
			return `${(mcap / 1000000).toFixed(3)} M`;
		}
	};

	return (
		<View style={styles.coinItem}>
			<View style={styles.coinItemLeft}>
				<Image
					source={{
						uri: coin.image,
					}}
					style={styles.coinImage}
				/>
				<View>
					<Text style={styles.coinName}>{coin.name}</Text>
					<View style={styles.rankingDetails}>
						<View style={styles.coinRankingContainer}>
							<Text style={styles.coinRanking}>{coin.market_cap_rank}</Text>
						</View>
						<Text style={styles.coinSymbol}>{coin.symbol.toUpperCase()}</Text>
						<View style={styles.percentContainer}>
							<Ionicons
								name={
									coin.price_change_percentage_24h < 0
										? "caret-down"
										: "caret-up"
								}
								size={12}
								color={
									coin.price_change_percentage_24h < 0
										? colors.red400
										: colors.green400
								}
							/>
							<Text style={styles.percent}>
								{coin.price_change_percentage_24h.toFixed(2)} %
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.coinNumbers}>
				<Text style={styles.price}>{coin.current_price}</Text>
				<Text style={styles.marketCap}>MCap {formatMCap(coin.market_cap)}</Text>
			</View>
		</View>
	);
};

export default CoinItem;

const styles = StyleSheet.create({
	coinItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		padding: 12,
		borderBottomWidth: 1,
		borderBottomColor: colors.dark400,
	},
	coinItemLeft: {
		flexDirection: "row",
		alignItems: "center",
	},
	coinImage: {
		height: 40,
		width: 40,
		marginRight: 12,
	},
	coinName: {
		color: "white",
		fontWeight: "bold",
		fontSize: 18,
		marginBottom: 4,
	},
	rankingDetails: {
		flexDirection: "row",
		alignItems: "center",
	},
	coinRankingContainer: {
		backgroundColor: colors.dark300,
		width: 24,
		height: 20,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 4,
		marginRight: 6,
	},
	coinRanking: {
		color: "white",
		fontWeight: "bold",
	},
	coinSymbol: {
		color: colors.dark100,
		fontSize: 16,
		marginRight: 6,
	},
	percentContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	percent: {
		color: colors.dark100,
	},
	coinNumbers: {},
	price: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	marketCap: {
		color: "gray",
		fontSize: 16,
	},
});
