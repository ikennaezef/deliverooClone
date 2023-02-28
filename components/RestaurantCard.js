import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
	id,
	imgUrl,
	title,
	rating,
	genre,
	address,
	short_description,
	dishes,
	long,
	lat,
}) => {
	const navigation = useNavigation();

	const navigationHandler = () => {
		navigation.navigate("Restaurant", {
			id,
			imgUrl,
			title,
			rating,
			genre,
			address,
			short_description,
			dishes,
			long,
			lat,
		});
	};

	return (
		<TouchableOpacity
			onPress={navigationHandler}
			className="bg-white mr-3 shadow-sm shadow-gray-600"
			activeOpacity={0.7}>
			<Image
				source={{ uri: imgUrl }}
				className="h-36 w-64 rounded-sm border border-red-400"
			/>
			<View className="pt-2 px-2 pb-4">
				<Text className="text-lg font-[inter-semibold]">{title}</Text>
				<View className="flex-row items-center space-x-2 mb-1">
					<Ionicons
						name="star"
						size={14}
						color="gold"
						style={{ opacity: 0.5 }}
					/>
					<Text className="text-xs font-[inter-regular] text-gray-500">
						<Text>{rating}</Text> . {genre}
					</Text>
				</View>
				<View className="flex-row items-center space-x-1">
					<Ionicons name="location-outline" size={16} color="#ccc" />
					<Text className="text-gray-600 text-xs font-[inter-regular]">
						Nearby . {address}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default RestaurantCard;
