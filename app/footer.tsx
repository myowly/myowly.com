"use client"

import { Box, Button, Center, Flex, Heading, Image, Link, Text, VStack, Grid, GridItem, FormControl, Checkbox, Input, FormLabel, Divider } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box w="100%" bgColor="cultured">
      <Box w="100%" bgGradient="linear(to-b, sherwood-green, black-bean, sherwood-green)" borderTopRadius="xl">
        <Box
          display={{ base: "block", md: "block" }}
          w="fit-content"
          boxShadow="0 0 10px var(--chakra-colors-keppel)"
          bgColor="keppel"
          left={{
            base: '20%',
            md: '40%'
          }}
          right={{
            base: '20%',
            md: '40%'
          }}
          ml="auto"
          mr="auto"
          borderRadius="6"
          zIndex="1"
          position='absolute'
          bottom={{
            md: '440px',
            base: '14.5%'
          }}
        >
          <Center
            backgroundColor="transparent"
            m={0}
            p={{
              base: '1',
              md: '2'
            }}
            display="flex"
            flexDirection="row"
          >
            <Link href="https://app.myowly.com"><Image as="img" src="/reseaux/discord.svg" w="30" h="30" alt="Logo Discord" m="3" /></Link>
            <Link href="https://app.myowly.com"><Image as="img" src="/reseaux/twitter.svg" w="30" h="30" alt="Logo Twitter" m="3" /></Link>
            <Link href="https://app.myowly.com"><Image as="img" src="/reseaux/reddit.svg" w="30" h="30" alt="Logo Reddit" m="3" /></Link>
            <Link href="https://app.myowly.com"><Image as="img" src="/reseaux/github-white.svg" w="30" h="30" alt="Logo Github" m="3" /></Link>
          </Center>
        </Box>
        <Flex pt="10" pl="12">
          <Box flex="1" display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent="space-around">
            <Box maxWidth="500px" mb={8}>
              <Image mb={4} pt={{ base: '2', md: "4" }} pr={{ base: '10', md: "28" }} src="/Logo.png" alt="Logo MyOwly" />
              <Heading as='h4' mb={4} textTransform='uppercase' color='HighlightText'>Le projet MyOwly</Heading>
              <Box display='flex' flexDirection='column' justifyContent='start' textAlign='start'>
                <Link
                  href="#"
                  textTransform="uppercase"
                  cursor="pointer"
                  color="cultured"
                  mb={{ base: '2' }}
                >
                  Découvrir le projet MyOwly
                </Link>
                <Link
                  href="#"
                  textTransform="uppercase"
                  cursor="pointer"
                  color="cultured"
                  mb={{ base: '2' }}
                >
                  Suivre la communauté
                </Link>
                <Link
                  href="#"
                  textTransform="uppercase"
                  cursor="pointer"
                  color="cultured"
                  mb={{ base: '2' }}
                >
                  Rejoindre la Newsletter
                </Link>
                <Link
                  href="#"
                  textTransform="uppercase"
                  cursor="pointer"
                  color="cultured"
                  mb={{ base: '2' }}
                >
                  Roadmap
                </Link>
                <Link
                  href="#"
                  textTransform="uppercase"
                  cursor="pointer"
                  color="cultured"
                >
                  L&apos;équipe
                </Link>
              </Box>
            </Box>
            <Box pr="14" maxWidth="500px" display='flex' flexDirection='column' justifyContent='end' textAlign='end'>
              <Heading as="h4" mb={4} textTransform="uppercase" lineHeight="1">
                <Text as="span" color="indian-yellow" fontSize="4xl"> Rester connecté </Text>
                <Text as="span" color="cultured" fontSize="4xl"> avec notre </Text>
                <Text as="span" color="fulvous" fontSize="4xl">newsletter </Text>
              </Heading>
              <FormControl isRequired mb={4}>
                <Input bgColor='white' _placeholder={{ color: 'vampire-black' }} color='vampire-black' type='text' placeholder='Votre Nom' />
              </FormControl>
              <FormControl isRequired mb={4}>
                <Input bgColor='white' _placeholder={{ color: 'vampire-black' }} color='vampire-black' type='email' placeholder='Votre Email' />
              </FormControl>
              <FormControl isRequired mb={4} display='flex' flexDirection='row' justifyContent='space-between'>
                <Checkbox isRequired iconColor='white' color='white' mr='1rem'>
                </Checkbox>
                <FormLabel color='white' as='label' fontSize='sm' fontStyle={{ base: 'italic', }}>J’accepte que mes informations soient stockées et utilisées pour m&apos;enregistrer et participer à la newsletter Myowly.</FormLabel>
              </FormControl>
              <Button
                type='submit'
                mb={4}
                color='keppel'
                bgColor='white'
                textTransform='uppercase'
                borderBottom='4px solid'
                borderColor='keppel'
                _hover={{
                  borderBottom: '4px white solid',
                  bgColor: 'keppel',
                  color: 'white',
                }}
              >
                Envoyer
              </Button>
            </Box>
          </Box>
        </Flex>
        <VStack ml='4%' mr='4%' mt={4}>
          <Divider variant='solid' borderWidth={2} borderColor='indian-yellow' />
        </VStack>
        <Flex pt="2" pl="12" display='flex'>
          <Box flex="1" display="flex" alignItems="center" flexDirection={{base:'row-reverse',md:'row'}} justifyContent="space-between">
            <Box maxWidth="500px" mb={{base:'4',md:'6'}} ml={{base:'0',md:'7%'}}>
              <Text justifyContent='start' display={{ base: 'none', md: 'flex' }} alignItems='start' textAlign='start' color='white'>Copyright © 2023 MYOWLY. Tous droits réservés.</Text>
              <Text justifyContent='start' display={{base:'flex',md:'none'}} alignItems='start' textAlign='start' fontSize='xs' color='white'>2023 MYOWLY. Tous droits réservés.</Text>
            </Box>
            <Box pr="14" maxWidth="500px" display='flex' flexDirection='row' fontSize={{base:'xs',md:'auto'}} justifyContent='end' textAlign='end' mr={{sm:'0',md:'7%'}} mb={{base:'2',md:'6'}}>
              <Link
                href="#"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                textDecoration='underline'
                mr={{ base: '6' }}
                display={{
                  base: 'none',
                  md: 'flex'
                }}
              >
                Conditions
              </Link>
              <Link
                href="#"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                textDecoration='underline'
                ml={{base:'0',md:'8'}}
              >
                Confidentialité
              </Link>
              <Link
                href="#"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                textDecoration='underline'
                ml={8}
              >
                Cookies
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}