// import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import colors from "./constants/colors";
import AppLoading from "expo-app-loading";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
		"inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
		"inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
		"inter-extrabold": require("./assets/fonts/Inter-ExtraBold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View className="flex-1 justify-center items-center">
			<Text className="text-green-400 text-4xl font-[inter-bold]">
				Hello world!!
			</Text>
		</View>
	);
}
