import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
		"inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
		"inter-semibold": require("./assets/fonts/Inter-SemiBold.ttf"),
		"inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
		"inter-extrabold": require("./assets/fonts/Inter-ExtraBold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
