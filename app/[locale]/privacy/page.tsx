'use client'

import Beak from "@/svg/beak";
import ButtonLink from "@/ui/button/button-link";
import ButtonPageUp from "@/ui/button/button-page-up";
import LinkMailTo from "@/ui/link-mail-to";
import { Box, Container, Flex, Heading, Icon, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="stretch"
        bgGradient="linear(to-b, black-bean 71%, sherwood-green 100%)"
        borderBottomRadius="xl"
        p="8"
      >
        <Container
          p={0}
          centerContent
          maxWidth={[null, null, null, "1300px", "1400px"]}
          alignItems="stretch"
          position="relative"
        >
          <Flex justifyContent="center" mb="12">
            <ButtonLink href="/" minWidth={[null, null, null, "500px"]}>Retour à l&apos;accueil</ButtonLink>
          </Flex>
          
          <Heading
            as="h1"
            textTransform="uppercase"
            fontSize={["60px", "65px", "110px", "130px", "150px"]}
            fontWeight="extrabold"
            color="cultured"
            maxWidth={["400px", null, "700px", "900px", "1000px"]}
            lineHeight="0.9"
            mb="8"
          >
            Politique de confidentialité de MyOwly
          </Heading>

          <Text
            textTransform="uppercase"
            fontWeight="bold"
            color="cultured"
            maxWidth="600px"
            mb="2"
          >
            Date de dernière mise à jour
          </Text>
          <Text
            textTransform="uppercase"
            color="cultured"
            maxWidth="600px"
            mb={["8", "16"]}
          >
            08/07/2023
          </Text>

          <Icon as={Beak}
            w={["24", "32", "44", "52"]}
            h="auto"
            position="absolute"
            right={["-6", "-2"]}
            bottom="2"
          />
        </Container>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="stretch"
        p="8"
        mb="16"
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
              Introduction
            </Heading>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              La présente politique de confidentialité explique comment MyOwly collecte, utilise, partage et protège les informations personnelles des utilisateurs de son site web.
              Votre vie privée est importante pour nous, et nous nous engageons à protéger vos informations personnelles.
            </Text>
            <Text color="vampire-black" mb="6" lineHeight="1.5" fontWeight="bold">
              Veuillez lire attentivement cette politique pour comprendre nos pratiques concernant vos données personnelles et comment nous les traitons.
            </Text>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter à l&apos;adresse suivante&nbsp;:
            </Text>
            <Text color="vampire-black" lineHeight="1.5">Nom&nbsp;: Jean-Sébastien LEFEVRE</Text>
            <Text color="vampire-black" mb="6" lineHeight="1.5">Adresse e-mail&nbsp;: <LinkMailTo /></Text>

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
              Collecte des données personnelles
            </Heading>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Lorsque vous utilisez notre site web et vous inscrivez à notre newsletter, nous pouvons collecter les types de données personnelles suivants&nbsp;:
            </Text>
            <UnorderedList mb="6" px="4" fontSize="lg">
              <ListItem>Prénom</ListItem>
              <ListItem>Nom</ListItem>
              <ListItem>Adresse email</ListItem>
            </UnorderedList>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Nous collectons ces informations lorsque vous vous inscrivez sur notre site web par le biais de notre formulaire de newsletter.
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
              Utilisation des données personnelles
            </Heading>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Les données personnelles collectées par MyOwly sont utilisées aux fins suivantes&nbsp;:
            </Text>
            <UnorderedList mb="6" px="4" fontSize="lg">
              <ListItem>vous envoyer des newsletters et des informations sur nos produits et services&nbsp;;</ListItem>
              <ListItem>communiquer avec vous nos dernières actualités.</ListItem>
            </UnorderedList>

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
              Partage des données
            </Heading>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Nous ne partageons pas vos informations personnelles avec des tiers à des fins de marketing.
            </Text>

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
              Localisation des données
            </Heading>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Vos informations personnelles sont stockées et traitées en France. En utilisant notre site web et en fournissant vos informations, vous consentez au transfert, au stockage et au traitement de vos données en France.
            </Text>

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
              Sécurité des données
            </Heading>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Nous avons mis en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre toute utilisation, divulgation ou accès non autorisé.
              Nous utilisons des protocoles de sécurité standard pour assurer la confidentialité et l&apos;intégrité de vos données.
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
              Droits des utilisateurs
            </Heading>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              En tant qu&apos;utilisateur de notre site web, vous avez certains droits concernant vos données personnelles.
              Vous avez le droit d&apos;accéder, de rectifier ou d&apos;effacer vos données personnelles.
            </Text>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Vous pouvez également vous opposer au traitement de vos données personnelles.
              Si vous souhaitez exercer l&apos;un de ces droits, veuillez nous contacter à l&apos;adresse suivante&nbsp;:
            </Text>
            <Text mb="6" px="4" lineHeight="1.5">
              <LinkMailTo />
            </Text>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Nous ferons de notre mieux pour répondre à votre demande dans les meilleurs délais.
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
              Protection des personnes mineures
            </Heading>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Notre site web est accessible aux personnes mineures, mais il n&apos;est absolument pas destiné à ce public d&apos;utilisateur. Nous encourageons les parents et tuteurs à surveiller les activités en ligne de leurs enfants et à participer à leurs interactions sur Internet pour assurer une expérience en ligne sécurisée.
            </Text>

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
              Politique de l&apos;utilisation des cookies
            </Heading>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Comme la plupart des sites Web modernes, nos Services utilisent des cookies.
              Les cookies sont de petits fichiers enregistrés sur votre ordinateur, qui permettent à nos Services de vous reconnaître lorsque vous naviguez sur notre site Web. 
            </Text>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Ils nous permettent d&apos;exécuter des analyses pour mieux comprendre comment les utilisateurs utilisent nos services, ce qui nous permet de résoudre les problèmes techniques et d&apos;améliorer l&apos;expérience utilisateur.
            </Text>
            {/*
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Lorsque vous visitez notre site Web pour la première fois, une option vous est proposée pour savoir quels cookies vous souhaitez enregistrer.
              Vous pouvez toujours modifier votre réponse en accédant à LINK.
              Si vous désactivez des cookies que vous aviez déjà activés, ces cookies seront supprimés.
            </Text>
            */}

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
              Modifications de la politique de confidentialité
            </Heading>
            <Text color="vampire-black" mb="6" lineHeight="1.5">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
              Toute modification entrera en vigueur immédiatement après sa publication sur notre site web.
              Il est de votre responsabilité de consulter régulièrement notre politique de confidentialité pour rester informé des éventuelles modifications.
            </Text>
          </Box>

          <Flex
            mt="16"
            justifyContent="center"
          >
            <Box
              m="auto"
              p="8"
              maxWidth="700px"
              borderRadius="16"
              boxShadow="0px -2px 5px var(--chakra-colors-cultured)"
            >
              <Heading
                as="h3"
                mb="4"
                textTransform="uppercase"
                fontSize={["30px", "45px"]}
                fontWeight="400"
                color="keppel"
                lineHeight="1"
              >
                Contactez-nous
              </Heading>
              <Text color="vampire-black" mb="6" lineHeight="1.5">
                Si vous avez des questions, des commentaires ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter à l&apos;adresse suivante&nbsp;:
              </Text>
              <Text px="4" lineHeight="1.5">
                <LinkMailTo />
              </Text>
            </Box>
          </Flex>
        </Container> 
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="stretch"
        bgGradient="linear(to-b, sherwood-green 0%, black-bean 33%)"
        borderTopRadius="xl"
        p="8"
      >
        <Container
          p={0}
          centerContent
          maxWidth={[null, null, null, "1300px", "1400px"]}
          alignItems="stretch"
          position="relative"
        >
          <Flex justifyContent="center" >
            <ButtonLink href="/" minWidth={[null, null, null, "500px"]}>Retour à l&apos;accueil</ButtonLink>
          </Flex>
        </Container>
      </Flex>
      
      <ButtonPageUp />
    </>
  )
}
