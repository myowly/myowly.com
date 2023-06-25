import { Box, Button, Center, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";

import ButtonSocialNetwork from "@/ui/button/button-social-network"

import Beak from "@/svg/beak"

export default function MainCommunauté() {
  return (
    <Box w="100%" bgColor="cultured">
      <Flex
        py="14"
        w="100%"
        bgGradient="linear(to-b, sherwood-green, black-bean, sherwood-green)"
        borderRadius="xl"
        justifyContent={{ base: "center", md: "start"}}
        position="relative"
      >
        <Flex
          hideFrom="md"
          position="absolute"
          top="0"
          w="100%"
          h="100%"
          justifyContent="center"
        >
          <Image as="img" src="/Cristals_2.png" alt="Cristaux" m="4" height="80%" />
          <Image as="img" src="/Cristals_2.png" alt="Cristaux" m="4" height="80%" mt="auto" />
        </Flex>

        <Box
          hideBelow="md"
          position="absolute"
          top="40%"
          w="100%"
          h="40%"
          backgroundImage="/Cristals_2b.png"
          backgroundRepeat="repeat-x"
          backgroundSize="auto"
        >
        </Box>

        <Box
          p="10"
          m="8"
          maxWidth="450px"
          border="1px solid var(--chakra-colors-cultured)"
          borderRadius="32"
          bgGradient="linear(110.72deg, rgba(255, 255, 255, 0.36) 1.21%, rgba(196, 196, 196, 0.06) 100%);"
          backdropFilter="blur(10px)"
          color="cultured"
          position="relative"
        >
          <Icon as={Beak} width="auto" height="20" position="absolute" top="-10" right="8" />

          <Heading as="h2" textTransform="uppercase" fontSize="3xl" my="2" lineHeight="1">Rejoingez la communauté</Heading>
          
          <Text mt="8" textTransform="uppercase" fontSize="xl" fontWeight="bold">
            sur nos
            <Text as="span" color="indian-yellow"> réseaux sociaux</Text>
          </Text>
          <Center
            my="2"
            borderRadius="lg"
            backgroundColor="cultured"
            boxShadow="0 0 5px var(--chakra-colors-cultured)"
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
          >
            <ButtonSocialNetwork socialNetwork="Discord" />
            <ButtonSocialNetwork socialNetwork="Twitter" />
            <ButtonSocialNetwork socialNetwork="Reddit" />
            <ButtonSocialNetwork socialNetwork="Github" />
          </Center>

          <Text mt="8" textTransform="uppercase" fontSize="xl" fontWeight="bold">
            avec notre
            <Text as="span" color="fulvous"> newsletter</Text>
          </Text>
          <Button
            my="2"
            width="100%"
            bgColor="cultured"
            borderBottom="4px solid"
            borderColor="keppel"
            boxShadow="0 0 5px var(--chakra-colors-cultured)"
            color="keppel"
            textTransform="uppercase"
            _hover={{
              bgColor: "keppel",
              borderBottom: "4px solid",
              borderColor: "cultured",
              boxShadow: "0 0 5px var(--chakra-colors-keppel)",
              color: "cultured",
            }}
          >
            Je m&apos;inscris
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
