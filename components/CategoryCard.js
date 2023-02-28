import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
	return (
		<TouchableOpacity className="relative mr-2" activeOpacity={0.6}>
			<Image source={{ uri: imgUrl }} className="w-20 h-20 rounded-md" />
			<Text className="absolute bottom-1 left-1 z-10 text-white text-sm font-[inter-bold]">
				{title}
			</Text>
			<LinearGradient
				colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
				className="absolute bottom-0 w-full h-full rounded-md"
			/>
		</TouchableOpacity>
	);
};

export default CategoryCard;
