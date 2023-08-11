'use client'

import { Box, Container, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import ButtonLink from "@/ui/button/button-link";
import Beak from "@/svg/beak";
import ButtonPageUp from "@/ui/button/button-page-up";
import LinkMailTo from "@/ui/link-mail-to";
import Footer from '../_footer';

export default function Page() {
  return (
    <>

      <Flex justifyContent="center" pt="8" pb="4" position="fixed" borderBottomRadius="xl" w="100%" backgroundColor="cultured" zIndex="99" boxShadow="0px 0px 20px 0px #46E0BB">
        <ButtonLink href="/" minWidth={[null, null, null, "500px"]}>Retour à l&apos;accueil</ButtonLink>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="stretch"
        bgGradient="linear(to-b, black-bean 71%, sherwood-green 100%)"
        borderBottomRadius="xl"
        pt="140px"
        px="6"
        pb="6"
      >
        <Container
          p={0}
          centerContent
          maxWidth={[null, null, null, "1300px", "1400px"]}
          alignItems="stretch"
          position="relative"
        >

          <Heading
            as="h1"
            textTransform="uppercase"
            fontSize={["60px", "90px", "110px", "130px", "150px"]}
            fontWeight="400"
            color="cultured"
            maxWidth="600px"
            lineHeight="1"
            mb={["16", "24"]}
          >
            Mentions légales
          </Heading>

          <Icon as={Beak}
            w={["24", "32", "44", "52"]}
            h="auto"
            position="absolute"
            right={["-2"]}
            bottom="2"
          />
        </Container>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="stretch"
        p="6"
        mb="20"
      >
        <Container
          p={0}
          centerContent
          maxWidth={[null, null, null, "1300px", "1400px"]}
          alignItems="stretch"
        >
          <Box maxWidth="800px">
            <Heading
              as="h2"
              mt="16"
              mb="4"
              maxWidth="600px"
              textTransform="uppercase"
              fontSize={["40px", "60px"]}
              fontWeight="400"
              color="indian-yellow"
              lineHeight="1"
            >
              SelfCare
            </Heading>
            <Text color="vampire-black" lineHeight="1.5">SAS au capital de 15 000€</Text>
            <Text color="vampire-black" lineHeight="1.5">RCS TROYES 537 407 926</Text>
            <Text color="vampire-black" lineHeight="1.5">Code APE 6201Z</Text>
            <Text color="vampire-black" lineHeight="1.5">N° TVA&nbsp;: FR 79 951 671 452</Text>
            <Text color="vampire-black" mb="6" lineHeight="1.5">Siège social&nbsp;: 2 rue Gustave Eiffel - 10430 Rosières-Près-Troyes - France</Text>

            <Text color="vampire-black" mb="2" lineHeight="1.5">Président&nbsp;: Jean-Sébastien LEFEVRE</Text>
            <Text color="vampire-black" mb="6" lineHeight="1.5">Mail&nbsp;: <LinkMailTo /></Text>

            <Heading
              as="h2"
              mt="16"
              mb="4"
              maxWidth="600px"
              textTransform="uppercase"
              fontSize={["40px", "60px"]}
              fontWeight="400"
              color="fulvous"
              lineHeight="1"
            >
              Conditions d&apos;utiliation du site internet myowly.com
            </Heading>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Le site et chacun des éléments, y compris mais sans limitation les marques, les logos, icônes, infographies, photographies, qui le composent sont protégés au titre de la législation internationale de la propriété intellectuelle.
              Les contenus figurant sur le site sont la propriété de SelfCare ou d&apos;autres entreprises.
              Toute utilisation, reproduction ou représentation, par quelque procédé que ce soit, et sur quelque support que ce soit, de tout ou partie du site et/ou des éléments qui le composent n&apos;est pas autorisée sans le consentement expresse de SelfCare.
            </Text>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              La marque MyOwly le logo MyOwly et toutes les autres marques MyOwly qui figurent sur le présent site internet sont des marques enregistrées, dont le titulaire est la société SelfCare.
              Toutes les autres marques qui figurent sur le présent site internet sont la propriété de leurs titulaires respectifs.
            </Text>

            <Heading
              as="h2"
              mt="16"
              mb="4"
              maxWidth="600px"
              textTransform="uppercase"
              fontSize={["40px", "60px"]}
              fontWeight="400"
              color="spanish-orange"
              lineHeight="1"
            >
              Données personnelles
            </Heading>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              D&apos;une façon générale, vous pouvez visiter notre site sur Internet sans avoir à décliner votre identité et à fournir des informations personnelles vous concernant.
              Cependant, nous pouvons parfois vous demander des informations.
              Par exemple, pour traiter une commande, établir une correspondance, fournir un abonnement ou soumettre une candidature à un poste.
              Nous pouvons compléter ces informations pour conclure une transaction ou offrir un meilleur service.
            </Text>

            <Heading
              as="h2"
              mt="16"
              mb="4"
              maxWidth="600px"
              textTransform="uppercase"
              fontSize={["40px", "60px"]}
              fontWeight="400"
              color="saddle-brown"
              lineHeight="1"
            >
              Politique de protection des données
            </Heading>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Consultez la page Politique de confidentialité de MyOwly.
            </Text>
          </Box>
          <Flex justifyContent="center" >
            <ButtonLink href="/fr/privacy" minWidth={[null, null, null, "500px"]}>Politique de confidentialité</ButtonLink>
          </Flex>
        </Container>
      </Flex>

      <Footer />

      <ButtonPageUp />
    </>
  )
}
