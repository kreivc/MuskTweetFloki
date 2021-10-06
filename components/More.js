import React from "react";
import Script from "next/script";
import { Box } from "@chakra-ui/react";

export default function More() {
	return (
		<Box p={{ base: "10", md: "20" }} d="flex" justifyContent="center">
			<Box>
				<blockquote
					className="twitter-tweet"
					data-lang="en"
					data-dnt="true"
					data-theme="light"
				>
					<p lang="en" dir="ltr">
						Floki has arrived{" "}
						<a href="https://t.co/2MiUKb91FT">pic.twitter.com/2MiUKb91FT</a>
					</p>
					&mdash; Elon Musk (@elonmusk){" "}
					<a href="https://twitter.com/elonmusk/status/1437179881260032016?ref_src=twsrc%5Etfw">
						September 12, 2021
					</a>
				</blockquote>
			</Box>
			<Script
				async
				src="https://platform.twitter.com/widgets.js"
				charset="utf-8"
			></Script>
		</Box>
	);
}
