import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
	ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
	removeFromBasket,
	selectBasketItems,
	selectBasketTotal,
} from "../features/basketSlice";
import { selectRestaurant } from "../features/restaurantSlice";
import { urlFor } from "../sanity";

const BasketScreen = ({ navigation }) => {
	const restaurant = useSelector(selectRestaurant);
	const items = useSelector(selectBasketItems);
	const totalPrice = useSelector(selectBasketTotal);
	const dispatch = useDispatch();

	const [groupedBasketItems, setGroupedBasketItems] = useState([]);

	useEffect(() => {
		const groupedItems = items.reduce((result, item) => {
			(result[item._id] = result[item._id] || []).push(item);
			return result;
		}, {});

		setGroupedBasketItems(groupedItems);
	}, [items]);

	return (
		<SafeAreaView className="bg-white flex-1 pt-8">
			<View className="flex-row items-center p-3 relative border-b border-b-[#00ccbb]">
				<View className="flex-1">
					<Text className="text-xl font-[inter-bold] text-center">Basket</Text>
					<Text className="text-sm font-[inter-medium] text-gray-500 text-center">
						{restaurant.title}
					</Text>
				</View>
				<TouchableOpacity
					onPress={navigation.goBack}
					className="bg-gray-100 rounded-full absolute top-3 right-5">
					<Ionicons name="close-circle" color="#00ccbb" size={36} />
				</TouchableOpacity>
			</View>
			<View className="bg-gray-100 pt-4 flex-1">
				<View className="flex-row items-center space-x-4 bg-white p-3">
					<Image
						source={{ uri: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" }}
						className="w-10 h-10 rounded-full"
					/>
					<Text className="text-sm font-[inter-regular] flex-1">
						Deliver in 50 - 75 mins
					</Text>
					<TouchableOpacity>
						<Text className="text-sm font-[inter-medium] text-[#00ccbb]">
							Change
						</Text>
					</TouchableOpacity>
				</View>
				<ScrollView className="divide-y divide-gray-100 mt-4">
					{Object.entries(groupedBasketItems).map(([key, item]) => (
						<View
							key={key}
							className="flex-row items-center p-3 space-x-2 bg-white">
							<Text className="text-sm font-[inter-medium] text-teal-400">
								{item.length}X
							</Text>
							<Image
								source={{ uri: urlFor(item[0].image).url() }}
								className="w-16 h-16 rounded-full bg-gray-200"
							/>
							<Text className="font-[inter-regular] flex-1">
								{item[0].name}
							</Text>
							<Text className="text-sm font-[inter-regular]">
								${item[0].price}
							</Text>
							<TouchableOpacity onPress={() => dispatch(removeFromBasket(key))}>
								<Text className="text-sm font-[inter-regular] text-[#00ccbb]">
									Remove
								</Text>
							</TouchableOpacity>
						</View>
					))}
				</ScrollView>
				<View className="p-4 bg-white space-y-6 border-t border-t-gray-200">
					<View className="flex-row items-center justify-between">
						<Text className="text-gray-400 font-[inter-medium]">Subtotal:</Text>
						<Text className="text-gray-400 font-[inter-medium]">
							${totalPrice}
						</Text>
					</View>
					<View className="flex-row items-center justify-between">
						<Text className="text-gray-400 font-[inter-medium]">
							Delivery Fee:
						</Text>
						<Text className="text-gray-400 font-[inter-medium]">$16.00</Text>
					</View>
					<View className="flex-row items-center justify-between">
						<Text className=" font-[inter-semibold]">Order Total:</Text>
						<Text className=" font-[inter-medium]">${totalPrice + 16}</Text>
					</View>
					<TouchableOpacity
						onPress={() => navigation.replace("Preparing")}
						className="rounded-lg bg-[#00ccbb] p-4">
						<Text className="text-center text-lg text-white font-[inter-semibold]">
							Place Order
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default BasketScreen;
