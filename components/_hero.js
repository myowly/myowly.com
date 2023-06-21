"use client"

import { Box, Button, Center, Flex, Heading, Image, Link, Text } from "@chakra-ui/react"

export default function Hero() {
  return (
    <Box w="100%" bgColor="cultured" pb="5">
      <Box w="100%" bgGradient="linear(to-b, sherwood-green, black-bean, sherwood-green)" borderBottomRadius="xl">
        <Flex pt="10" pl="8">
          <Box flex="1" display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent="space-around">
            <Box maxWidth="500px">
              <Image mb={4} pt="4" pr="28" src="/Logo.png" alt="Logo MyOwly"  />
            </Box>
            <Box pr="14">
              <Box display={{ base: "inherit", md: "none" }}>
                <Link
                  href="#"
                  textTransform="uppercase"
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                  color="cultured"
                >
                  <Image
                    as="img"
                    src="/arrow.svg"
                    w={3}
                    h={3}
                    mr="2"
                    alt="Petite flèche"
                  />
                  Rejoindre la Newsletter
                </Link>
              </Box>
              <Link
                href="#"
                textTransform="uppercase"
                display="flex"
                alignItems="center"
                cursor="pointer"
                color="cultured"
              >
                <Image
                  as="img"
                  src="/arrow.svg"
                  w={3}
                  h={3}
                  mr="2"
                  alt="Petite flèche"
                />
                Découvrir l&apos;équipe
              </Link>
            </Box>
            <Box display={{ base: "none", md: "block" }} border="1px solid" borderColor="keppel" borderRadius="14" mr={{ base: "0", md: "4" }}>
              <Link
                href="#"
                textTransform="uppercase"
                alignItems="center"
                cursor="pointer"
                color="cultured"
                bgColor="keppel"
                borderRadius="15"
                border="1px solid"
                borderColor="keppel"
                whiteSpace="nowrap"
                p="2"
                boxShadow="0 0 10px var(--chakra-colors-keppel)"
              >
                Rejoindre la Newsletter
              </Link>
              <Center
                backgroundColor="transparent"
                m={0}
                p="2"
                display="flex"
                flexDirection="row"
              >
                <Link href="https://app.myowly.com"><Image as="img" src="/reseaux/discord.svg" w="30" h="30" alt="Logo Discord" m="3" /></Link>
                <Link href="https://app.myowly.com"><Image as="img" src="/reseaux/twitter.svg" w="30" h="30" alt="Logo Twitter" m="3" /></Link>
                <Link href="https://app.myowly.com"><Image as="img" src="/reseaux/reddit.svg" w="30" h="30" alt="Logo Reddit" m="3" /></Link>
                <Link href="https://app.myowly.com"><Image as="img" src="/reseaux/github-white.svg" w="30" h="30" alt="Logo Github" m="3" /></Link>
              </Center>
            </Box>
          </Box>
          <Box display={{ base: "inherit", md: "none" }}>
            <Center
              backgroundColor="keppel"
              m={0}
              p="2"
              display="flex"
              borderStartRadius={14}
              boxShadow="0 0 10px var(--chakra-colors-keppel)"
              flexDirection="column"
              zIndex="1"
            >
              <Link href="https://app.myowly.com"><Image as="img" src="/reseaux/discord.svg" w="30" h="30" alt="Logo Discord" mb="3" /></Link>
              <Link href="https://app.myowly.com"><Image as="img" src="/reseaux/twitter.svg" w="30" h="30" alt="Logo Twitter" mb="3" /></Link>
              <Link href="https://app.myowly.com"><Image as="img" src="/reseaux/reddit.svg" w="30" h="30" alt="Logo Reddit" mb="3" /></Link>
              <Link href="https://app.myowly.com"><Image as="img" src="/reseaux/github-white.svg" w="30" h="30" alt="Logo Github" /></Link>
            </Center>
          </Box>
        </Flex>
        
        <Center pt="8" px="8" display="flex" flexDirection={{ base: "column", md: "row" }}>
          <Heading as="h1" textTransform="uppercase" fontSize="5xl" color="cultured" lineHeight="1">
            Soyez
            <Text as="span" color="sherwood-green" textShadow="-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"> votre </Text><br/>
            meilleur<br/>
            <Text as="span" color="sherwood-green" textShadow="-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"> assureur </Text>
          </Heading>
          <Box display="flex">
            <Image as="img" src="/island.png" w="350" h="350" alt="Island 3D Model" transform={{ base: "translateY(-50px);", md: "translateY(30px)" }} />
            <Image as="img" src="/Cristals.png" w="320" h="165" alt="Cristals" transform={{ base: "translate(-60px, -80px);", md: "translate(-400px, -20px) rotate(0.80turn)" }} />
          </Box>
        </Center>
        
        <Box display="flex" justifyContent="center" pt={{ base: "0", md: "14" }} pb="14">
          <Image as="img" w="16.45" h="auto" src="/arrow-white.svg" alt="Owl Arrow Down" />
        </Box>    

        <Box px="8" maxWidth="500px" m="auto">
          <Heading as="h2" mb={4} textTransform="uppercase" lineHeight="1">
            <Text as="span" color="cultured" fontSize="4xl"> La Blockchain </Text>
            <Text as="span"color="indian-yellow" fontSize="4xl"> révolutionne </Text>
            <Text as="span"color="fulvous" fontSize="5xl"> l&apos;assurance </Text>
          </Heading>
          
          <Text mb={12} color="cultured">
            Que vous cherchiez à vous protéger contre les risques naturels, les pertes financières ou toute autre situation imprévue, notre assurance paramétrique est là pour vous aider.
          </Text>

          <Button background="transparent" mb={4} border="1px solid" borderColor="keppel" borderRadius={16} w="100%" justifyContent="space-between" boxShadow="0 0 10px var(--chakra-colors-keppel)">
            <Image as="img" w="auto" h="27" src="/bec.svg" alt="Owl Bec" />
            <Text as="p" color="keppel" textTransform="uppercase" fontWeight="bold">En savoir plus</Text>
            <Image as="img" w="auto" h="27" src="/bec.svg" alt="Owl Bec" />
          </Button>

          <Button mb="6rem" background="transparent" border="1px solid" borderColor="keppel" borderRadius={16} w="100%" justifyContent="space-between" boxShadow="0 0 10px var(--chakra-colors-keppel)">
            <Image as="img" w="auto" h="27" src="/bec.svg" alt="Owl Bec" />
            <Text as="p" color="keppel" textTransform="uppercase" fontWeight="bold">Se tenir informé</Text>
            <Image as="img" w="auto" h="27" src="/bec.svg" alt="Owl Bec" />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}