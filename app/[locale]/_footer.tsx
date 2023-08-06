import { Box, Center, Container, Divider, Flex, Heading, Image, Link, Text } from "@chakra-ui/react"
import { useTranslations } from 'next-intl';

import ButtonSocialNetwork from "@/ui/button/button-social-network"

import FormNewsletter from './_formNewsletter'


export default function Footer() {
  const t = useTranslations('Home.Footer');

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

            <Heading as='h4' mb="4" textTransform="uppercase" color="cultured">{ t('summary.title') }</Heading>

            <Flex flexDirection="column">
              <Link
                href="#project"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                mb="2"
              >
                { t('summary.links.project') }
              </Link>
              <Link
                href="#community"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                mb="2"
              >
                { t('summary.links.community') }
              </Link>
              <Link
                href="#joinUs"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                mb="2"
              >
                { t('summary.links.newsletter') }
              </Link>
              <Link
                href="#roadmap"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                mb="2"
              >
                { t('summary.links.roadmap') }
              </Link>
              <Link
                href="#team"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
                mb="2"
              >
                { t('summary.links.team') }
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
              <Text as="span" color="indian-yellow">{ t('form.title.part_1') }</Text><br />
              { t('form.title.part_2') }
              <Text as="span" color="fulvous">{ t('form.title.part_3') }</Text>
            </Text>

            <FormNewsletter />
          </Box>
        </Flex>

        <Divider variant="solid" border="2" borderColor="indian-yellow" mt="10" mb="2" />

        <Flex flexDirection={["column", null, "row"]} justifyContent="space-between" alignItems="baseline">
          <Flex flexDirection={["column", null, "row"]}>
            <Link
              href="/fr/legal"
              fontSize="xs"
              textTransform="uppercase"
              cursor="pointer"
              color="cultured"
              my={["2", null, "0"]}
              mr={["0", null, "2"]}
            >
              Mentions légales
            </Link>
            <Link
              href="/fr/privacy"
              fontSize="xs"
              textTransform="uppercase"
              cursor="pointer"
              color="cultured"
              my={["2", null, "0"]}
              mx={["0", null, "2"]}
            >
              Confidentialité
            </Link>
          </Flex>
          <Text
            color="cultured"
            fontSize="xs"
            alignSelf={["center"]}
            my="1"
          >
            Copyright © 2023 MYOWLY. Tous droits réservés.
          </Text>
        </Flex>        
      </Container>
    </Flex>
  )
}