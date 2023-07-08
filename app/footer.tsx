import { Box, Button, Center, Checkbox, Container, Divider, Flex, FormControl, FormLabel, Heading, Image, Input, Link, Text } from "@chakra-ui/react"

import ButtonSocialNetwork from "@/ui/button/button-social-network"

import FormNewsletter from './formNewsletter'

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
              <Link
                href="#roadmap"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                mb="2"
              >
                Roadmap
              </Link>
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

            <FormNewsletter />
          </Box>
        </Flex>

        <Divider variant="solid" border="2" borderColor="indian-yellow" mt="10" mb="2" />

        <Flex justifyContent="space-between" alignItems="baseline">
          <Text color="cultured" fontSize="xs" mb="1">Copyright © 2023 MYOWLY. Tous droits réservés.</Text>
          <Link
            href="/legal"
            fontSize="xs"
            textTransform="uppercase"
            cursor="pointer"
            color="cultured"
            mb="1"
          >
            Mentions légales
          </Link>
        </Flex>        
      </Container>
    </Flex>
  )
}
