import { Flex, Text, Heading, Image, GridItem, Button, Box } from "@chakra-ui/react";
import {
	Step,
	StepDescription,
	StepIndicator,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
	useSteps,
} from '@chakra-ui/react'
import { RoadmapEllipseGreen, RoadmapEllipseOrange } from "@/svg/roadmap-ellipse";

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
	]

	const { activeStep } = useSteps({
		index: 1,
		count: steps.length,
	})

	return (
		<Flex bgColor="cultured">
			<Stepper index={activeStep} orientation='vertical' height='400px' gap='0' size="md" colorScheme="blackAlpha">
				{steps.map((step, index) => (
					<Step key={index}>
						<StepIndicator>
							<StepStatus
								complete={<RoadmapEllipseGreen />}
								incomplete={<RoadmapEllipseOrange />}
								active={<RoadmapEllipseGreen />}
							/>
						</StepIndicator>

						<Box flexShrink='0'>
							<StepTitle>
								<Heading
									as="h4"
									color="keppel"
									fontFamily="body"
									fontSize="18px"
									lineHeight="20px"
								>{step.title}
								</Heading>

							</StepTitle>
							<StepDescription>{step.description}</StepDescription>
						</Box>

						<StepSeparator />
					</Step>
				))}
			</Stepper>
		</Flex>
	)
}
