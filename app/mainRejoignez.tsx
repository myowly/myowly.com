import { Box, Button, Center, Checkbox, Flex, FormControl, FormLabel, Heading, Icon, Input, Image, Text } from "@chakra-ui/react";

import ButtonSocialNetwork from "@/ui/button/button-social-network"

import Beak from "@/svg/beak"

export default function MainRejoignez() {
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
          ml={{ md: "32"}}
          maxWidth="450px"
          border="1px solid var(--chakra-colors-cultured)"
          borderRadius="32"
          bgGradient="linear(110.72deg, rgba(255, 255, 255, 0.36) 1.21%, rgba(196, 196, 196, 0.06) 100%);"
          backdropFilter="blur(10px)"
          color="cultured"
          position="relative"
        >
          <Icon as={Beak} width="auto" height="20" position="absolute" top="-10" right="8" />

          <Text fontStyle="italic">Qu&apos;attendez-vous ? ...</Text>
          <Heading as="h2" textTransform="uppercase" fontSize="3xl" my="2" lineHeight="1">Rejoingez-nous</Heading>
          
          <Text my="8" textTransform="uppercase" fontSize="xl" fontWeight="bold">
            <Text as="span" color="indian-yellow">Restez connecté</Text>
            avec notre
            <Text as="span" color="fulvous"> newsletter</Text>
          </Text>

          <form>
            <FormControl isRequired mb={4}>
              <Input
                type="text"
                color="vampire-black"
                bgColor="cultured"
                placeholder='Votre nom'
                _placeholder={{ color: "vampire-black" }} 
              />
            </FormControl>
            <FormControl isRequired mb={4}>
              <Input
                type="email"
                color="vampire-black"
                bgColor="cultured"
                placeholder='Votre email'
                _placeholder={{ color: "vampire-black" }} 
              />
            </FormControl>
            <FormControl isRequired mb="4" display="flex" flexDirection="row" justifyContent="space-between">
              <Checkbox iconColor="cultured" color="cultured" mr="4" />
              <FormLabel color="cultured" as="label" fontSize="sm" fontStyle="italic">J&apos;accepte que mes informations soient stockées et utilisées pour m&apos;enregistrer et participer à la newsletter Myowly.</FormLabel>
            </FormControl>

            <Button
              type="submit"
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
              Envoyer
            </Button>
          </form>
          <Center>
            <Box
              my="2"
              borderRadius="lg"
              backgroundColor="cultured"
              boxShadow="0 0 5px var(--chakra-colors-cultured)"
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              position="absolute"
              bottom="-9"
              
            >
              <ButtonSocialNetwork socialNetwork="Discord" />
              <ButtonSocialNetwork socialNetwork="Twitter" />
              {/* <ButtonSocialNetwork socialNetwork="Reddit" /> */}
              <ButtonSocialNetwork socialNetwork="Github" />
            </Box>
          </Center>
        </Box>
      </Flex>
    </Box>
  )
}
