import { Box, Button, Center, Flex, Heading, Image, Link, Text } from "@chakra-ui/react"

import ButtonBeak from "@/ui/button/button-beak"
import ButtonSocialNetwork from "@/ui/button/button-social-network"

export default function Hero() {
  return (
    <Box w="100%" bgColor="cultured">
      <Box w="100%" bgGradient="linear(to-b, sherwood-green, black-bean, sherwood-green)" borderBottomRadius="xl">
        <Flex pt="10" pl="8">
          <Box flex="1" display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent="space-around">
            <Box maxWidth="500px">
              <Image mb={4} pt="4" pr="28" src="/Logo.png" alt="Logo MyOwly" />
            </Box>
            <Box pr="14">
              <Box hideFrom="md">
                <Link
                  href="#joinUs"
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
              {/*
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
              */}
            </Box>
            <Box hideBelow="md" border="1px solid" borderColor="keppel" borderRadius="14" mr={{ base: "0", md: "4" }}>
              <Link
                href="#joinUs"
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
                <ButtonSocialNetwork socialNetwork="Discord" />
                <ButtonSocialNetwork socialNetwork="LinkedIn" />
                <ButtonSocialNetwork socialNetwork="Twitter" />
                {/* <ButtonSocialNetwork socialNetwork="Reddit" /> */}
                <ButtonSocialNetwork socialNetwork="Github" />
              </Center>
            </Box>
          </Box>
          <Box hideFrom="md">
            <Center
              backgroundColor="keppel"
              m={0}
              display="flex"
              borderStartRadius={14}
              boxShadow="0 0 10px var(--chakra-colors-keppel)"
              flexDirection="column"
              zIndex="1"
            >
              <ButtonSocialNetwork socialNetwork="Discord" />
              <ButtonSocialNetwork socialNetwork="LinkedIn" />
              <ButtonSocialNetwork socialNetwork="Twitter" />
              {/* <ButtonSocialNetwork socialNetwork="Reddit" /> */}
              <ButtonSocialNetwork socialNetwork="Github" />
            </Center>
          </Box>
        </Flex>

        <Center pt="8" px="8" display="flex" flexDirection={{ base: "column", md: "row" }}>
          <Heading as="h1" textTransform="uppercase" fontSize="6xl" fontWeight="extrabold" color="cultured" lineHeight="0.8" >
            Soyez
            <Text as="span" color="vampire-black" textShadow="-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"> votre </Text><br />
            meilleur<br />
            <Text as="span" color="vampire-black" textShadow="-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"> assureur </Text>
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
            <Text as="span" color="indian-yellow" fontSize="4xl"> révolutionne </Text>
            <Text as="span" color="fulvous" fontSize="5xl"> l&apos;assurance </Text>
          </Heading>

          <Text mb={12}>
            Que vous cherchiez à vous protéger contre les risques naturels, les pertes financières ou toute autre situation imprévue, notre assurance paramétrique est là pour vous aider.
          </Text>

          <ButtonBeak mb="4" href="#DAO">En savoir plus</ButtonBeak>
          <ButtonBeak mb="14" href="#joinUs">Se tenir informé</ButtonBeak>
        </Box>
      </Box>
    </Box>
  )
}
