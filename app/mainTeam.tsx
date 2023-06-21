import { Grid, Text, chakra, Heading, Image, GridItem, Button, Box } from "@chakra-ui/react";

export default function MainTeam() {
    return (
        <Grid
            display='flex'
            templateColumns='repeat(4, 1fr)'
            justifyContent='center'
            alignItems='center'
            flexDirection="column"
            w='100%'
            bgColor='#F6F6F6'
            pt={6}
        >
            <GridItem
                colSpan={4}
            >
                <Heading as='h2' color='black' textTransform='uppercase'>L&apos;équipe MyOwly</Heading>
            </GridItem>
            <GridItem colSpan={2}>
                <Box
                    bgGradient='linear(to-b, white 0%, white 20%, #3bbfa1 100%)'
                    borderRadius='50%'
                    width='164px'
                    height='164px'
                    justifyContent='center'
                    alignItems='center'
                    textAlign='center'
                    position='relative'
                    ml='auto'
                    mr='auto'
                    zIndex='0'
                >
                    <Image backgroundColor='white' ml='auto' mr='auto' borderRadius='50%' as='img' src="/team/jean-sebastien.png" alt="Photo de Jean-Sébastien" width='160px' height='160px' />
                </Box>
                <Box
                    bgGradient='linear(to-b, #3bbfa1 0%, #3bbfa1 20%, white 100%)'
                    borderRadius='2rem'
                    width='202px'
                    height='222px'
                    justifyContent='center'
                    alignItems='center'
                    textAlign='center'
                    bottom={20}
                >
                    <Box
                        borderRadius='2rem'
                        width='198px'
                        height='218px'
                        bgColor='white'
                        ml='auto'
                        mr='auto'
                    >

                    </Box>
                </Box>
            </GridItem>
        </Grid>
    )
}
