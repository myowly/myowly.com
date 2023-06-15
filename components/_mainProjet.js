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
            bgColor='#F6F6F6'
        >
            <GridItem
                colSpan={3}
                justifyContent='start'
                alignItems='start'
                textAlign='left'
            >
                <Image as='img' src="/owls/MyOwly.png" width='320px' h='354px' alt="Chouette MyOwly" />
                <Heading as='h2' textTransform='uppercase' color='black'>Pourquoi&nbsp;
                    <chakra.span
                        textShadow='0 0 4px black'
                        color='white'
                    >
                        avons nous décidé de
                    </chakra.span>
                    &nbsp;changer les choses ?
                </Heading>
            </GridItem>
        </Grid>
    )
}