import React, { useState } from "react";
import { Box, Button, Flex, Heading, IconButton, Icon, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import ArrowBlack from "@/svg/arrow-black";
import ArrowWhite from "@/svg/arrow-white";
import Beak from '@/svg/beak';
import { slides } from './slides';

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
		ml: [
			`-${currentSlide * 100}%`,
			null,
			`-${currentSlide * 50}%`,
			`-${currentSlide * 45}%`,
			`-${currentSlide * 33}%`
		],
	};

	const Slide = ({ slide, sid }) => {
		const { isOpen, onOpen, onClose } = useDisclosure();
		return (
			<Box
				boxSize="full"
				flex="none"
				{...(sid === 0 ? { ml: [null, null, '40%'] } : {})}
				mr={[null, null, '50px', '70px']}
			>
				<Flex
					direction="column"
					justifyContent="center"
					alignItems="center"
					w="full"
					h="100vh"
					pt={['20px', '100px', 0]}
					px={['22px', '15.5%', 0]}
					pb={['20px', '100px', 0]}
				>
					<Flex
						direction="column"
						justifyContent="center"
						maxWidth="460px"
						{...(currentSlide === sid ? {
							py: ['14%', '78px', '78px'],
						} : {
							py: ['14%', '78px', '40px'],
						})}
						px={['14%', '54px']}
						transition="all .5s"
						backdropFilter="blur(10px)"
						border="1px solid"
						borderColor={slide.mode === 'ligth' ? 'vampire-black' : 'cultured'}
						borderRadius="56px"
						bgGradient="linear(110.72deg, rgba(255, 255, 255, 0.36) 1.21%, rgba(196, 196, 196, 0.06) 100%);"
						{...(currentSlide < sid ? {
							onClick: nextSlide,
							cursor: "pointer"
						} : currentSlide > sid ? {
							onClick: prevSlide,
							cursor: "pointer"
						} : {}
						)}
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
							onClick={(e) => { e.stopPropagation(); onOpen() }}
						>
							En savoir plus
						</Button>
					</Flex>
				</Flex>
				<Modal onClose={onClose} isOpen={isOpen} isCentered>
					<ModalOverlay backdropBlur="2px" />
					<ModalContent bgColor="cultured" padding="50px 20px">
						<ModalHeader
							textTransform="uppercase"
							color="keppel"
							fontSize="50px"
							lineHeight="50px"
						>{slide.modalHeading}</ModalHeader>
						<ModalCloseButton color="vampire-black" />
						<ModalBody>
							{slide.modalBody}
						</ModalBody>
					</ModalContent>
				</Modal>
			</Box>
		);

	};

	return (
		<Flex
			w="full"
			bg="#edf3f8"
			_dark={{ bg: "#3e3e3e" }}
			alignItems="center"
			justifyContent="center"
			id="carousel"
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
					w={['100%', null, '50%', '45%', '33%']}
					transition="all .5s"
					{...carouselSlice}
				>
					{slides.map((slide, sid) => (
						<Slide slide={slide} sid={sid} key={`slide-${sid}`} />
					))}
				</Flex>
				<IconButton
					display={[null, null, 'none']}
					left="0"
					onClick={prevSlide}
					transform="rotate(90deg)"
					marginLeft={[null, '7%']}
					aria-label="previous slide"
					icon={<Icon as={slides[currentSlide].mode == 'ligth' ? ArrowBlack : ArrowWhite} />}
					{...arrowStyles}
				/>
				<IconButton
					display={[null, null, 'none']}
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
