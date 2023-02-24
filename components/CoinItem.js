import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const CoinItem = ({ coin }) => {
	const navigation = useNavigation();

	const formatMCap = (mcap) => {
		if (mcap > 1_000_000_000_000) {
			return `${(mcap / 1_000_000_000_000).toFixed(3)} T`;
		} else if (mcap > 1_000_000_000) {
			return `${(mcap / 1_000_000_000).toFixed(3)} B`;
		} else if (mcap > 1_000_000) {
			return `${(mcap / 1_000_000).toFixed(3)} M`;
		}
	};

	const percentageColor =
		coin.price_change_percentage_24h < 0 ? colors.red400 : colors.green400;

	return (
		<Pressable onPress={() => navigation.navigate("CoinDetails")}>
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
									color={percentageColor}
								/>
								<Text style={[styles.percent, { color: percentageColor }]}>
									{coin.price_change_percentage_24h.toFixed(2)} %
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.coinNumbers}>
					<Text style={styles.price}>${coin.current_price}</Text>
					<Text style={styles.marketCap}>
						MCap {formatMCap(coin.market_cap)}
					</Text>
				</View>
			</View>
		</Pressable>
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
		height: 36,
		width: 36,
		marginRight: 12,
	},
	coinName: {
		color: "white",
		fontFamily: "inter-bold",
		fontSize: 16,
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
		fontFamily: "inter-medium",
		fontSize: 14,
	},
	coinSymbol: {
		color: colors.dark100,
		fontFamily: "inter-regular",
		fontSize: 14,
		marginRight: 6,
	},
	percentContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	percent: {
		color: colors.dark100,
		fontFamily: "inter-regular",
		fontSize: 12,
	},
	coinNumbers: {
		alignItems: "flex-end",
	},
	price: {
		color: "white",
		fontSize: 16,
		fontFamily: "inter-bold",
	},
	marketCap: {
		color: "gray",
		fontSize: 12,
		fontFamily: "inter-medium",
	},
});
