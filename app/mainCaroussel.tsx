import React, { useState } from "react";
import { Box, Button, Flex, Heading, IconButton, Icon, Text } from "@chakra-ui/react";
import ArrowBlack from "@/svg/arrow-black";
import ArrowWhite from "@/svg/arrow-white";
import Beak from '@/svg/beak';

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
		userSelect: "none",
		bgColor: "transparent"
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
			mode: "ligth"
		},
		{
			img: "/backgrounds/cube.webp",
			title: (<><Box as="span" color="spanish-orange">La</Box> Dao</>),
			subtitle: (<>
				La solution d’assurance <Box as="span" color="fulvous">du </Box>
				<Box as="span" color="fulvous">futur</Box>
			</>),
			description: "Une pool de liquidités et des couvertures autogérées par la communauté.",
			mode: "dark"
		},
		{
			img: "/backgrounds/oracle.webp",
			title: (<><Box as="span" color="indian-yellow" >L’oracle</Box> MYOWLY</>),
			subtitle: (
				<>
					La <Box as="span" color="indian-yellow" >fiabilité</Box> des
					<Box as="span" color="spanish-orange"> contrats intelligents</Box>
				</>
			),
			description: "Des sources de données fiables utilisées pour déclencher les smart contracts.",
			mode: "dark"
		},
		{
			img: "/backgrounds/ia.webp",
			title: (
				<>
					<Box as="span" color="vampire-black">Une</Box> <Box as="span" color="indian-yellow">IA</Box> ACTUARIELLE

				</>),
			subtitle: (
				<>La <Box as="span" color="indian-yellow">précision</Box>,
					pour <Box as="span" color="spanish-orange">un avenir sûr</Box>
				</>),
			description: "L'intelligence artificielle  analyse des données complexes et prévoit les risques futurs avec une précision accrue.",
			mode: "ligth"
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
	const carouselSlice = {
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
				<Flex
					w="full"
					transition="all .5s"
					{...carouselSlice}
				>
					{slides.map((slide, sid) => (
						<Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
							<Flex
								direction="column"
								justifyContent="center"
								alignItems="center"
								w="full"
								h="100vh"
								pt={['20px', '100px']}
								px={['22px', '15.5%']}
								pb={['20px', '100px']}
							>
								<Flex
									direction="column"
									justifyContent="center"
									maxWidth="460px"
									py={['14%', '78px']}
									px={['14%', '54px']}
									backdropFilter="blur(10px)"
									border="1px solid"
									borderColor={slide.mode === 'ligth' ? 'vampire-black' : 'cultured'}
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
										color={slide.mode == 'ligth' ? "vampire-black" : "cultured"}
										textTransform="uppercase"
										fontWeight="600"
										fontSize={['24px', '25px']}
										lineHeight={['24px', '25px']}
									>
										{slide.subtitle}
									</Heading>
									<Text
										color={slide.mode == 'ligth' ? "vampire-black" : "cultured"}
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
				<IconButton
					left="0"
					onClick={prevSlide}
					transform="rotate(90deg)"
					marginLeft={[null, '7%']}
					aria-label="previous slide"
					icon={<Icon as={slides[currentSlide].mode == 'ligth' ? ArrowBlack : ArrowWhite} />}
					{...arrowStyles}
				/>
				<IconButton
					right="0"
					onClick={nextSlide}
					transform="rotate(-90deg)"
					marginRight={[null, '7%']}
					aria-label="previous slide"
					icon={<Icon as={slides[currentSlide].mode == 'ligth' ? ArrowBlack : ArrowWhite} />}
					{...arrowStyles}
				/>
				{/* Beak slide selctors */}
				<Flex justifyContent="center" w="full" position="absolute" bottom="30px">
					{Array.from({ length: slidesCount }).map((_, slide) => (
						<IconButton
							key={`dots-${slide}`}
							cursor="pointer"
							m="0 2px"
							bgColor="transparent"
							{...(currentSlide === slide ? {
								icon: <Beak height="24" width="auto" />
							} : {
								icon: <Beak height="14" width="auto" />,
								sx: { filter: "grayscale(1)" }
							})}
							display="inline-block"
							transition="background-color 0.6s ease"
							aria-label={'go to slide ' + slide + 1}
							onClick={() => setSlide(slide)}
						></IconButton>
					))}
				</Flex>
			</Flex>
		</Flex >
	);
};
