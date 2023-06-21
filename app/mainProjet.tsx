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
                <Heading as='h2' textTransform='uppercase' color='black' mb={14}>Pourquoi&nbsp;
                    <chakra.span
                        textShadow='0 0 4px black'
                        color='white'
                    >
                        avons nous décidé de
                    </chakra.span>
                    &nbsp;changer les choses&nbsp;
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
                justifyContent='end'
                alignItems='end'
                textAlign='end'
                p={4}
            >
                <Heading as='h3' textTransform='uppercase' color='black' mb={4}>
                    Une sinistralité<br />
                    <chakra.span color='#EE9E4E'>de plus en plus</chakra.span><br />
                    <chakra.span color='#E67A04'>importante</chakra.span>
                </Heading>
                <Text color='black'>Les changements climatiques ont entraîné une augmentation des événements météorologiques extrêmes tels que les tempêtes, les inondations, les sécheresses...</Text>
            </GridItem>
            <GridItem
                colSpan={3}
                justifyContent='start'
                alignItems='start'
                textAlign='start'
                p={4}
            >
                <Heading as='h3' textTransform='uppercase' color='black' mb={4}>
                    Des prises en charge&nbsp;
                    <chakra.span color='#EE9E4E'>très</chakra.span><br />
                    <chakra.span color='#E67A04'>limitées</chakra.span>
                </Heading>
                <Text color='black'>Des acteurs ne pouvant pas apporter des réponses efficaces. Des obstacles techniques, la complexité des produits d&apos;assurance, une perte de confiance, une augmentation des coûts...</Text>
            </GridItem>
            <GridItem
                colSpan={3}
                justifyContent='end'
                alignItems='end'
                textAlign='end'
                p={4}
            >
                <Heading as='h3' textTransform='uppercase' color='black' mb={4}>
                    Des solutions<br />
                    <chakra.span color='#EE9E4E'>centralisées</chakra.span>&nbsp;pour<br />un problème<br />
                    <chakra.span color='#E67A04'>collectif</chakra.span>
                </Heading>
                <Text color='black'>Nous pensons que les meilleures réponses viendront des communautés. Les individus travaillant ensemble sont plus susceptibles de trouver des réponses adaptées aux problèmes qu&apos;ils rencontrent.</Text>
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
                    <Text as="p" color="#3BBFA1" textTransform="uppercase" fontWeight="bold">Quels sont mes avantages ?</Text>
                </Button>
                <Button background="transparent" boxShadow='inset 1px 0.5px 2px black, inset -1px 2px 2px white' borderRadius={16} w="100%" justifyContent="center" mb={14}>
                    <Text as="p" color="#3BBFA1" textTransform="uppercase" fontWeight="bold">Rester informé</Text>
                </Button>
            </GridItem>
        </Grid>
    )
}
