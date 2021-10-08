import React from "react";
import {
	Box,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	useDisclosure,
	Button,
	Collapse,
	VStack,
	Text,
	List,
	ListItem,
	ListIcon,
	Flex,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";

export default function Roadmap() {
	const phase1 = useDisclosure();
	const phase2 = useDisclosure();
	const phase3 = useDisclosure();
	const phase4 = useDisclosure();

	const phase1E = (
		<>
			<Text
				fontSize={"2xl"}
				fontWeight={"bold"}
				mb="2"
				color="#f56713"
				letterSpacing={"wide"}
			>
				Phase 1
			</Text>
			<List spacing={3} fontSize={"xl"}>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={MdCheckCircle} color="green.500" />
						<Text>Launch Website</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={MdCheckCircle} color="green.500" />
						<Text>Launch Telegram Community Group</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={MdCheckCircle} color="green.500" />
						<Text>Launch Official Twitter Account</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>Fair Launch Musk Tweet Floki</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>Submit in various listing platform</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>
							Investment on a big scale on all social media platform promotions
						</Text>
					</Flex>
				</ListItem>
			</List>
		</>
	);
	const phase2E = (
		<>
			<Text
				fontSize={"2xl"}
				fontWeight={"bold"}
				mb="2"
				color="#f56713"
				letterSpacing={"wide"}
			>
				Phase 2
			</Text>
			<List spacing={3} fontSize={"xl"}>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>Logo Appearance on each platform</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>Focus on building a strong community</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>Reach 5k Organic Telegram Member</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>Apply for listing on major crypto exchanges</Text>
					</Flex>
				</ListItem>
			</List>
		</>
	);
	const phase3E = (
		<>
			<Text
				fontSize={"2xl"}
				fontWeight={"bold"}
				mb="2"
				color="#f56713"
				letterSpacing={"wide"}
			>
				Phase 3
			</Text>
			<List spacing={3} fontSize={"xl"}>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>V2 Website Update</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>Reach 15K Organic Telegram Member</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>25,000 Holders</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>Voluntary donation for community + charity partnership</Text>
					</Flex>
				</ListItem>
			</List>
		</>
	);
	const phase4E = (
		<>
			<Text
				fontSize={"2xl"}
				fontWeight={"bold"}
				mb="2"
				color="#f56713"
				letterSpacing={"wide"}
			>
				Phase 4
			</Text>
			<List spacing={3} fontSize={"xl"}>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>Increase Marketing</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>Add way more memes</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>Air drop</Text>
					</Flex>
				</ListItem>
				<ListItem>
					<Flex alignItems={"center"}>
						<ListIcon as={VscLoading} color="#f56713" />
						<Text>To be Announced!</Text>
					</Flex>
				</ListItem>
			</List>
		</>
	);

	return (
		<>
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
				height="60px"
				width="100%"
				id="roadmap"
			>
				<path
					d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
					className="shape-fill"
					fill="#f6f9fc"
					fillOpacity="1"
				></path>
			</svg>
			<Box h="full" bg="white" p={{ base: "0", md: "20" }} pt="5">
				<Text
					textAlign="center"
					pb={{ base: "0", md: "10" }}
					fontWeight="bold"
					fontSize={{ base: "2xl", md: "3xl" }}
					color="#f56713"
					data-aos="zoom-out-down"
				>
					Roadmap Board (note: check mean completed)
				</Text>
				<Box
					h="full"
					bg="white"
					p={{ base: "10", md: "20" }}
					d={{ base: "block", md: "none" }}
				>
					<VStack>
						<Button
							onClick={phase1.onToggle}
							variant="unstyled"
							bg="#f6f9fc"
							w="100%"
							color="#f56713"
							_active={{ color: "white", bg: "#f56713" }}
							_focus={{ outline: "none" }}
							shadow="md"
							data-aos="fade-in-up"
						>
							Phase1
						</Button>
						<Collapse in={phase1.isOpen} animateOpacity>
							<Box
								p="40px"
								color="#f56713"
								mt="4"
								bg="#f6f9fc"
								rounded="md"
								shadow="md"
							>
								{phase1E}
							</Box>
						</Collapse>
						<Button
							onClick={phase2.onToggle}
							variant="unstyled"
							bg="#f6f9fc"
							w="100%"
							color="#f56713"
							_active={{ color: "white", bg: "#f56713" }}
							_focus={{ outline: "none" }}
							shadow="md"
							data-aos="fade-in-up"
						>
							Phase2
						</Button>
						<Collapse in={phase2.isOpen} animateOpacity>
							<Box
								p="40px"
								color="#f56713"
								mt="4"
								bg="#f6f9fc"
								rounded="md"
								shadow="md"
							>
								{phase2E}
							</Box>
						</Collapse>
						<Button
							onClick={phase3.onToggle}
							variant="unstyled"
							bg="#f6f9fc"
							w="100%"
							color="#f56713"
							_active={{ color: "white", bg: "#f56713" }}
							_focus={{ outline: "none" }}
							shadow="md"
							data-aos="fade-in-up"
						>
							Phase3
						</Button>
						<Collapse in={phase3.isOpen} animateOpacity>
							<Box
								p="40px"
								color="#f56713"
								mt="4"
								bg="#f6f9fc"
								rounded="md"
								shadow="md"
							>
								{phase3E}
							</Box>
						</Collapse>
						<Button
							onClick={phase4.onToggle}
							variant="unstyled"
							bg="#f6f9fc"
							w="100%"
							color="#f56713"
							_active={{ color: "white", bg: "#f56713" }}
							_focus={{ outline: "none" }}
							shadow="md"
							data-aos="fade-in-up"
						>
							Phase4
						</Button>
						<Collapse in={phase4.isOpen} animateOpacity>
							<Box
								p="40px"
								color="#f56713"
								mt="4"
								bg="#f6f9fc"
								rounded="md"
								shadow="md"
							>
								{phase4E}
							</Box>
						</Collapse>
					</VStack>
				</Box>

				<Tabs
					isFitted
					orientation="vertical"
					d={{ base: "none", md: "inline-flex" }}
					variant="unstyled"
					gridGap="6"
					w="full"
				>
					<TabList
						gridGap="4"
						color="#f56713"
						shadow="xl"
						border="1px"
						p="2"
						py="3"
						rounded="2xl"
						data-aos="slide-right"
					>
						<Tab
							rounded="2xl"
							bg="#f6f9fc"
							outline="none"
							_focus={{ color: "white", bg: "#f56713" }}
							px="8"
							py="4"
							fontSize="xl"
							fontWeight="semibold"
						>
							Phase 1
						</Tab>
						<Tab
							rounded="2xl"
							bg="#f6f9fc"
							outline="none"
							_focus={{ color: "white", bg: "#f56713" }}
							px="8"
							py="4"
							fontSize="xl"
							fontWeight="semibold"
						>
							Phase 2
						</Tab>
						<Tab
							rounded="2xl"
							bg="#f6f9fc"
							outline="none"
							_focus={{ color: "white", bg: "#f56713" }}
							px="8"
							py="4"
							fontSize="xl"
							fontWeight="semibold"
						>
							Phase 3
						</Tab>
						<Tab
							rounded="2xl"
							bg="#f6f9fc"
							outline="none"
							_focus={{ color: "white", bg: "#f56713" }}
							px="8"
							py="4"
							fontSize="xl"
							fontWeight="semibold"
						>
							Phase 4
						</Tab>
					</TabList>
					{/* ----- */}
					<TabPanels bg="#f6f9fc" p="5" rounded="2xl" data-aos="zoom-in-left">
						<TabPanel>{phase1E}</TabPanel>
						<TabPanel>{phase2E}</TabPanel>
						<TabPanel>{phase3E}</TabPanel>
						<TabPanel>{phase4E}</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
			<Box transform="rotate(180deg)">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					height="60px"
					width="100%"
					id="proof"
				>
					<path
						d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
						className="shape-fill"
						fill="#f6f9fc"
						fillOpacity="1"
					></path>
				</svg>
			</Box>
		</>
	);
}
