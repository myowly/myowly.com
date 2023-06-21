import { Grid, Text, chakra, Heading, Image, GridItem, Button } from "@chakra-ui/react";

export default function MainDAO() {
    return (
        <Grid
            templateColumns='repeat(3, 1fr)'
            bgColor='#F6F6F6'
            justifyContent='center'
            alignItems='center'
            p={4}
            w='100%'
        >
            <GridItem
                colSpan={3}
                mb={3}
            >
                <Image as='img' w="max-content" h="auto" src='/Logotype-Noir.png' alt='Logotype MyOwly' />
            </GridItem>
            <GridItem
                colSpan={3}
                mb={20}
            >
                <Heading as='h2' w='max-content' color='black' textTransform='uppercase'>
                    <chakra.span fontSize='xl' fontWeight='extrabold'>Et si</chakra.span>&nbsp;
                    <chakra.span fontSize='3xl' color='#EE9E4E'>on reprenait</chakra.span><br />
                    <chakra.span fontSize='4xl' color='#E67A04'>le contrôle</chakra.span>&nbsp;
                    <chakra.span fontSize='xl'>?</chakra.span>
                </Heading>
            </GridItem>
            <GridItem
                colSpan={3}
                mb={2}
            >
                <Heading as='h3' w='max-content' color='black' textTransform='uppercase'>
                    <chakra.span fontWeight='extrabold' color='#E67A04'>Une DAO</chakra.span>&nbsp;appuyée<br />
                    <chakra.span fontSize='4xl'>sur&nbsp;<chakra.span fontWeight='extrabold' textDecoration='underline' color='#E46500'>un oracle</chakra.span></chakra.span>
                </Heading>
            </GridItem>
            <GridItem
                colSpan={3}
                mb={12}
            >
                <Text color='black' fontWeight='medium'>Les membres de la communauté versent les sommes au sein d’une DAO dont ils ont la gestion. Les prix et les conditions de réalisation des indemnisations sont réalisés automatiquement par un oracle.</Text>
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
                    <Text as="p" color="#3BBFA1" textTransform="uppercase" fontWeight="bold">Comment ça marche ?</Text>
                </Button>
                <Button background="transparent" boxShadow='inset 1px 0.5px 2px black, inset -1px 2px 2px white' borderRadius={16} w="100%" justifyContent="center">
                    <Text as="p" color="#3BBFA1" textTransform="uppercase" fontWeight="bold">Rester en relation</Text>
                </Button>
            </GridItem>
            <GridItem
                colSpan={3}
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                flexDirection="row"
                flexWrap="wrap"
            >
                <Image as='img' w='228px' h='auto' src='/owls/MyOwly.png' alt="Chouette MyOwly" />
                <Image as='img' w='228px' h='auto' src='/owls/Moyen-Duc.png' alt="Chouette Moyen-Duc" />
                <Image as='img' w='228px' h='auto' src='/owls/MaitreBois.png' alt="Chouette MaitreBois" />
                <Image as='img' w='228px' h='auto' src='/owls/DesMarais.png' alt="Chouette DesMarais" />
            </GridItem>
        </Grid>
    )
}
