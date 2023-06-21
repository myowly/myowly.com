import { Grid, Text, chakra, Heading, Image, GridItem, Button } from "@chakra-ui/react";

export default function MainMessage() {
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
                justifyContent='end'
                alignItems='end'
                textAlign='end'
                p={4}
                mt={16}
            >
                <Heading as='p' color='black' fs='l' textTransform='uppercase' fontWeight='regular'>
                    Utilisez&nbsp;<chakra.span fontStyle='italic' fontWeight='thin'>les</chakra.span><br />
                    <chakra.span fontStyle='italic' fontWeight='thin'>dernières<br />technologies&nbsp;</chakra.span>pour<br />
                    vous offrir&nbsp;<chakra.span fontWeight='bold'>une protection&nbsp;</chakra.span><chakra.span fontWeight='bold' fontStyle='italic' color='#E67A04'>adaptée<br />à vos besoins.</chakra.span>
                </Heading>
            </GridItem>
            <GridItem
                transform='rotate(-90deg)'
                mt={0}
                mb={0}
            >
                <Image src="/Cristals.png" alt="encore des petits cristaux" />
            </GridItem>
            <GridItem
                colSpan={3}
                justifyContent='center'
                alignItems='center'
                textAlign='center'
                p={4}
            >
                <Heading as='p' color='black' fs='l' textTransform='uppercase' fontWeight='regular'>
                    <chakra.span fontWeight='bold'>Concentre-vous</chakra.span><br />
                    sur ce qui compte<br />
                    <chakra.span fontWeight='bold' color='#3BBFA1'>vraiment.</chakra.span>
                </Heading>
            </GridItem>
            <GridItem
                transform='rotate(90deg)'
                mt={0}
                mb={0}
            >
                <Image src="/Cristals.png" alt="encore des petits cristaux" />
            </GridItem>
            <GridItem
                colSpan={3}
                justifyContent='start'
                alignItems='start'
                textAlign='start'
                p={4}
                mb={12}
            >
                <Heading as='p' color='black' fs='l' textTransform='uppercase' fontWeight='regular'>
                    Une protection<br />
                    <chakra.span fontStyle='italic' fontWeight='bold' color='#E67A04'>d&apos;entreprises</chakra.span>&nbsp;et<br />
                    de&nbsp;<chakra.span fontStyle='italic' fontWeight='bold' color='#E46500'>particuliers</chakra.span><br />
                    <chakra.span fontWeight='bold'>sur mesure</chakra.span><br />
                    et&nbsp;<chakra.span fontWeight='bold'>sécurisée.</chakra.span>
                </Heading>
            </GridItem>
        </Grid>
    )
}
