import { Grid, Text, chakra, Heading, Image, GridItem, Button, Box } from "@chakra-ui/react";

export default function MainCommunauté() {
    return (
        <Grid
            display='flex'
            templateColumns='repeat(3, 1fr)'
            justifyContent='center'
            alignItems='center'
            flexDirection="column"
            w='100%'
            bgGradient='linear(-10deg, #3BBFA1 -23%, #081B17 10%, #081B17 80%, #3BBFA1)'
        >
            <GridItem
                boxSize='xl'
                display='flex'
                transform='rotate(90deg)'
                justifyContent='start'
                alignItems='start'
                ml={0}
                mr='16em'
                mb={6}
                mt={6}
                borderTopLeftRadius={14}
                borderTopRightRadius={14}
            >
                <Image as='img' src="/cristaux.png" alt="cristaux" />
                <Box position='relative'>Blabla</Box>
            </GridItem>
        </Grid>
    )
}
