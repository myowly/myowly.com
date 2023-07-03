import { Flex, Text, Heading, Image, Box, Icon } from "@chakra-ui/react";
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
			title: <>Septembre 2023</>,
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
				hideFrom="md"
				position="absolute"
				top="0"
				w="100%"
				h="100%"
				justifyContent="center"
			>
				<Image as="img" src="/Cristals_2.png" alt="Cristaux" m="4" height="80%" />
				<Image as="img" src="/Cristals_2.png" alt="Cristaux" m="4" height="80%" mt="auto" />
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
					flexDirection="column"
					justifyContent="space-between"
					alignItems="flex-start"
					position="relative"
					padding="20px"
					bgColor="cultured"
					borderRadius="20px"
					overflowY="scroll"
					maxHeight="50vh"
					scrollBehavior="smooth"
				>
					{steps.map((step, index) => (
						<Flex
							key={index}
							position="relative"
							flexDirection="column"
							alignItems="flex-start"
							borderLeft="3px solid"
							borderColor="vampire-black"
						>
							<Flex
								as="h4"
								position="relative"
								left="-10px"
								fontFamily="body"
								fontWeight="700"
								fontSize="18px"
								lineHeight="20px"
							>
								{index <= activeStep ? (
									<>
										<Box
											boxShadow="0px 0px 20px 0px var(--chakra-colors-keppel)"
											borderRadius="9999px"
										>
											<Icon as={RoadmapEllipseGreen} />

										</Box>
										<Text as="span" marginLeft="10px" color="keppel">{step.title}</Text>
									</>
								) : (
									<>
										<Icon as={RoadmapEllipseOrange} />
										<Text as="span" marginLeft="10px" color="fulvous">{step.title}</Text>
									</>
								)}
							</Flex>

							<Text
								color="vampire-black"
								paddingTop="5px"
								paddingX="10px"
								paddingBottom="30px"
								fontSize="15px"
							>
								{step.description}
							</Text>
						</Flex>
					))}
					<Box
						borderLeftWidth="3px"
						borderStyle="dashed"
						borderColor="vampire-black"
					>
						<Box height="35px" />
						{isScrolledToMax ? null :
							<Box
								onClick={handleArrowClick}
								position="fixed"
								bottom="63px"
								right="55px"
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
