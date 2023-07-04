import { Box, Center, Flex, Heading, Text, Image } from "@chakra-ui/react";

import ButtonPressed from "@/ui/button/button-pressed";
import Card from "@/ui/card";

export default function MainSimplifier() {
  return (
    <Box py="100px" id="benefits">
      <Flex
        flexDirection={[null, null, null, "row-reverse"]}
        justifyContent={["flex-end", null, null, "flex-start", "center"]}
        position={[null, null, null, "relative", "inherit"]}
        left="140px"
      >
        <Image
          alt=""
          height={["334px", "434px"]}
          width={["300px", "400px"]}
          src="/owls/MyOwly.png"
          position={["relative", null, null, "inherit"]}
          left={["55px", "83px"]}
        />
        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize={["80px", "100px", "120px", "144px"]}
          fontWeight="400"
          fontFamily="heading"
          color="vampire-black"
          lineHeight="1"
          pr={["22px", null, null, "0"]}
          minWidth={["80vw", null, null, "inherit"]}
          maxWidth="1120px"
          letterSpacing="-2.4px"
          textAlign="right"
        >
          <Text as="span" color="white" textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)">En quoi </Text>
          allons nous
          <Text as="span" color="white" textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)"> vous </Text>
          simplifier la vie
          <Text as="span" color="white" textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)"> ?</Text>
        </Heading>
      </Flex>

      <Flex flexDirection={{ base: "column", lg: "row" }} p="4" justifyContent="center">
        <Card align="left">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            Des
            <Text as="span" color="indian-yellow" fontWeight="extrabold"> provisions </Text><br />
            et non<br />
            <Text as="span" color="fulvous" fontWeight="extrabold">des cotisations</Text>
          </Heading>
          <Text color="vampire-black">Changeons votre perception et reprenez confiance. Ici, l&apos;argent versé reste la propriété de l&apos;utilisateur.</Text>
        </Card>

        <Card align="right">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            Une
            <Text as="span" color="indian-yellow" fontWeight="extrabold"> transparance<br />totale </Text>
            envers<br />
            <Text as="span" color="fulvous" fontWeight="extrabold"> l&apos;utilisateur</Text>
          </Heading>
          <Text color="vampire-black">Ici, vous comprenez exactement ce que vous payez et ce que vous pouvez attendre en retour. Vous pouvez à tout moment consulter les liquidités disponibles.</Text>
        </Card>

        <Card align="left">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            Jusqu&apos;à<br />
            <Text as="span" color="indian-yellow" fontWeight="extrabold"> -90% </Text>
            <Text as="span" color="fulvous" fontWeight="extrabold"> de frais</Text>
          </Heading>
          <Text color="vampire-black">Un système automatisé réduisant drastiquement les coûts notamment par la suppression de nombreux frais d&apos;intermédiaires.</Text>
        </Card>
      </Flex>

      <Flex
        flexDirection={["column", null, null, "row"]}
        justifyContent="center"
        marginTop={[null, null, null, "100px"]}
        gap="124px"
      >
        <ButtonPressed href="#roadmap">Déroulement du projet</ButtonPressed>
        <ButtonPressed href="#joinUs">Rejoindre la Newsletter</ButtonPressed>
      </Flex>
    </Box >
  )
}
