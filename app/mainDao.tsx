import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import ButtonPressed from "@/ui/button/button-pressed";

export default function MainDAO() {
  return (
    <Box mb="8">
      <Flex flexDirection={{ base:"column", md: "row"}} justifyContent="space-around"  alignItems="center" px="16" py="8">
        <Box maxWidth="500px" px={{ base:"0", md: "8"}}>
          <Image as="img" src="/Logotype-Noir.png" alt="MyOwly" />
        </Box>
        
        <Heading as="h2" textTransform="uppercase" color="vampire-black" fontSize="xl" p="8">
          <Box whiteSpace="nowrap">
            et si
            <Text as="span" color="indian-yellow" fontSize="4xl"> on reprenait</Text>
          </Box>
          <Box whiteSpace="nowrap">
            <Text as="span" color="fulvous" fontSize="5xl">le contrôle </Text>
            ?
          </Box>        
        </Heading>
      </Flex>

      <Box position={{ md: "relative"}}>
        <Box maxWidth="500px" p="8" my={{ md: "4"}} mx={{ base: "auto", md: "28"}} bgColor="white">
          <Heading as="h3" textTransform="uppercase" color="vampire-black" fontSize="4xl" mb="4">
            <Box whiteSpace="nowrap">
              <Text as="span" color="fulvous" fontWeight="extrabold">Une DAO </Text>
              appuyée
            </Box>
            <Box whiteSpace="nowrap">
              <Text as="span">sur </Text>
              <Text as="span" color="fulvous" fontSize="5xl" fontWeight="extrabold" textDecoration="underline">un oracle</Text>
            </Box>        
          </Heading>

          <Text color="vampire-black" mb="4">
            Les membres de la communauté versent les sommes au sein d&apos;une DAO dont ils ont la gestion.
            Les prix et les conditions de réalisation des indemnisations sont réalisés automatiquement par un oracle.
          </Text>

          <ButtonPressed>Comment ça marche ?</ButtonPressed>
          <ButtonPressed>Rester en relation</ButtonPressed>
        </Box>

        <Box position={{ md: "absolute"}} top="20" zIndex="-1" w="100%">
          <Flex flexDirection="row" overflow="hidden">
            <Image as="img" w="228px" h="auto" src="/owls/MyOwly.png" alt="Chouette MyOwly" />
            <Image as="img" w="228px" h="auto" src="/owls/MaitreBois.png" alt="Chouette MaitreBois" />
            <Image as="img" w="228px" h="auto" src="/owls/Moyen-Duc.png" alt="Chouette Moyen-Duc" />
            <Image as="img" w="228px" h="auto" src="/owls/DesMarais.png" alt="Chouette DesMarais" />
            <Box flex="auto" bgImage="/owls/DesMarais.png" backgroundRepeat="repeat-x" backgroundSize="auto 100%" />
          </Flex>
        </Box>
      </Box>
      
    </Box>
  )
}
