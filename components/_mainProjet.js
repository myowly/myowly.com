import { Grid, Text, chakra, Heading, Image, GridItem, Button, Box } from "@chakra-ui/react";

export default function MainProjet() {
    return (
         <Grid
            display='flex'
            templateColumns='repeat(3, 1fr)'
            justifyContent='center'
            alignItems='center'
            flexDirection="column"
            w='100%'
        >
            <GridItem
                colSpan={3}
                justifyContent='start'
                alignItems='start'
                textAlign='left'
                position='absolute'
            >
                <Image as='img' src="/owls/MyOwly.png" width='320px' h='354px' alt="Chouette MyOwly" />
            </GridItem>
        </Grid>
    )
}