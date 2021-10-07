import Head from "next/head";
import Hero from "../components/Hero";
import Why from "../components/Why";
import About from "../components/About";
import Roadmap from "../components/Roadmap";
import Proof from "../components/Proof";
import HowToBuy from "../components/HowToBuy";
import Footer from "../components/Footer";
import { Square, Button } from "@chakra-ui/react";
import { IoChevronUp } from "react-icons/io5";

export default function Home() {
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="shortcut icon" href="./Face.png" />

				{/* <!-- Primary Meta Tags --> */}
				<title>MuskTweetFloki</title>
				<meta name="title" content="MuskTweetFloki" />
				<meta
					name="description"
					content="MuskTweetFloki is a community based token, which means the development
							of the project is done by its community members. The tokenomics
							utility model is to be used for paying for goods and services. It
							is also intended to be used as a reward to the users of the
							platform."
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://musk-tweet-floki.vercel.app/"
				/>
				<meta property="og:title" content="MuskTweetFloki" />
				<meta
					property="og:description"
					content="MuskTweetFloki is a community based token, which means the development
							of the project is done by its community members. The tokenomics
							utility model is to be used for paying for goods and services. It
							is also intended to be used as a reward to the users of the
							platform."
				/>
				<meta property="og:image" content="https://i.ibb.co/2SrdRMV/1.png" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://musk-tweet-floki.vercel.app/"
				/>
				<meta property="twitter:title" content="MuskTweetFloki" />
				<meta
					property="twitter:description"
					content="MuskTweetFloki is a community based token, which means the development
							of the project is done by its community members. The tokenomics
							utility model is to be used for paying for goods and services. It
							is also intended to be used as a reward to the users of the
							platform."
				/>
				<meta
					property="twitter:image"
					content="https://i.ibb.co/2SrdRMV/1.png"
				/>
			</Head>
			<Hero />
			<Why />
			<About />
			<Roadmap />
			<Proof />
			<HowToBuy />
			<Footer />

			<Square
				pos="fixed"
				bottom={5}
				right={5}
				onClick={scrollTop}
				opacity="0.8"
			>
				<Button
					p={{ base: "5", md: "7" }}
					fontSize={{ base: "2xl", md: "4xl" }}
					shadow="md"
					_focus={{ outline: "none" }}
					color="#f56713"
				>
					<IoChevronUp />
				</Button>
			</Square>
		</>
	);
}
