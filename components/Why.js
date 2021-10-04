import { Box, VStack, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Why() {
	const container = useRef();
	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../assets/bullishcat.json"),
		});
	}, []);

	return (
		<Box h="50vh" p={{ base: "10", md: "20" }}>
			<VStack px={{ base: "0", md: "44" }}>
				<Text color="#f56713" fontWeight="semibold" fontSize="lg">
					Why MuskTweetFloki
				</Text>
				<Text
					color="#2b3954"
					fontWeight="bold"
					fontSize={{ base: "2xl", md: "4xl" }}
				>
					Speed, security, scalability
				</Text>
				<Text color="#516172" fontWeight="semibold" fontSize="md" py="5">
					We have a full marketing and visibility campgain mapped out of which
					we will make investements pre launch and boost our efforts with the
					money that will be received in the marketing wallet for post launch
					investments.
				</Text>
				{/* <Box ref={container} w="300px"></Box> */}
			</VStack>
		</Box>
	);
}
