import {
	Button,
	Flex,
	Heading,
	Stack,
	Text,
	Box,
	Image,
} from "@chakra-ui/react";
// import Image from "next/image";
// import AboutPic from "../assets/Adaconda.png";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function SplitScreen() {
	const container = useRef();
	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../assets/flokiani.json"),
		});
	}, []);

	return (
		<Box>
			<Stack
				id="about"
				align="center"
				minH={"100vh"}
				direction={{ base: "column", md: "row" }}
				bg="#f6f9fc"
				pos="relative"
			>
				<Flex
					p={8}
					flex={1}
					align={"center"}
					justify={"center"}
					// data-aos="zoom-in-left"
				>
					<Stack spacing={5} w={"full"} maxW={"lg"}>
						<Text color="#f56713" fontWeight="semibold" fontSize="xl">
							MuskTweetFloki
						</Text>
						<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
							<Text color="#2b3954">A new DeFi experience</Text>
						</Heading>
						<Text fontSize={{ base: "md", lg: "lg" }} color={"#516172"}>
							MuskTweetFloki is a community based token, which means the
							development of the project is done by its community members. The
							tokenomics utility model is to be used for paying for goods and
							services. It is also intended to be used as a reward to the users
							of the platform.
						</Text>
						<Stack direction={{ base: "column", md: "row" }} spacing={4}>
							<Button
								as="a"
								rounded={"lg"}
								bg="#f56713"
								color={"white"}
								_hover={{
									bg: "#faae60",
								}}
								href="https://t.me/Adaconda"
								target="_blank"
							>
								Join Telegram
							</Button>
						</Stack>
					</Stack>
				</Flex>
				<Flex flex={1}>
					<Box
						w={{ base: "300px", lg: "500px" }}
						h={{ base: "300px", lg: "500px" }}
						d="flex"
						alignItems="center"
					>
						{/* <Box
							rounded="full"
							p={{ base: "10", md: "16" }}
							bg="white"
							textAlign="center"
						>
							<Image src="/floki.png" alt="flokiright" rounded="full" />
						</Box> */}
						{/* <Image alt={"Login Image"} objectFit={"cover"} src={AboutPic} /> */}
						<Box ref={container} w={{ base: "400px", md: "500px" }} />
					</Box>
				</Flex>
			</Stack>
		</Box>
	);
}
