import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import client, { urlFor } from "../sanity";

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		client
			.fetch(
				`
		*[_type == "category"]{
			_id,
			title,
			image
		}
		`
			)
			.then((data) => {
				setCategories(data);
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
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}>
			{categories.map((cat) => (
				<CategoryCard
					key={cat._id}
					imgUrl={urlFor(cat.image).url()}
					title={cat.title}
				/>
			))}
		</ScrollView>
	);
};

export default Categories;
