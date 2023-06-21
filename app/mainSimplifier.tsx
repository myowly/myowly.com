import { Grid, Text, chakra, Heading, Image, GridItem, Button, Box } from "@chakra-ui/react";

export default function MainSimplifier() {
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
                <Heading as='h2' textTransform='uppercase' color='black' mb={14}>
                    <chakra.span
                        textShadow='0 0 4px black'
                        color='white'
                    >
                        En quoi
                    </chakra.span>
                    &nbsp;allons nous&nbsp;
                    <chakra.span
                        textShadow='0 0 4px black'
                        color='white'
                    >
                        vous
                    </chakra.span>
                    &nbsp;simplifier la vie&nbsp;
                    <chakra.span
                        textShadow='0 0 4px black'
                        color='white'
                    >
                        ?
                    </chakra.span>
                </Heading>
            </GridItem>
            <GridItem
                colSpan={3}
                justifyContent='start'
                alignItems='start'
                textAlign='start'
                p={4}
            >
                <Heading as='h3' textTransform='uppercase' color='black' mb={4}>
                    Des&nbsp;
                    <chakra.span color='#EE9E4E'>provisions</chakra.span><br />
                    et non<br />des&nbsp;
                    <chakra.span color='#E67A04'>cotisations</chakra.span>
                </Heading>
                <Text color='black'>Changeons votre perception et reprenez confiance. Ici, l&apos;argent versé reste la propriété de l&apos;utilisateur. </Text>
            </GridItem>
            <GridItem
                colSpan={3}
                justifyContent='end'
                alignItems='end'
                textAlign='end'
                p={4}
            >
                <Heading as='h3' textTransform='uppercase' color='black' mb={4}>
                    Une&nbsp;
                    <chakra.span color='#EE9E4E'>transparance<br />totale&nbsp;</chakra.span>
                    envers<br />
                    <chakra.span color='#E67A04'>l&apos;utilisateur</chakra.span>
                </Heading>
                <Text color='black'>Ici, vous comprenez exactement ce que vous payez et ce que vous pouvez attendre en retour. Vous pouvez à tout moment consulter les liquidités disponibles.</Text>
            </GridItem>
            <GridItem
                colSpan={3}
                justifyContent='start'
                alignItems='start'
                textAlign='start'
                p={4}
            >
                <Heading as='h3' textTransform='uppercase' color='black' mb={4}>
                    Jusqu&apos;à<br />
                    <chakra.span color='#EE9E4E'>-90%&nbsp;</chakra.span>
                    <chakra.span color='#E67A04'>de frais</chakra.span>
                </Heading>
                <Text color='black'>Un système automatisé réduisant drastiquement les coûts notamment par la suppression de nombreux frais d&apos;intermédiaires.</Text>
            </GridItem>
            <GridItem
                colSpan={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                flexDirection="column"
            >
                <Button mb={6} background="transparent" boxShadow='inset 1px 0.5px 2px black, inset -1px 2px 2px white' borderRadius={16} w="100%" justifyContent="center">
                    <Text as="p" color="#3BBFA1" textTransform="uppercase" fontWeight="bold">Déroulement du projet</Text>
                </Button>
                <Button background="transparent" boxShadow='inset 1px 0.5px 2px black, inset -1px 2px 2px white' borderRadius={16} w="100%" justifyContent="center" mb={14}>
                    <Text as="p" color="#3BBFA1" textTransform="uppercase" fontWeight="bold">Rejoindre la Newsletter</Text>
                </Button>
            </GridItem>
        </Grid>
    )
}
