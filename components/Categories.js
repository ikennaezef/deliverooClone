import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}>
			<CategoryCard
				imgUrl="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
				title="Sushi"
			/>
			<CategoryCard imgUrl="https://links.papareact.com/gn7" title="Sushi" />
			<CategoryCard
				imgUrl="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
				title="Sushi"
			/>
			<CategoryCard imgUrl="https://links.papareact.com/gn7" title="Sushi" />
			<CategoryCard
				imgUrl="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
				title="Sushi"
			/>
			<CategoryCard imgUrl="https://links.papareact.com/gn7" title="Sushi" />
			<CategoryCard
				imgUrl="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
				title="Sushi"
			/>
			<CategoryCard imgUrl="https://links.papareact.com/gn7" title="Sushi" />
		</ScrollView>
	);
};

export default Categories;
