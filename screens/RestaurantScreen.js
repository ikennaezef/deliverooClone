import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import DishItem from "../components/DishItem";

const RestaurantScreen = ({ navigation, route }) => {
	const {
		imgUrl,
		title,
		rating,
		genre,
		address,
		short_description,
		dishes,
		long,
		lat,
	} = route.params;

	return (
		<ScrollView>
			<StatusBar style="inverted" />
			<View className="relative">
				<Image source={{ uri: imgUrl }} className="w-full h-56" />
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					activeOpacity={0.7}
					className="absolute top-12 left-4 bg-gray-200 rounded-full w-10 h-10 items-center justify-center">
					<Ionicons name="arrow-back" color="#00ccbb" size={28} />
				</TouchableOpacity>
			</View>
			<View className="bg-white">
				<View className="p-4">
					<Text className="text-2xl font-[inter-bold]">{title}</Text>
					<View className="flex-row space-x-4 my-2">
						<View className="flex-row items-center space-x-2">
							<Ionicons name="star" color="gold" size={16} />
							<Text className="text-xs text-gray-400 font-[inter-regular]">
								{rating} . {genre}
							</Text>
						</View>
						<View className="flex-row items-center space-x-1">
							<Ionicons name="location-outline" color="gray" size={14} />
							<Text className="text-xs text-gray-400 font-[inter-regular]">
								Nearby . {address}
							</Text>
						</View>
					</View>
					<Text className="text-sm text-gray-500 font-[inter-regular] mb-4">
						{short_description}
					</Text>
				</View>
				<View className="flex-1 flex-row items-center space-x-2 py-3 px-3 border-y border-y-gray-100">
					<Ionicons name="help-circle-outline" color="gray" size={20} />
					<Text className="text-sm font-[inter-medium] flex-1">
						Have a food allergy?
					</Text>
					<Ionicons name="chevron-forward" color="#00ccbb" size={20} />
				</View>
			</View>
			<View>
				<Text className="text-xl font-[inter-bold] p-4">Menu</Text>
				<View>
					{dishes.map((dish) => (
						<DishItem key={dish._id} dish={dish} />
					))}
				</View>
			</View>
		</ScrollView>
	);
};

export default RestaurantScreen;
