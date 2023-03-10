import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	StatusBar,
	Image,
	TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
	const restaurant = useSelector(selectRestaurant);

	return (
		<View className="bg-[#00ccbb] flex-1">
			<SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
				<View className="flex-row items-center justify-between p-4">
					<Ionicons name="close-outline" color="#fff" size={36} />
					<Text className="text-white text-lg font-[inter-regular]">
						Order Help
					</Text>
				</View>
				<View className="bg-white p-4 mx-5 my-2 z-50 shadow-md rounded-md">
					<View className="flex-row justify-between">
						<View>
							<Text className="text-lg text-gray-400 font-[inter-medium]">
								Estimated Arrival
							</Text>
							<Text className="text-3xl font-[inter-bold]">45-55 Minutes</Text>
						</View>
						<Image
							source={{ uri: "https://links.papareact.com/fls" }}
							className="w-20 h-20"
						/>
					</View>
					<Progress.Bar color="#00ccbb" size={30} indeterminate />
					<Text className="text-gray-400 font-[inter-medium] mt-4">
						Your order at {restaurant.title} is being prepared
					</Text>
				</View>
			</SafeAreaView>
			<MapView
				initialRegion={{
					latitude: restaurant?.lat,
					longitude: restaurant?.long,
					latitudeDelta: 0.005,
					longitudeDelta: 0.005,
				}}
				className="flex-1"
				mapType="mutedStandard">
				<Marker
					coordinate={{
						latitude: restaurant?.lat,
						longitude: restaurant?.long,
					}}
					title={restaurant?.title}
					description={restaurant?.short_description}
				/>
			</MapView>
			<SafeAreaView className="flex-row items-center space-x-4 bg-white p-6">
				<Image
					source={{ uri: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" }}
					className="w-10 h-10 rounded-full bg-gray-200"
				/>
				<View className="flex-1">
					<Text className="text-lg font-[inter-medium]">Joey Tribbiani</Text>
					<Text className="text-sm text-gray-400 font-[inter-medium]">
						Your Rider
					</Text>
				</View>
				<TouchableOpacity>
					<Text className="text-lg text-[#00ccbb] font-[inter-bold]">Call</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</View>
	);
};

export default DeliveryScreen;
