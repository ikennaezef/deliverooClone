import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { urlFor } from "../sanity";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
	addToBasket,
	removeFromBasket,
	selectBasketItems,
	selectBasketItemsWithId,
} from "../features/basketSlice";

const DishItem = ({ dish }) => {
	const [isPressed, setIsPressed] = useState(false);
	const dispatch = useDispatch();
	const items = useSelector((state) =>
		selectBasketItemsWithId(state, dish._id)
	);

	const handleAddToBasket = () => {
		dispatch(addToBasket(dish));
	};

	const handleRemoveFromBasket = () => {
		if (items.length > 0) {
			dispatch(removeFromBasket(dish._id));
		}
	};

	return (
		<>
			<TouchableOpacity
				onPress={() => setIsPressed(!isPressed)}
				activeOpacity={0.7}
				className="bg-white p-4 border border-gray-200">
				<View className="flex-row">
					<View className="flex-1">
						<Text className="text-base font-[inter-semibold]">{dish.name}</Text>
						<Text className="text-sm font-[inter-regular] text-gray-400 mb-2">
							{dish.description}
						</Text>
						<Text className="text-sm font-[inter-regular]">${dish.price}</Text>
					</View>
					<View>
						<Image
							style={{
								borderWidth: 1,
								borderColor: "#f3f3f3",
							}}
							source={{ uri: urlFor(dish.image).url() }}
							className="w-20 h-20 bg-gray-100"
						/>
					</View>
				</View>

				{isPressed && (
					<View className="mt-4">
						<View className="flex-row items-center space-x-3">
							<TouchableOpacity onPress={handleRemoveFromBasket}>
								<Ionicons
									name="remove-circle"
									size={32}
									color={items.length > 0 ? "#00ccbb" : "#ccc"}
								/>
							</TouchableOpacity>
							<Text className="text-lg text-slate-600 font-[inter-medium]">
								{items.length}
							</Text>
							<TouchableOpacity onPress={handleAddToBasket}>
								<Ionicons name="add-circle" size={32} color="#00ccbb" />
							</TouchableOpacity>
						</View>
					</View>
				)}
			</TouchableOpacity>
		</>
	);
};

export default DishItem;
