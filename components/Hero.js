import React from "react";
import {
	Container,
	SimpleGrid,
	Flex,
	Heading,
	Text,
	Stack,
	Icon,
	Image,
	Box,
	Button,
} from "@chakra-ui/react";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import Metamask from "./Metamask";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Hero() {
	return (
		<>
			<Box bg="#faae60" h="full" pos="relative">
				<Image
					display={{ base: "none", md: "inline" }}
					w="50"
					src="/bone1.png"
					alt="bone1"
					pos="absolute"
					top="20"
					left="5"
					data-aos="fade-right"
					// zIndex="1"
					// transform="rotate(50deg)"
				/>
				<Image
					display={{ base: "none", md: "inline" }}
					w="50"
					src="/bone2.png"
					alt="bone2"
					pos="absolute"
					bottom="10"
					right="20"
					data-aos="fade-left"
				/>
				<Container maxW={"5xl"} py={12} id="tokenomics">
					<SimpleGrid
						columns={{ base: 1, md: 2 }}
						spacing={10}
						d="flex"
						flexDir={{ base: "column-reverse", md: "row" }}
						alignItems="center"
						mt="10"
					>
						<Stack spacing={5} w={{ base: "100%", md: "50%" }}>
							<Heading color="white" fontSize="6xl" data-aos="fade-up">
								The Birth of $MuskTweetFloki
							</Heading>
							<Text
								color={"#693a32"}
								fontWeight="semibold"
								fontSize={"lg"}
								data-aos="fade-up"
								data-aos-delay="50"
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laboriosam aspernatur nihil quasi accusamus quo labore possimus
								ducimus repellat facilis rem. Ea ex provident, fugiat aliquid
								necessitatibus hic obcaecati amet maxime soluta, nisi aliquam
								qui assumenda. Voluptatibus quia exercitationem sunt iusto
								error, distinctio ad culpa cum earum dicta vero assumenda,
								reiciendis incidunt! Cumque sed minus beatae sapiente impedit
								blanditiis repellendus, rerum sequi eius, nemo et consequuntur
							</Text>
							<Button
								as="a"
								href="https://pancakeswap.finance/"
								target="_blank"
								color="#faae60"
								w={{ base: "ful", md: "250px" }}
								rounded="lg"
								fontSize="lg"
								py="6"
								// variant="outline"
								outlineColor="white"
								bg="white"
								_hover={{ bg: "transparent", color: "white" }}
								fontWeight="semibold"
								data-aos="fade-left"
								data-aos-delay="100"
							>
								Buy on Pancake Swap
							</Button>
							<Flex gridGap="6" data-aos="fade-up" data-aos-delay="150">
								<Button
									as="p"
									color="white"
									w="250px"
									rounded="lg"
									fontSize="lg"
									py="6"
									outlineColor="white"
									bg="transparent"
									_hover={{ bg: "transparent", color: "white" }}
									active={{ bg: "transparent", color: "white" }}
									fontWeight="semibold"
								>
									Not released yet
								</Button>
								<CopyToClipboard text="Not release yet">
									<Button
										disabled={true}
										target="_blank"
										color="#faae60"
										w="150px"
										rounded="lg"
										fontSize="lg"
										py="6"
										outlineColor="white"
										bg="white"
										_hover={{ bg: "transparent", color: "white" }}
										fontWeight="semibold"
									>
										Copy Address
									</Button>
								</CopyToClipboard>
							</Flex>
							<Flex
								flexDir="row"
								h="100px"
								gridGap="5"
								alignItems="center"
								data-aos="zoom-in"
							>
								<Box bg="white" h="100px" w="5px" />
								<Button
									bg="white"
									rounded="lg"
									h="70px"
									w="70px"
									d="flex"
									alignItems="center"
									justifyContent="center"
									as="a"
									href="https://t.me/"
									target="_blank"
									_hover={{
										bg: "transparent",
										outlineColor: "white",
									}}
								>
									<Icon as={FaTelegram} fontSize="35px" color="#0088cc" />
								</Button>
								<Button
									bg="white"
									rounded="lg"
									h="70px"
									w="70px"
									d="flex"
									alignItems="center"
									justifyContent="center"
									as="a"
									href="https://twitter.com/"
									target="_blank"
									_hover={{
										bg: "transparent",
										outlineColor: "white",
									}}
								>
									<Icon as={FaTwitter} fontSize="35px" color="#00ACEE" />
								</Button>
								<Metamask />
							</Flex>
						</Stack>
						<Flex w={{ base: "100%", md: "50%" }}>
							<Box
								rounded="full"
								// p={{ base: "10", md: "16" }}
								bg="white"
								textAlign="center"
								data-aos="zoom-in"
							>
								<Image src="/1.png" alt="flokiright" w="800px" />
							</Box>
						</Flex>
					</SimpleGrid>
				</Container>
			</Box>
			<Box>
				<svg
					width="1920"
					height="165"
					viewBox="0 0 1920 165"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1920 0H0V107C0 107 430 236 960 107C1490 -22 1920 107 1920 107V0Z"
						fill="#faae60"
					/>
				</svg>
			</Box>
		</>
	);
}
