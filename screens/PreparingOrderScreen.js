import React, { useEffect, useRef } from "react";
import { View, Text, ActivityIndicator, Animated } from "react-native";

const PreparingOrderScreen = ({ navigation }) => {
	const translateY = useRef(new Animated.Value(0)).current;

	const animate = () => {
		Animated.loop(
			Animated.parallel([
				Animated.sequence([
					Animated.timing(translateY, {
						toValue: 50,
						duration: 1000,
						useNativeDriver: true,
					}),
					Animated.timing(translateY, {
						toValue: 0,
						duration: 1000,
						useNativeDriver: true,
					}),
				]),
			]),
			{ iterations: 4 }
		).start();
	};

	const animateScale = translateY.interpolate({
		inputRange: [0, 50],
		outputRange: [0.8, 1.5],
	});

	const smallTransform = translateY.interpolate({
		inputRange: [0, 50],
		outputRange: [50, 0],
	});
	const smallScale = translateY.interpolate({
		inputRange: [0, 50],
		outputRange: [1.5, 0.9],
	});

	useEffect(() => {
		animate();
	}, [translateY]);

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate("Delivery");
		}, 4000);
	}, []);

	return (
		<View className="flex-1 bg-[#00ccbb] items-center justify-center">
			<ActivityIndicator size={48} color="#fff" />

			<Animated.Text
				className="text-lg font-[inter-bold]"
				style={{ transform: [{ translateY }, { scale: animateScale }] }}>
				Preparing Your Order
			</Animated.Text>
			<Animated.Text
				style={{
					transform: [{ translateY: smallTransform }, { scale: smallScale }],
				}}
				className="text-sm font-[inter-medium] text-white">
				Please Wait...
			</Animated.Text>
		</View>
	);
};

export default PreparingOrderScreen;
