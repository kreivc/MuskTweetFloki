import React from "react";
import { Box, Flex, Stack, Text, Heading } from "@chakra-ui/react";
import TweetEmbed from "react-tweet-embed";

export default function Proof() {
	return (
		<>
			<Box overflow="hidden">
				<Stack
					id="about"
					align="center"
					minH={"85vh"}
					direction={{ base: "column", md: "row-reverse" }}
					bg="#f6f9fc"
					pos="relative"
					pb="4"
				>
					<Flex
						px={8}
						pt={8}
						pb={0}
						flex={1}
						align={"center"}
						justify={"center"}
					>
						<Stack spacing={5} w={"full"} maxW={"lg"}>
							<Text color="#f56713" fontWeight="semibold" fontSize="xl">
								Even Father Tweet Us
							</Text>
							<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
								<Text color="#2b3954">MuskTweetFloki has arrived</Text>
							</Heading>
							<Text fontSize={{ base: "md", lg: "lg" }} color={"#516172"}>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
								reprehenderit at magnam, quas perferendis voluptas dignissimos
								ea distinctio adipisci, qui quibusdam atque ipsum recusandae
								doloremque delectus animi mollitia necessitatibus illo?
							</Text>
						</Stack>
					</Flex>
					<Flex flex={1}>
						<Box
							w={{ base: "300px", lg: "500px" }}
							h={{ base: "400px", lg: "500px" }}
							d="flex"
							alignItems="center"
							justifyContent="center"
							flexGrow="1"
						>
							<Box
								w="full"
								bg="#f6f9fc"
								px={{ base: "0", md: "20" }}
								py={{ base: "0", md: "20" }}
							>
								<TweetEmbed id="1437179881260032016" />
							</Box>
						</Box>
					</Flex>
				</Stack>
			</Box>
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
				height="60px"
				width="100%"
			>
				<path
					d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
					className="shape-fill"
					fill="#f6f9fc"
					fillOpacity="1"
					id="howtobuy"
				></path>
			</svg>
		</>
	);
}
