import {
	Button,
	Flex,
	Heading,
	Stack,
	Text,
	Box,
	Image,
	SimpleGrid,
	Stat,
	StatLabel,
	StatNumber,
} from "@chakra-ui/react";
// import Image from "next/image";
// import AboutPic from "../assets/Adaconda.png";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { IoWalletSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { GiPresent } from "react-icons/gi";
import { HiSpeakerphone } from "react-icons/hi";
import { CgEditBlackPoint } from "react-icons/cg";

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

	function StatsCard({ title, stat, icon }) {
		return (
			<Stat
				px={{ base: 2, md: 4 }}
				py={"5"}
				shadow={"xl"}
				border={"1px solid"}
				borderColor={"gray.800"}
				rounded={"lg"}
			>
				<Flex
					justifyContent={"space-evenly"}
					flexWrap="wrap"
					textAlign="center"
				>
					<Box pl={{ base: 2, md: 4 }}>
						<Box w="100px">
							<StatLabel fontWeight={"medium"} isTruncated>
								{title}
							</StatLabel>
						</Box>
						<StatNumber
							fontSize={"2xl"}
							fontWeight={"medium"}
							// textAlign={{ base: "left", md: "center" }}
						>
							{stat}
						</StatNumber>
					</Box>
					<Box my={"auto"} color={"gray.800"} alignContent={"center"}>
						{icon}
					</Box>
				</Flex>
			</Stat>
		);
	}

	return (
		<Box>
			<Stack
				id="about"
				align="center"
				minH={"80vh"}
				direction={{ base: "column", md: "row" }}
				bg="#f6f9fc"
				pos="relative"
			>
				<Flex
					// p={8}
					px={8}
					pt={8}
					pb={0}
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
						{/* <Stack direction={{ base: "column", md: "row" }} spacing={4}>
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
						</Stack> */}
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
			<Box
				align="center"
				h="full"
				// minH={"20vh"}
				direction={{ base: "column", md: "row" }}
				bg="#f6f9fc"
				pos="relative"
				px={{ base: "10", md: "20" }}
				pb="10"
			>
				<SimpleGrid columns={{ base: 1, md: 5 }} spacing={{ base: 5, lg: 8 }}>
					<StatsCard
						title={"Max Wallet"}
						stat={"5%"}
						icon={<IoWalletSharp size={"3em"} />}
					/>
					<StatsCard
						title={"Max Transaction"}
						stat={"3%"}
						icon={<GrTransaction size={"3em"} />}
					/>
					<StatsCard
						title={"Rewards"}
						stat={"6%"}
						icon={<GiPresent size={"3em"} />}
					/>
					<StatsCard
						title={"Marketing"}
						stat={"4%"}
						icon={<HiSpeakerphone size={"3em"} />}
					/>
					<StatsCard
						title={"Liquidity Provider"}
						stat={"3%"}
						icon={<CgEditBlackPoint size={"3em"} />}
					/>
				</SimpleGrid>
			</Box>
		</Box>
	);
}
