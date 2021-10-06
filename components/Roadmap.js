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
} from "@chakra-ui/react";

export default function Roadmap() {
	const phase1 = useDisclosure();
	const phase2 = useDisclosure();

	return (
		<>
			<Box
				h="full"
				bg="white"
				p={{ base: "0", md: "20" }}
				// d={{ base: "none", md: "block" }}
			>
				<Text textAlign="center" p="5" fontWeight="bold" fontSize="2xl">
					Roadmap
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
						>
							Phase1
						</Button>
						<Collapse in={phase1.isOpen} animateOpacity>
							<Box
								p="40px"
								color="white"
								mt="4"
								bg="#f56713"
								rounded="md"
								shadow="md"
							>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Impedit expedita placeat voluptatibus ducimus consequuntur
								accusamus possimus, ipsa exercitationem dolor repudiandae. Sequi
								voluptates dolorem deleniti, illo perspiciatis iure at voluptas!
								Sed?
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
						>
							Phase2
						</Button>
						<Collapse in={phase2.isOpen} animateOpacity>
							<Box
								p="40px"
								color="white"
								mt="4"
								bg="#f56713"
								rounded="md"
								shadow="md"
							>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Impedit expedita placeat voluptatibus ducimus consequuntur
								accusamus possimus, ipsa exercitationem dolor repudiandae. Sequi
								voluptates dolorem deleniti, illo perspiciatis iure at voluptas!
								Sed?
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
				>
					<TabList
						gridGap="3"
						color="#f56713"
						shadow="xl"
						border="1px"
						p="2"
						rounded="2xl"
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
							colorScheme="#f56713"
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
							colorScheme="#f56713"
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
							colorScheme="#f56713"
							outline="none"
							_focus={{ color: "white", bg: "#f56713" }}
							px="8"
							py="4"
							fontSize="xl"
							fontWeight="semibold"
						>
							Phase 4
						</Tab>
						<Tab
							rounded="2xl"
							bg="#f6f9fc"
							colorScheme="#f56713"
							outline="none"
							_focus={{ color: "white", bg: "#f56713" }}
							px="8"
							py="4"
							fontSize="xl"
							fontWeight="semibold"
						>
							Phase 5
						</Tab>
						<Tab
							rounded="2xl"
							bg="#f6f9fc"
							colorScheme="#f56713"
							outline="none"
							_focus={{ color: "white", bg: "#f56713" }}
							px="8"
							py="4"
							fontSize="xl"
							fontWeight="semibold"
						>
							Phase 6
						</Tab>
					</TabList>
					<TabPanels bg="#f6f9fc" p="5" rounded="2xl">
						<TabPanel>
							<p>
								PHASE 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Qui hic iusto consectetur incidunt mollitia eius soluta, dolores
								placeat ut quo dolor nulla labore commodi molestias nam!
								Adipisci quod eos explicabo qui earum perspiciatis commodi natus
								aperiam incidunt iusto reprehenderit beatae, accusamus
								cupiditate omnis, assumenda sapiente voluptatum necessitatibus
								ut in asperiores quas unde eaque! Repellendus dolorem fugit ab.
								Necessitatibus dolores officiis mollitia, qui molestias quo ea
								eius consequatur tempore aut, harum aliquid magnam porro.
								Dolorem minus quod tempora! Odit excepturi fugiat aperiam
								voluptatem. Quasi, iusto rerum! Ipsum, ducimus omnis ullam,
								tenetur nesciunt minus, illum molestiae qui optio id autem culpa
								modi!
							</p>
						</TabPanel>
						<TabPanel>
							<p>
								PHASE 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Qui hic iusto consectetur incidunt mollitia eius soluta, dolores
								placeat ut quo dolor nulla labore commodi molestias nam!
								Adipisci quod eos explicabo qui earum perspiciatis commodi natus
								aperiam incidunt iusto reprehenderit beatae, accusamus
								cupiditate omnis, assumenda sapiente voluptatum necessitatibus
								ut in asperiores quas unde eaque! Repellendus dolorem fugit ab.
								Necessitatibus dolores officiis mollitia, qui molestias quo ea
								eius consequatur tempore aut, harum aliquid magnam porro.
								Dolorem minus quod tempora! Odit excepturi fugiat aperiam
								voluptatem. Quasi, iusto rerum! Ipsum, ducimus omnis ullam,
								tenetur nesciunt minus, illum molestiae qui optio id autem culpa
								modi!
							</p>
						</TabPanel>
						<TabPanel>
							<p>
								PHASE 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Qui hic iusto consectetur incidunt mollitia eius soluta, dolores
								placeat ut quo dolor nulla labore commodi molestias nam!
								Adipisci quod eos explicabo qui earum perspiciatis commodi natus
								aperiam incidunt iusto reprehenderit beatae, accusamus
								cupiditate omnis, assumenda sapiente voluptatum necessitatibus
								ut in asperiores quas unde eaque! Repellendus dolorem fugit ab.
								Necessitatibus dolores officiis mollitia, qui molestias quo ea
								eius consequatur tempore aut, harum aliquid magnam porro.
								Dolorem minus quod tempora! Odit excepturi fugiat aperiam
								voluptatem. Quasi, iusto rerum! Ipsum, ducimus omnis ullam,
								tenetur nesciunt minus, illum molestiae qui optio id autem culpa
								modi!
							</p>
						</TabPanel>
						<TabPanel>
							<p>
								PHASE 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Qui hic iusto consectetur incidunt mollitia eius soluta, dolores
								placeat ut quo dolor nulla labore commodi molestias nam!
								Adipisci quod eos explicabo qui earum perspiciatis commodi natus
								aperiam incidunt iusto reprehenderit beatae, accusamus
								cupiditate omnis, assumenda sapiente voluptatum necessitatibus
								ut in asperiores quas unde eaque! Repellendus dolorem fugit ab.
								Necessitatibus dolores officiis mollitia, qui molestias quo ea
								eius consequatur tempore aut, harum aliquid magnam porro.
								Dolorem minus quod tempora! Odit excepturi fugiat aperiam
								voluptatem. Quasi, iusto rerum! Ipsum, ducimus omnis ullam,
								tenetur nesciunt minus, illum molestiae qui optio id autem culpa
								modi!
							</p>
						</TabPanel>
						<TabPanel>
							<p>
								PHASE 5 Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Qui hic iusto consectetur incidunt mollitia eius soluta, dolores
								placeat ut quo dolor nulla labore commodi molestias nam!
								Adipisci quod eos explicabo qui earum perspiciatis commodi natus
								aperiam incidunt iusto reprehenderit beatae, accusamus
								cupiditate omnis, assumenda sapiente voluptatum necessitatibus
								ut in asperiores quas unde eaque! Repellendus dolorem fugit ab.
								Necessitatibus dolores officiis mollitia, qui molestias quo ea
								eius consequatur tempore aut, harum aliquid magnam porro.
								Dolorem minus quod tempora! Odit excepturi fugiat aperiam
								voluptatem. Quasi, iusto rerum! Ipsum, ducimus omnis ullam,
								tenetur nesciunt minus, illum molestiae qui optio id autem culpa
								modi!
							</p>
						</TabPanel>
						<TabPanel>
							<p>
								PHASE 6 Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Qui hic iusto consectetur incidunt mollitia eius soluta, dolores
								placeat ut quo dolor nulla labore commodi molestias nam!
								Adipisci quod eos explicabo qui earum perspiciatis commodi natus
								aperiam incidunt iusto reprehenderit beatae, accusamus
								cupiditate omnis, assumenda sapiente voluptatum necessitatibus
								ut in asperiores quas unde eaque! Repellendus dolorem fugit ab.
								Necessitatibus dolores officiis mollitia, qui molestias quo ea
								eius consequatur tempore aut, harum aliquid magnam porro.
								Dolorem minus quod tempora! Odit excepturi fugiat aperiam
								voluptatem. Quasi, iusto rerum! Ipsum, ducimus omnis ullam,
								tenetur nesciunt minus, illum molestiae qui optio id autem culpa
								modi!
							</p>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</>
	);
}
