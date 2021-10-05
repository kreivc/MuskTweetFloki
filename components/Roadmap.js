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
} from "@chakra-ui/react";

export default function Roadmap() {
	const phase1 = useDisclosure();
	const phase2 = useDisclosure();

	return (
		<>
			<Box
				h="100vh"
				bg="white"
				p={{ base: "10", md: "20" }}
				d={{ base: "none", md: "block" }}
			>
				<Tabs isFitted variant="enclosed" orientation="vertical">
					<TabList mb="1em">
						<Tab>Phase 1</Tab>
						<Tab>Phase 2</Tab>
						<Tab>Phase 3</Tab>
						<Tab>Phase 4</Tab>
						<Tab>Phase 5</Tab>
						<Tab>Phase 6</Tab>
					</TabList>
					<TabPanels>
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
			<Box
				h="100vh"
				bg="white"
				p={{ base: "10", md: "20" }}
				d={{ base: "block", md: "none" }}
			>
				<Button onClick={phase1.onToggle}>Click Me</Button>
				<Button onClick={phase2.onToggle}>Click Me</Button>
				<Collapse in={phase1.isOpen} animateOpacity>
					<Box
						p="40px"
						color="white"
						mt="4"
						bg="teal.500"
						rounded="md"
						shadow="md"
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
						expedita placeat voluptatibus ducimus consequuntur accusamus
						possimus, ipsa exercitationem dolor repudiandae. Sequi voluptates
						dolorem deleniti, illo perspiciatis iure at voluptas! Sed?
					</Box>
				</Collapse>
				<Collapse in={phase2.isOpen} animateOpacity>
					<Box
						p="40px"
						color="white"
						mt="4"
						bg="teal.500"
						rounded="md"
						shadow="md"
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
						expedita placeat voluptatibus ducimus consequuntur accusamus
						possimus, ipsa exercitationem dolor repudiandae. Sequi voluptates
						dolorem deleniti, illo perspiciatis iure at voluptas! Sed?
					</Box>
				</Collapse>
			</Box>
		</>
	);
}
