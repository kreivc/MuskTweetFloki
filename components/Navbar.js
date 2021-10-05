import React, { useEffect, useState } from "react";
import {
	chakra,
	HStack,
	Flex,
	IconButton,
	useDisclosure,
	CloseButton,
	VStack,
	Button,
	Text,
	Image,
	Box,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

export default function Header() {
	const mobileNav = useDisclosure();
	const [scrollNav, setScrollNav] = useState(false);
	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const MobileNavContent = (
		<VStack
			pos="fixed"
			top={0}
			left={0}
			right={0}
			display={mobileNav.isOpen ? "flex" : "none"}
			flexDirection="column"
			p={2}
			pb={4}
			m={2}
			bg={"white"}
			spacing={3}
			rounded="sm"
			// shadow="sm"
			zIndex={99}
		>
			<CloseButton
				aria-label="Close menu"
				justifySelf="self-start"
				onClick={mobileNav.onClose}
			/>
			<Link to="about" smooth={true} duration={500} spy={true} exact="true">
				<Button w="full" variant="ghost" onClick={mobileNav.onClose}>
					About
				</Button>
			</Link>
			<Link
				to="tokenomics"
				smooth={true}
				duration={500}
				spy={true}
				exact="true"
			>
				<Button w="full" variant="ghost" onClick={mobileNav.onClose}>
					Tokenomics
				</Button>
			</Link>
			<Link to="timeline" smooth={true} duration={500} spy={true} exact="true">
				<Button w="full" variant="ghost" onClick={mobileNav.onClose}>
					Timeline
				</Button>
			</Link>
			<Link to="howtobuy" smooth={true} duration={500} spy={true} exact="true">
				<Button w="full" variant="ghost" onClick={mobileNav.onClose}>
					How to buy
				</Button>
			</Link>
			<Button
				as="a"
				href="https://pancakeswap.finance/"
				target="_blank"
				w="full"
				color="white"
				variant="ghost"
				bg={"#f56713"}
				onClick={mobileNav.onClose}
			>
				Buy Now
			</Button>
		</VStack>
	);

	return (
		<React.Fragment>
			<chakra.header
				shadow={scrollNav ? "md" : "none"}
				bg={scrollNav ? "white" : "transparent"}
				w="full"
				overflowY="hidden"
				pos="fixed"
				transition="0.5s all ease"
				zIndex="98"
			>
				<chakra.div h="4.5rem" mx="auto" maxW="1200px">
					<Flex
						w="full"
						h="full"
						px="6"
						alignItems="center"
						justifyContent="space-between"
					>
						<Flex align="flex-start">
							<Link to="/" smooth={true} duration={500} spy={true} exact="true">
								<HStack>
									{/* <Image
										src={scrollNav ? "/flet.png" : "/flet2.png"}
										alt={scrollNav ? "logoForada" : "logoForada2"}
										width="140"
										height="50"
										objectFit="cover"
									/> */}
									<Text
										fontSize="lg"
										fontWeight="bold"
										color={scrollNav ? "black" : "white"}
									>
										MuskTweetFloki
									</Text>
								</HStack>
							</Link>
						</Flex>
						<Flex>
							<HStack spacing="5" display={{ base: "none", md: "flex" }}>
								<Link
									to="about"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
								>
									<Button
										color={scrollNav ? "#f56713" : "white"}
										display="inline-flex"
										alignItems="center"
										fontSize="md"
										variant="ghost"
										_focus={{ boxShadow: "none" }}
										_hover={
											scrollNav ? { bg: "gray.100" } : { bg: "transparent" }
										}
									>
										About
									</Button>
								</Link>
								<Link
									to="tokenomics"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
								>
									<Button
										color={scrollNav ? "#f56713" : "white"}
										display="inline-flex"
										alignItems="center"
										fontSize="md"
										variant="ghost"
										_focus={{ boxShadow: "none" }}
										_hover={
											scrollNav ? { bg: "gray.100" } : { bg: "transparent" }
										}
									>
										Tokenomics
									</Button>
								</Link>
								<Link
									to="timeline"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
								>
									<Button
										color={scrollNav ? "#f56713" : "white"}
										display="inline-flex"
										alignItems="center"
										fontSize="md"
										variant="ghost"
										_focus={{ boxShadow: "none" }}
										_hover={
											scrollNav ? { bg: "gray.100" } : { bg: "transparent" }
										}
									>
										Timeline
									</Button>
								</Link>
								<Link
									to="howtobuy"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
								>
									<Button
										color={scrollNav ? "#f56713" : "white"}
										display="inline-flex"
										alignItems="center"
										fontSize="md"
										variant="ghost"
										_focus={{ boxShadow: "none" }}
										_hover={
											scrollNav ? { bg: "gray.100" } : { bg: "transparent" }
										}
									>
										How to buy
									</Button>
								</Link>
							</HStack>
						</Flex>
						<Flex justify="flex-end" align="center" color="gray.400">
							<HStack spacing="5" display={{ base: "none", md: "flex" }}>
								<Button
									as="a"
									href="https://pancakeswap.finance/"
									target="_blank"
									rounded="2xl"
									variant="solid"
									fontSize="xl"
									color={scrollNav ? "white" : "#f56713"}
									bg={scrollNav ? "#f56713" : "gray.100"}
									_hover={{
										bg: scrollNav ? "#f56713" : "gray.200",
									}}
									px="7"
									py="6"
								>
									Buy Now
								</Button>
							</HStack>
							<IconButton
								display={{ base: "flex", md: "none" }}
								aria-label="Open menu"
								fontSize="20px"
								color={scrollNav ? "black" : "white"}
								variant="ghost"
								icon={<AiOutlineMenu />}
								onClick={mobileNav.onOpen}
							/>
						</Flex>
					</Flex>
					{MobileNavContent}
				</chakra.div>
			</chakra.header>
		</React.Fragment>
	);
}
