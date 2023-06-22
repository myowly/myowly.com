// import { Grid, Text, chakra, Heading, Image, GridItem, Button, Box } from "@chakra-ui/react";
//
// export default function MainCaroussel() {
//     return (
//         <Grid
//             display='flex'
//             templateColumns='repeat(3, 1fr)'
//             justifyContent='center'
//             alignItems='center'
//             flexDirection="column"
//         >
//             <GridItem
//                 zIndex='-1'
//             >
//                 <Image as='img' src="/backgrounds/field.webp" w='100%' h='auto' margin='auto' alt='Plaine' />
//             </GridItem>
//             <Box position='relative'>Blabla</Box>
//         </Grid>
//
//     )
// }

import React, { useState } from "react";
import { Box, Button, Flex, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ArrowBlack from "@/ui/icon/arrow-black";

export default function MainCaroussel() {
	const arrowStyles = {
		cursor: "pointer",
		pos: "absolute",
		top: "50%",
		w: "auto",
		mt: "-22px",
		p: "16px",
		color: "white",
		fontWeight: "bold",
		fontSize: "18px",
		transition: "0.6s ease",
		borderRadius: "9999px",
		userSelect: "none",
		_hover: {
			opacity: 0.2,
			bg: "black",
		},
	} as const;

	const slides = [
		{
			img: "/backgrounds/field.webp",
			title: (
				<>
					<Box as="span" color="vampire-black">Une </Box>
					<Box as="span" color="indian-yellow">assurance</Box> paramétri&shy;que
				</>
			),
			subtitle: (
				<>
					Tout est <Box as="span" color="spanish-orange" fontStyle="italic">prévu </Box><wbr />
					pour <Box as="span" color="spanish-orange" fontStyle="italic"> l’imprévu</Box>
				</>
			),
			description: "Une indemnisation plus rapide et plus efficace et sans avoir à prouver les pertes subies.",
			border: "vampire-black"
		},
		{
			img: "/backgrounds/cube.webp",
			title: "La Dao",
			subtitle: "La solution d’assurance du futur",
			description: "Une pool de liquidités et des couvertures autogérées par la communauté.",
			border: "cultured"
		},
		{
			img: "/backgrounds/oracle.webp",
			title: "L’oracle MYOWLY",
			subtitle: "la fiabilité des contrats intelligents",
			description: "Des sources de données fiables utilisées pour déclencher les smart contracts.",
			border: "cultured"
		},
		{
			img: "/backgrounds/ia.webp",
			title: "Une IA ACTUARIELLE",
			subtitle: "La précision, pour un avenir sûr",
			description: "L'intelligence artificielle  analyse des données complexes et prévoit les risques futurs avec une précision accrue.",
			border: "vampire-black"
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const slidesCount = slides.length;

	const prevSlide = () => {
		setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
	};
	const nextSlide = () => {
		setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
	};
	const setSlide = (slide: number) => {
		setCurrentSlide(slide);
	};
	const carouselStyle = {
		transition: "all .5s",
		ml: `-${currentSlide * 100}%`,
	};

	return (
		<Flex
			w="full"
			bg="#edf3f8"
			_dark={{ bg: "#3e3e3e" }}
			alignItems="center"
			justifyContent="center"
		>
			<Flex
				w="full"
				h="100vh"
				pos="relative"
				overflow="hidden"
				bgImage={slides[currentSlide].img}
				transition="all .8s"
				bgSize="cover"
				bgPosition="center"
			>
				<Flex w="full" {...carouselStyle}>
					{slides.map((slide, sid) => (
						<Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
							<Flex
								direction="column"
								justifyContent="center"
								alignItems="center"
								w="full"
								h="100vh"
								py={['20px', '100px']}
								px={['22px', '15.5%']}
							>
								<Flex
									direction="column"
									justifyContent="center"
									maxWidth="460px"
									py={['14%', '78px']}
									px={['14%', '54px']}
									backdropFilter="blur(10px)"
									border="1px solid"
									borderColor={slide.border}
									borderRadius="56px"
									bgGradient="linear(110.72deg, rgba(255, 255, 255, 0.36) 1.21%, rgba(196, 196, 196, 0.06) 100%);"
								>
									<Heading
										as="h3"
										size="2xl"
										color="fulvous"
										textTransform="uppercase"
										fontSize={['43px', '50px']}
										lineHeight={['43px', '50px']}
										fontWeight="normal"
									>
										{slide.title}
									</Heading>
									<Heading
										as="h4"
										mt={['35px', '50px', '100px']}
										fontFamily="body"
										color="vampire-black"
										textTransform="uppercase"
										fontWeight="600"
										fontSize={['24px', '25px']}
										lineHeight={['24px', '25px']}
									>
										{slide.subtitle}
									</Heading>
									<Text
										color="vampire-black"
										mt="20px"
									>{slide.description}</Text>
									<Button
										mt={['30px', null, '55px']}
										textTransform="uppercase"
										bgColor="cultured"
										color="keppel"
										p="0px 40px"
										borderRadius="20px"
										fontSize="20px"
										lineHeight="26px"
										fontWeight="700"
									>
										En savoir plus
									</Button>
								</Flex>
							</Flex>
						</Box>
					))}
				</Flex>
				<Box left="0" onClick={prevSlide} {...arrowStyles} transform="rotate(90deg)" marginLeft={[null, '7%']}>
					<ArrowBlack />
				</Box>
				<Box right="0" onClick={nextSlide} {...arrowStyles} transform="rotate(-90deg)" marginRight={[null, '7%']}>
					<ArrowBlack />
				</Box>
				<HStack justify="center" pos="absolute" bottom="8px" w="full">
					{Array.from({ length: slidesCount }).map((_, slide) => (
						<Box
							key={`dots-${slide}`}
							cursor="pointer"
							boxSize={["7px", null, "15px"]}
							m="0 2px"
							bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
							rounded="50%"
							display="inline-block"
							transition="background-color 0.6s ease"
							_hover={{ bg: "blackAlpha.800" }}
							onClick={() => setSlide(slide)}
						></Box>
					))}
				</HStack>
			</Flex>
		</Flex>
	);
};
