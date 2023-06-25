import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

import ButtonPressed from "@/ui/button/button-pressed";
import Card from "@/ui/card";

export default function MainProjet() {
  return (
    <Box py="16" id="project">
      <Flex>
        <Box minWidth="114px" minHeight="228px" hideBelow="lg" backgroundImage="/owls/MyOwly.png" backgroundSize="228px 228px" backgroundRepeat="no-repeat" backgroundPosition="right" ></Box>
        <Heading as="h2" textTransform="uppercase" fontSize="6xl" fontWeight="extrabold" color="vampire-black" lineHeight="1" pl={{ base: "8", lg: 0 }}>
          Pourquoi
          <Text as="span" color="white" textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)"> avons nous décidé de </Text>
          changer les choses
          <Text as="span" color="white" textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)"> ? </Text>
        </Heading>
        <Box minWidth="114px" minHeight="228px" hideBelow="md" hideFrom="lg" backgroundImage="/owls/MyOwly.png" backgroundSize="228px 228px" backgroundRepeat="no-repeat" ></Box>
      </Flex>
      
      <Flex flexDirection={{ base:"column", lg: "row"}} p="4">
        <Card align="right">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            Une sinistralité<br/>
            <Text as="span" color="indian-yellow" fontWeight="extrabold"> de plus en plus </Text><br/>
            <Text as="span" color="fulvous" fontWeight="extrabold">importante</Text>
          </Heading>
          <Text color="vampire-black">Les changements climatiques ont entraîné une augmentation des événements météorologiques extrêmes tels que les tempêtes, les inondations, les sécheresses...</Text>
        </Card>

        <Card align="left">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            Des prises en charge<br/>
            <Text as="span" color="indian-yellow" fontWeight="extrabold"> très </Text>
            <Text as="span" color="fulvous" fontWeight="extrabold"> limitées </Text>
          </Heading>
          <Text color="vampire-black">Des acteurs ne pouvant pas apporter des réponses efficaces. Des obstacles techniques, la complexité des produits d&apos;assurance, une perte de confiance, une augmentation des coûts...</Text>
        </Card>
          
        <Card align="right">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            Des solutions<br/>
            <Text as="span" color="indian-yellow" fontWeight="extrabold"> centralisées </Text>
            pour<br/>
            un problème<br/>
            <Text as="span" color="fulvous" fontWeight="extrabold"> collectif </Text>
          </Heading>
          <Text color="vampire-black">Nous pensons que les meilleures réponses viendront des communautés. Les individus travaillant ensemble sont plus susceptibles de trouver des réponses adaptées aux problèmes qu&apos;ils rencontrent.</Text>
        </Card>
      </Flex>

      <Center p="8">
        <Box maxWidth="400px">
          <ButtonPressed href="#benefits">Quels sont mes avantages ?</ButtonPressed>
          <ButtonPressed href="#joinUs">Rester informé</ButtonPressed>
        </Box>
      </Center>      
    </Box>
  )
}
