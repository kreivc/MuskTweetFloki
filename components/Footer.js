import React from "react";
import { Box, Flex, Button, Icon, Text } from "@chakra-ui/react";
import { FaTelegram, FaTwitter, FaPoo } from "react-icons/fa";
import { BiScan } from "react-icons/bi";
import Metamask from "./Metamask";

export default function Footer() {
	return (
		<Box bg="#faae60" px={{ base: "0", md: "20" }} py="5" overflow="hidden">
			<Flex flexDir={{ base: "column", md: "row" }}>
				<Flex flexDir="row" gridGap="5" alignItems="center">
					<Box bg="white" h="180px" w="5px" />
					<Flex flexDir="column" gridGap="4">
						<Flex gridGap="4">
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
						</Flex>
						<Flex gridGap="4">
							<Button
								bg="white"
								rounded="lg"
								h="70px"
								w="70px"
								d="flex"
								alignItems="center"
								justifyContent="center"
								as="a"
								href="https://poocoin.app/"
								target="_blank"
								_hover={{
									bg: "transparent",
									outlineColor: "white",
								}}
							>
								<Icon as={FaPoo} fontSize="35px" color="#835c3d" />
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
								href="https://bscscan.com/"
								target="_blank"
								_hover={{
									bg: "transparent",
									outlineColor: "white",
								}}
							>
								<Icon as={BiScan} fontSize="35px" color="#e8af0b" />
							</Button>
							<Metamask />
						</Flex>
					</Flex>
				</Flex>
				{/*  */}
				<Box
					d="flex"
					alignItems="center"
					p="8"
					color="white"
					fontWeight="semibold"
					fontSize="xl"
				>
					<Text>
						Copyright © 2021 MuskTweetFloki. All Rights Reserved - Privacy
						Policy - Terms & Conditions MuskTweetFloki is not an investment and
						created as a meme parody like doge. MuskTweetFloki makes no promises
						and is not responsible for any losses or errors use at your own
						risk. MuskTweetFloki is not affiliated with DogeCoin.
					</Text>
				</Box>
			</Flex>
		</Box>
	);
}
