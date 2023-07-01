import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

import ButtonPressed from "@/ui/button/button-pressed";
import Card from "@/ui/card";

export default function MainSimplifier() {
  return (
    <Box py="16" id="benefits">
      <Flex justifyContent="end">
        <Box minWidth="114px" minHeight="228px" hideBelow="md" hideFrom="lg" backgroundImage="/owls/MyOwly.png" backgroundSize="228px 228px" backgroundRepeat="no-repeat" backgroundPosition="right" ></Box>
        <Heading as="h2" textTransform="uppercase" fontSize="6xl" fontWeight="extrabold" color="vampire-black" lineHeight="1" pl={{ base: "8", md: 0, lg: "8" }} pr={{ base: "8", lg: "0" }} textAlign="end">
          <Text as="span" color="white" textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)">En quoi </Text>
          allons nous
          <Text as="span" color="white" textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)"> vous </Text>
          simplifier la vie
          <Text as="span" color="white" textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)"> ?</Text>
        
        </Heading>
        <Box minWidth="114px" minHeight="228px" hideBelow="lg" backgroundImage="/owls/MyOwly.png" backgroundSize="228px 228px" backgroundRepeat="no-repeat" ></Box>
      </Flex>
    
      <Flex flexDirection={{ base:"column", lg: "row"}} p="4">
        <Card align="left">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            Des
            <Text as="span" color="indian-yellow" fontWeight="extrabold"> provisions </Text><br/>
            et non<br/>
            <Text as="span" color="fulvous" fontWeight="extrabold">des cotisations</Text>
          </Heading>
          <Text color="vampire-black">Changeons votre perception et reprenez confiance. Ici, l&apos;argent versé reste la propriété de l&apos;utilisateur.</Text>
        </Card>

        <Card align="right">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            Une
            <Text as="span" color="indian-yellow" fontWeight="extrabold"> transparance<br/>totale </Text>
            envers<br/>
            <Text as="span" color="fulvous" fontWeight="extrabold"> l&apos;utilisateur</Text>
          </Heading>
          <Text color="vampire-black">Ici, vous comprenez exactement ce que vous payez et ce que vous pouvez attendre en retour. Vous pouvez à tout moment consulter les liquidités disponibles.</Text>
        </Card>
        
        <Card align="left">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            Jusqu&apos;à<br/>
            <Text as="span" color="indian-yellow" fontWeight="extrabold"> -90% </Text>
            <Text as="span" color="fulvous" fontWeight="extrabold"> de frais</Text>
          </Heading>
          <Text color="vampire-black">Un système automatisé réduisant drastiquement les coûts notamment par la suppression de nombreux frais d&apos;intermédiaires.</Text>
        </Card>
      </Flex>

      <Center p="8">
        <Box maxWidth="400px">
        {/* <ButtonPressed>Déroulement du projet</ButtonPressed> */}
        <ButtonPressed href="#joinUs">Rejoindre la Newsletter</ButtonPressed>
        </Box>
      </Center>      
    </Box>
  )
}
