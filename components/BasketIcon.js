import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
	const items = useSelector(selectBasketItems);
	const basketTotal = useSelector(selectBasketTotal);
	const navigation = useNavigation();

	if (items.length === 0) {
		return null;
	}

	return (
		<View className="absolute bottom-8 z-50 w-full ">
			<TouchableOpacity
				onPress={() => navigation.navigate("Basket")}
				className="flex-row items-center space-x-4 mx-4 p-4 bg-teal-400 rounded-md">
				<View className="py-2 px-3 bg-teal-600 rounded-sm">
					<Text className="text-sm text-white font-[inter-semibold]">
						{items.length}
					</Text>
				</View>
				<Text className="text-lg text-white text-center font-[inter-bold] flex-1">
					View Basket
				</Text>
				<Text className="text-white text-lg font-[inter-semibold]">
					${basketTotal}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default BasketIcon;
