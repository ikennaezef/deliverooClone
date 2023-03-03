import React, { useEffect, useState } from "react";
import {
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	View,
	StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity";

const HomeScreen = () => {
	const [features, setFeatures] = useState([]);

	useEffect(() => {
		client
			.fetch(
				`
		*[_type == "featured"]{
			_id,
			name,
			shortDescription
		}
		`
			)
			.then((data) => {
				setFeatures(data);
			});
	}, []);

	return (
		<SafeAreaView className="flex-1">
			<View
				className="bg-white px-2"
				style={{ paddingTop: StatusBar.currentHeight }}>
				<View className=" flex-row items-center justify-between">
					<View className="flex-row items-center space-x-2">
						<Image
							source={{
								uri: "https://www.chefspencil.com/wp-content/uploads/Dim-Sum-960x960.jpeg",
							}}
							className="w-10 h-10 rounded-full"
						/>
						<View>
							<Text className="text-xs text-gray-400 font-[inter-regular]">
								Deliver Now
							</Text>
							<Text className="text-lg font-[inter-bold]">
								Current Location
								<Ionicons name="chevron-down" size={20} color="#00ccbb" />
							</Text>
						</View>
					</View>
					<View>
						<Ionicons name="person-outline" size={24} color="#00ccbb" />
					</View>
				</View>
				<View className="flex-row items-center space-x-4 mt-4 pb-2">
					<View className="flex-row items-center space-x-2 p-2 flex-1 rounded-sm bg-gray-200">
						<Ionicons name="search-outline" size={20} color="#444" />
						<TextInput
							keyboardType="default"
							placeholder="Restaurants and Cuisines"
							className="font-[inter-regular] w-full"
						/>
					</View>
					<Ionicons name="options-sharp" size={28} color="#00ccbb" />
				</View>
			</View>
			<ScrollView className="bg-gray-100">
				<Categories />
				{features?.map((feature) => (
					<FeaturedRow
						key={feature._id}
						id={feature._id}
						title={feature.name}
						description={feature.shortDescription}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
