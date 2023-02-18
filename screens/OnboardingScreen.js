import {
	Dimensions,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useRef, useState } from "react";
import Slide from "../components/Slide";
import { slides } from "../data/slides";
import GradientButton from "../components/GradientButton";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const ref = useRef(null);

	const Footer = () => {
		return (
			<View style={styles.footer}>
				<View style={styles.indicatorContainer}>
					{slides.map((_, index) => (
						<View
							key={index}
							style={[
								styles.indicator,
								currentSlide === index && styles.activeIndicator,
							]}
						/>
					))}
				</View>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonsInner}>
						{currentSlide === slides.length - 1 ? (
							<GradientButton
								onPress={() => navigation.replace("HomeScreen")}
								buttonText="Get Started"
								colors={["#8142EF", "#B566F2"]}
							/>
						) : (
							<>
								<GradientButton
									onPress={nextSlide}
									buttonText="Continue"
									colors={["#8142EF", "#B566F2"]}
								/>
								<View style={{ height: 18 }} />
								<TouchableOpacity style={styles.skipBtn} onPress={skip}>
									<Text style={styles.skipButtonText}>Skip</Text>
								</TouchableOpacity>
							</>
						)}
					</View>
				</View>
			</View>
		);
	};

	const updateCurrentSlideIndex = (e) => {
		const contentOffsetX = e.nativeEvent.contentOffset.x;
		const currentIndex = Math.round(contentOffsetX / width);
		setCurrentSlide(currentIndex);
	};

	const nextSlide = () => {
		const nextSlideIndex = currentSlide + 1;
		if (nextSlideIndex !== slides.length) {
			const offset = nextSlideIndex * width;
			ref?.current?.scrollToOffset({ offset });
			setCurrentSlide(nextSlideIndex);
		}
	};
	const skip = () => {
		const lastSlideIndex = slides.length - 1;
		const offset = lastSlideIndex * width;
		ref?.current?.scrollToOffset({ offset });
		setCurrentSlide(lastSlideIndex);
	};

	return (
		<SafeAreaView style={styles.rootContainer}>
			<View style={styles.circle} />
			<FlatList
				ref={ref}
				onMomentumScrollEnd={updateCurrentSlideIndex}
				pagingEnabled
				data={slides}
				contentContainerStyle={{ height: height * 0.75 }}
				showsHorizontalScrollIndicator={false}
				horizontal
				renderItem={({ item }) => <Slide item={item} />}
				keyExtractor={(item) => item.id}
			/>
			<Footer />
		</SafeAreaView>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		paddingVertical: 30,
	},
	circle: {
		width: 500,
		height: 500,
		backgroundColor: "#d9d0e9c7",
		position: "absolute",
		bottom: -120,
		left: -350,
		borderRadius: 250,
	},
	footer: {
		height: height * 0.25,
		justifyContent: "space-between",
	},
	indicatorContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 20,
	},
	indicator: {
		height: 13,
		width: 13,
		backgroundColor: "#D9D9D9",
		marginHorizontal: 3,
		borderRadius: 8,
	},
	activeIndicator: {
		backgroundColor: "#8142EF",
	},
	buttonsContainer: {
		marginTop: 24,
		flex: 1,
	},
	buttonsInner: {
		paddingHorizontal: 12,
		justifyContent: "space-between",
	},
	skipBtn: {
		backgroundColor: "transparent",
	},
	skipButtonText: {
		color: "#461D8D",
		fontSize: 18,
		fontFamily: "open-sans-bold",
		textAlign: "center",
	},
});
