import { useFonts } from "expo-font";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "./constants/colors";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import CoinItem from "./components/CoinItem";
import coins from "./data/cryptocurrencies.json";

export default function App() {
	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={coins}
				renderItem={({ item }) => <CoinItem coin={item} />}
			/>

			<StatusBar style="light" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.dark500,
		paddingHorizontal: 8,
		paddingTop: 36,
	},
	scrollview: {
		backgroundColor: colors.dark500,
		marginHorizontal: 12,
	},
});
