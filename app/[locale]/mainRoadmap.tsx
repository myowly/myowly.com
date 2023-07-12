import { Flex, Text, Heading, Image, Box, Icon, Show } from "@chakra-ui/react";
import { RoadmapEllipseGreen, RoadmapEllipseOrange } from "@/svg/roadmap-ellipse";
import ArrowBlack from "@/svg/arrow-black";
import { useEffect, useRef, useState } from "react";

export default function MainRoadmap() {
	const steps = [
		{
			title: <>Mai 2023</>,
			description: <>Création de la marque et de son identité</>
		},
		{
			title: <>Juin 2023</>,
			description: <>Lancement Landing Page</>
		},
		{
			title: <>Sept. 2023</>,
			description: <>Seed<br />1ères embauches<br />Lancement campagne NFT</>
		},
		{
			title: <>Janvier 2024</>,
			description: <>Vente NFT<br />DAO Événementielle</>
		},
		{
			title: <>Mars 2024</>,
			description: <>IA Paramétrique</>
		},
		{
			title: <>Mai 2024</>,
			description: <>Phase Béta Test</>
		},
		{
			title: <>Sept. 2024</>,
			description: <>Lancement de produit</>
		},
		{
			title: <>Mai 2025</>,
			description: <>Décentralisation IA (Hub)</>
		},
	]

	const activeStep = 1;
	const [isScrolledToMax, setIsScrolledToMax] = useState(false);
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (divRef.current) {
				const divElement = divRef.current;
				setIsScrolledToMax(
					divElement.scrollHeight - divElement.scrollTop === divElement.clientHeight
				);
			}
		};

		if (divRef.current) {
			const divElement = divRef.current;
			divElement.addEventListener('scroll', handleScroll);
		}
	}, []);

	const handleArrowClick = () => {
		if (divRef.current) {
			divRef.current.scrollTop += 80;
		}
	};

	return (
		<Flex
			id="roadmap"
			flexDirection={["column"]}
			justifyContent="space-between"
			alignItems="center"
			w="100%"
			minHeight="100vh"
			bgGradient="linear(to-b, sherwood-green 0%, black-bean 33%, black-bean 71%, sherwood-green 100%)"
			borderRadius="xl"
			position="relative"
		>
			<Flex
				position="absolute"
				top="0"
				w="150%"
				h="100%"
				justifyContent={["center", null, "space-around"]}
				alignItems="center"
				overflow="hidden"
				alignContent="space-around"
				flexWrap="wrap"
			>
				<Show below="md">
					<Image as="img" src="/Cristals_2.png" alt="" m="4" height="80%" />
					<Image as="img" src="/Cristals_2.png" alt="" m="4" height="70%" mt="auto" />
				</Show>
				<Show above="md">
					<Image as="img" src="/Cristals_2b.png" alt="" ml="25%" mt="50px" width="620px" />
					<Image as="img" src="/Cristals_2b.png" alt="" ml="15%" width="620px" />
					<Image as="img" src="/Cristals_2b.png" alt="" ml="0" width="620px" />
					<Image as="img" src="/Cristals_2b.png" alt="" ml="0" width="620px" />
				</Show>
				<Show above="xl">
					<Image as="img" src="/Cristals_2b.png" alt="" ml="0" width="620px" />
					<Image as="img" src="/Cristals_2b.png" alt="" ml="15%" width="620px" />
					<Image as="img" src="/Cristals_2b.png" alt="" ml="0" width="620px" />
					<Image as="img" src="/Cristals_2b.png" alt="" ml="0" width="620px" />
					<Image as="img" src="/Cristals_2b.png" alt="" ml="0" width="620px" />
					<Image as="img" src="/Cristals_2b.png" alt="" ml="10%" width="620px" />
					<Image as="img" src="/Cristals_2b.png" alt="" ml="10%" width="620px" />
				</Show>
				<Show above="md">
					<Image as="img" src="/Cristals_2b.png" alt="" ml="15%" width="620px" />
					<Image as="img" src="/Cristals_2b.png" alt="" ml="0" width="620px" />
					<Image as="img" src="/Cristals_2b.png" alt="" ml="15%" width="620px" />
					<Image as="img" src="/Cristals_2b.png" alt="" ml="20%" width="620px" />
					<Image as="img" src="/Cristals_2b.png" alt="" ml="0" mb="50px" width="620px" />
				</Show>
			</Flex>
			<Flex
				marginY={["85px", "104px"]}
				marginX={["15px", "20px"]}
				paddingX={["22px", "33px"]}
				paddingY={["40px", "50px"]}
				flexDirection="column"
				justifyContent="space-between"
				alignItems="center"
				border="1px solid"
				borderColor="cultured"
				borderRadius="56px"
				bgGradient="linear(135deg, rgba(255, 255, 255, 0.36) 0%, rgba(196, 196, 196, 0.06) 100%)"
				backdropFilter="blur(10px)"
			>
				<Heading
					paddingBottom={["40px", "50px"]}
					color="cultured"
					fontSize={["67px", "80px"]}
					fontWeight="400"
					textTransform="uppercase"
				>
					Roadmap
				</Heading>
				<Flex
					ref={divRef}
					flexDirection={["column", null, "row"]}
					justifyContent="space-between"
					alignItems={["flex-start", null, "flex-end"]}
					position="relative"
					paddingX={["30px", "50px"]}
					paddingTop={["30px", "50px"]}
					paddingBottom={["20px", null, "180px"]}
					bgColor="cultured"
					borderRadius="20px"
					overflowY={["scroll", null, "visible",]}
					overflowX={[null, null, "scroll"]}
					maxHeight="50vh"
					maxWidth={[null, null, "80vw"]}
					scrollBehavior="smooth"
				>
					{steps.map((step, index) => (
						<Box
							key={index}
							borderLeftWidth={["3px", null, "0"]}
							borderBottomWidth={[null, null, "3px"]}
							borderStyle="solid"
							borderColor="vampire-black"
						>
							<Flex
								position="relative"
								paddingRight={[null, null, "30px"]}
								alignItems="flex-start"
								minWidth={[null, null, "250px"]}
								minHeight={[null, null, "150px"]}
								flexBasis="max-content"
								paddingBottom={[null, null, "30px"]}
								{...(index % 2 == 0 ? {
									position: [null, null, "relative"],
									bottom: "-180px",
									flexDirection: "column"
								} : {
									flexDirection: ["column", null, "column-reverse"]

								})}
							>
								<Flex
									as="h4"
									position={["relative", null, "initial"]}
									left="-10px"
									fontFamily="body"
									fontWeight="700"
									fontSize="18px"
									lineHeight="20px"
									paddingBottom="5px"
								>
									{index <= activeStep ? (
										<>
											<Box
												boxShadow="0px 0px 20px 0px var(--chakra-colors-keppel)"
												borderRadius="9999px"
												position={[null, null, "absolute"]}
												left="-2px"
												{...(index % 2 == 0 ? {
													top: "-39px"
												} : {
													bottom: "-11px"
												})}
											>
												<Icon as={RoadmapEllipseGreen} />

											</Box>
											<Text
												as="span"
												marginLeft={["10px", null, "0"]}
												color="keppel"
												textTransform="uppercase"
											>{step.title}</Text>
										</>
									) : (
										<>
											<Box
												position={[null, null, "absolute"]}
												left="-2px"
												{...(index % 2 == 0 ? {
													top: "-39px"
												} : {
													bottom: "-11px"
												})}
											>
												<Icon as={RoadmapEllipseOrange} />
											</Box>
											<Text
												as="span"
												marginLeft={["10px", null, "0"]}
												color="fulvous"
												textTransform="uppercase"
											>{step.title}</Text>
										</>
									)}
								</Flex>

								<Text
									color="vampire-black"
									paddingX={["10px", null, "0"]}
									paddingBottom={["30px", null, "10px"]}
									fontSize="15px"
								>
									{step.description}
								</Text>
							</Flex>
						</Box>
					))}
					<Box
						borderLeftWidth={["3px", null, "0"]}
						borderBottomWidth={[null, null, "3px"]}
						borderStyle="dashed"
						borderColor="vampire-black"
					>
						<Box boxSize="35px" />
						{isScrolledToMax ? null :
							<Box
								onClick={handleArrowClick}
								position="fixed"
								bottom="63px"
								right="55px"
								cursor="pointer"
								transform={[null, null, "rotate(-90deg)"]}
							>
								<Icon
									as={ArrowBlack}
								/>
							</Box>
						}
					</Box>
				</Flex>
			</Flex>
		</Flex >
	)
}
