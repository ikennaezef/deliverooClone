import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import colors from "./constants/colors";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CoinDetailsScreen from "./screens/CoinDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"inter-light": require("./assets/fonts/Inter-Light.ttf"),
		"inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
		"inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
		"inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
		"inter-extrabold": require("./assets/fonts/Inter-ExtraBold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="CoinDetails" component={CoinDetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.dark500,
		paddingHorizontal: 8,
		paddingTop: 36,
	},
});
