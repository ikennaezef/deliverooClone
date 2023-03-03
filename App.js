import "react-native-url-polyfill/auto";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
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
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Restaurant" component={RestaurantScreen} />
					<Stack.Screen
						name="Basket"
						component={BasketScreen}
						options={{ presentation: "modal", animation: "slide_from_bottom" }}
					/>
					<Stack.Screen
						name="Preparing"
						component={PreparingOrderScreen}
						options={{ animation: "slide_from_bottom" }}
					/>
					<Stack.Screen name="Delivery" component={DeliveryScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
