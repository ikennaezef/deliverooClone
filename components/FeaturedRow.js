import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";
import client, { urlFor } from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
	const [restaurants, setRestaurants] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		client
			.fetch(
				`
		*[_type == "featured" && _id == $id ][0]{
			restaurants[]->{
        _id,
        name,
        rating,
        address,
        shortDescription,
        image,
        type->{
          title
        },
        dishes[]->{
          ...
        }
      },
		}
		`,
				{ id }
			)
			.then((data) => {
				setRestaurants(data?.restaurants);
				setLoading(false);
			})
			.catch((err) => {
				console.log("ERR ->>", err);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <ActivityIndicator color="#00ccbb" size={36} className="py-6" />;
	}

	return (
		<View className="px-2 mt-6">
			<View className="flex-row items-center justify-between px-2">
				<Text className="text-xl font-[inter-bold]">{title}</Text>
				<Ionicons name="arrow-forward" size={24} color="#00ccbb" />
			</View>
			<Text className="text-xs text-gray-500 font-[inter-regular] mb-4 px-2">
				{description}
			</Text>
			<ScrollView
				horizontal
				contentContainerStyle={{ paddingHorizontal: 10 }}
				showsHorizontalScrollIndicator={false}>
				{restaurants?.map((restaurant) => (
					<RestaurantCard
						key={restaurant._id}
						id={restaurant._id}
						imgUrl={urlFor(restaurant.image).url()}
						title={restaurant.name}
						rating={restaurant.rating}
						genre={restaurant.type.title}
						address={restaurant.address}
						short_description={restaurant.shortDescription}
						dishes={restaurant.dishes}
						long={restaurant.long}
						lat={restaurant.lat}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
