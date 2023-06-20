'use client'

import { Box, Heading, Image, Link, Grid, GridItem, Text, Button } from '@chakra-ui/react'

export default function Hero() {
    return (
        <Grid
            templateColumns='repeat(3, 1fr)'
            bgGradient='linear(-10deg, #3BBFA1 -23%, #081B17 10%, #081B17 80%, #3BBFA1)'
            justifyContent='center'
            alignItems='center'
            p={4}
            borderBottomLeftRadius={14}
            borderBottomRightRadius={14}
        >
            <GridItem
                as="div"
                colSpan={2}
                mt={28}
                mb={16}
            >
                <Image mb={4} src='../Logo.png' alt='Logo MyOwly' />
                <Link
                    href='#'
                    textTransform="uppercase"
                    display="inline-flex"
                    cursor="pointer"
                    color='white'
                >
                    <Image
                        as='img'
                        src='/arrow.svg'
                        w={4}
                        h={4}
                        alt='Petite flèche'
                        _hover={{
                            textDecoration: "underline",
                        }}
                    />
                    &nbsp;Rejoindre la Newsletter
                </Link>
                <br />
                <Link
                    href='#'
                    textTransform="uppercase"
                    display="inline-flex"
                    color='white'
                >
                    <Image
                        as='img'
                        src='/arrow.svg'
                        w={4}
                        h={4}
                        alt='Petite flèche'
                        _hover={{
                            textDecoration: "underline",
                        }}
                    />
                    &nbsp;Découvrir l&apos;équipe
                </Link>
            </GridItem>
            <GridItem
                display="flex"
                as="aside"
                colSpan={1}
                mt={2}
                mr={-4}
                justifyContent="right"
            >
                <Box
                    backgroundColor='#3BBFA1'
                    filter="drop-shadow(0 0 0.50rem #3BBFA1)"
                    h="max-content"
                    m={0}
                    w="fit-content"
                    p={2}
                    display="flex"
                    borderTopLeftRadius={8}
                    borderBottomLeftRadius={8}
                    flexDirection="column"
                    position="fixed"
                    zIndex='1'
                >
                    <Image as='img' src='/reseaux/discord.svg' w={30} h={30} alt='Logo Discord' mb={3} />
                    <Image as='img' src='/reseaux/twitter.svg' w={30} h={30} alt='Logo Twitter' mb={3} />
                    <Image as='img' src='/reseaux/reddit.svg' w={30} h={30} alt='Logo Reddit' mb={3} />
                    <Image as='img' src='/reseaux/github-white.svg' w={30} h={30} alt='Logo Github' />
                </Box>
            </GridItem>
            <GridItem
                colSpan={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                ml='auto'
                mr='auto'
            >
                <Box>
                    <Heading as="h1" textTransform="uppercase" color='white'>Soyez votre meilleur assureur</Heading>
                    <Image as="img" src='/island.png' w="350" h="350" alt='Island 3D Model' />
                </Box>
                <Box>
                    <Image as="img" src='/Cristals.png' w="160.94" h="82.77" alt='Cristals' />
                </Box>
            </GridItem>
            <GridItem
                colSpan={3}
                display="flex"
                justifyContent="right"
                alignItems="right"
                flexDirection="row"
            >
                <Image position='fixed' as="img" w="35" h="auto" src='/page-up.svg' alt='Page-Up Arrows' />
            </GridItem>
            <GridItem
                colSpan={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                mb={14}
            >
                <Image as="img" w="16.45" h="auto" src='/arrow-white.svg' alt='Owl Arrow Down' />
            </GridItem>
             <GridItem
                colSpan={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                flexDirection="column"
                ml="auto"
                mr="auto"
            >
                <Heading mb={4} as="h2" textTransform="uppercase" color='orange'>La Blockchain révolutionne l&apos;assurance</Heading>
                <Text textAlign='justify' mb={12}>Que vous cherchiez à vous protéger contre les risques naturels, les pertes financières ou toute autres situations imprévue, notre assurance paramétrique est là pour vous aider.</Text>
                <Button background="transparent" mb={4} border="1px solid #3BBFA1" borderRadius={16} w="100%" justifyContent="space-between">
                    <Image as="img" w="auto" h="27" src='/bec.svg' alt='Owl Bec' />
                    <Text as="p" color="#3BBFA1" textTransform="uppercase" fontWeight="bold">&nbsp;&nbsp;En savoir plus&nbsp;&nbsp;</Text>
                    <Image as="img" w="auto" h="27" src='/bec.svg' alt='Owl Bec' />
                </Button>
                <Button mb='6rem' background="transparent" border="1px solid #3BBFA1" borderRadius={16} w="100%" justifyContent="space-between">
                    <Image as="img" w="auto" h="27" src='/bec.svg' alt='Owl Bec' />
                    <Text as="p" color="#3BBFA1" textTransform="uppercase" fontWeight="bold">&nbsp;&nbsp;Se tenir informé&nbsp;&nbsp;</Text>
                    <Image as="img" w="auto" h="27" src='/bec.svg' alt='Owl Bec' />
                </Button>
            </GridItem>
        </Grid>
    )
}