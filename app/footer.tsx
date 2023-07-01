import { Box, Button, Center, Checkbox, Container, Divider, Flex, FormControl, FormLabel, Heading, Image, Input, Link, Text } from "@chakra-ui/react"

import ButtonSocialNetwork from "@/ui/button/button-social-network"

export default function Footer() {
  return (
    <Flex
      flexDirection="column"
      alignItems="stretch"
      bgGradient="linear(to-b, sherwood-green 0%, black-bean 33%, black-bean 71%, sherwood-green 100%)"
      borderTopRadius="xl"
      position="relative"
      p="8"
    >
      <Container
        p={0}
        centerContent
        maxWidth={[null, null, null, "1300px", "1400px"]}
        alignItems="stretch"
      >
        <Center>
          <Box
            my="2"
            borderRadius="lg"
            backgroundColor="keppel"
            boxShadow="0 0 5px var(--chakra-colors-cultured)"
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            position="absolute"
            top="-9"

          >
            <ButtonSocialNetwork socialNetwork="Discord" />
            <ButtonSocialNetwork socialNetwork="LinkedIn" />
            <ButtonSocialNetwork socialNetwork="Twitter" />
            {/* <ButtonSocialNetwork socialNetwork="Reddit" /> */}
            <ButtonSocialNetwork socialNetwork="Github" />
          </Box>
        </Center>
        
        <Flex
          mt="16"
          flexDirection={["column", null, "row"]}
          justifyContent="space-around"
        >
          <Box
            flexGrow="1"
            flexBasis="0"
            maxWidth="500px"
          >
            <Box maxWidth="500px">
              <Image
                mb="8"
                pt={[null, "16px"]}
                pr={["50px", "112px"]}
                src="/Logo.png"
                alt="Logo MyOwly"
              />
            </Box>

            <Heading as='h4' mb="4" textTransform="uppercase" color="cultured">Le projet MyOwly</Heading>

            <Flex flexDirection="column">
              <Link
                href="#project"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                mb="2"
              >
                Découvrir le projet MyOwly
              </Link>
              <Link
                href="#community"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                mb="2"
              >
                Suivre la communauté
              </Link>
              <Link
                href="#joinUs"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                mb="2"
              >
                Rejoindre la Newsletter
              </Link>
              {/* <Link
                href="#"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                mb="2"
              >
                Roadmap
              </Link> */}
              <Link
                href="#team"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                mb="2"
              >
                L&apos;équipe
              </Link>
            </Flex>
          </Box>
          
          <Divider hideFrom="md" variant="solid" border="2" borderColor="indian-yellow" my="2" />

          <Box
            flexGrow="1"
            flexBasis="0"
            maxWidth="500px"
          >
            <Text my="8" textTransform="uppercase" fontSize="xl" fontWeight="bold" textAlign={["start", null, "end"]}>
              <Text as="span" color="indian-yellow">Rester connecté </Text><br />
              avec notre
              <Text as="span" color="fulvous"> newsletter</Text>
            </Text>
            
            <form>
              <FormControl isRequired mb={4}>
                <Input
                  type="text"
                  color="vampire-black"
                  bgColor="cultured"
                  placeholder="Votre nom"
                  _placeholder={{ color: "vampire-black" }}
                />
              </FormControl>
              <FormControl isRequired mb={4}>
                <Input
                  type="email"
                  color="vampire-black"
                  bgColor="cultured"
                  placeholder="Votre email"
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
          </Box>
        </Flex>

        <Divider variant="solid" border="2" borderColor="indian-yellow" mt="10" mb="2" />

        <Text color="cultured" fontSize="xs" mb="1">Copyright © 2023 MYOWLY. Tous droits réservés.</Text>
      </Container>
    </Flex>
  )
}