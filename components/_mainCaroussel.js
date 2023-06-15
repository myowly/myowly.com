import { Grid, Text, chakra, Heading, Image, GridItem, Button, Box } from "@chakra-ui/react";

export default function MainCaroussel() {
    return (
        <Grid
            display='flex'
            templateColumns='repeat(3, 1fr)'
            justifyContent='center'
            alignItems='center'
            flexDirection="column"
        >
            <GridItem
                position='absolute'
                zIndex='-1'
            >
                <Image as='img' src="/backgrounds/field.webp" w='100%' h='auto' margin='auto' alt='Plaine' />
            </GridItem>
            <Box position='relative'>Blabla</Box>
        </Grid>
    )
}