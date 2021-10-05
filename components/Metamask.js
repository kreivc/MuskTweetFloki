import Mtm from "../assets/Metamask.png";
import Image from "next/image";
import React from "react";
import { Button } from "@chakra-ui/react";

export default function Metamask() {
	return (
		<>
			<Button
				disabled={true}
				color={"white"}
				_hover={{
					bg: "transparent",
					outlineColor: "white",
				}}
				bg="white"
				rounded="lg"
				h="70px"
				w="70px"
				d="flex"
				alignItems="center"
				justifyContent="center"
				onClick={async () => {
					const provider = window.web3.currentProvider;
					provider.sendAsync(
						{
							method: "metamask_watchAsset",
							params: {
								type: "ERC20",
								options: {
									address: "0x301dfc30734c583d0049b0773e3edce94416690f",
									symbol: "MuskTweetFloki",
									decimals: 4,
									image: "https://i.ibb.co/twGcK9L/Anaconda-flipped.png",
								},
							},
							id: Math.round(Math.random() * 100000),
						},
						(err, added) => {
							console.log("provider returned", err, added);
							if (err || "error" in added) {
								return;
							}
							console.log("token added");
						}
					);
				}}
			>
				<Image src={Mtm} alt="" width="35px" height="35px" />
			</Button>
		</>
	);
}
