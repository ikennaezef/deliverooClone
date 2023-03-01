import React, { useEffect, useRef } from "react";
import { View, Text, ActivityIndicator, Image, Animated } from "react-native";

const PreparingOrderScreen = () => {
	const translateY = useRef(new Animated.Value(0)).current;

	const animate = () => {
		Animated.timing(translateY, {
			toValue: 50,
			delay: 300,
			duration: 500,
			useNativeDriver: true,
		}).start();
		Animated.timing(translateY, {
			toValue: 0,
			duration: 1500,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		animate();
	}, [translateY]);

	return (
		<View className="flex-1 bg-[#00ccbb] items-center justify-center">
			<ActivityIndicator size={48} color="#333" />
			<Image
				source={require("../assets/delivery-man.gif")}
				className="w-36 h-36"
			/>
			<Animated.Text
				className="text-lg font-[inter-bold]"
				style={{ transform: [{ translateY }] }}>
				Preparing Your Order
			</Animated.Text>
			<Text className="text-sm font-[inter-medium]">Please Wait...</Text>
		</View>
	);
};

export default PreparingOrderScreen;
