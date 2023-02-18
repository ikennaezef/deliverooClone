import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import colors from "./constants/colors";
import OnboardingScreen from "./screens/OnboardingScreen";
import HomeScreen from "./screens/HomeScreen";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: "white" },
				}}>
				<Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
