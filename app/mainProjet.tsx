import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

import ButtonPressed from "@/ui/button/button-pressed";
import Card from "@/ui/card";

export default function MainProjet() {
  return (
    <Box py="100px" id="project">
      <Flex
        flexDirection={[null, null, null, "row-reverse"]}
        justifyContent={[null, null, null, "flex-end", "center"]}
        position={[null, null, null, "relative", "inherit"]}
        right="140px"
      >
        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize={["80px", "100px", "120px", "144px"]}
          fontWeight="400"
          fontFamily="heading"
          color="vampire-black"
          lineHeight="1"
          pl={["22px", null, null, "0"]}
          minWidth={["80vw", null, null, "inherit"]}
          maxWidth="1120px"
          letterSpacing="-2.4px"
        >
          Pourquoi
          <Text
            as="span"
            color="white"
            textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)"
          > avons nous décidé de </Text>
          changer les choses
          <Text
            as="span"
            color="white"
            textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)"
          > ? </Text>
        </Heading>
        <Image
          alt=""
          height={["334px", "434px"]}
          width={["300px", "400px"]}
          src="/owls/MyOwly.png"
          position={["relative", null, null, "inherit"]}
          right={["70px", "83px"]}
          top={["35px"]}
        />
      </Flex>

      <Flex flexDirection={{ base: "column", lg: "row" }} p="4" justifyContent="center">
        <Card align="right">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            Une sinistralité<br />
            <Text as="span" color="indian-yellow" fontWeight="extrabold"> de plus en plus </Text><br />
            <Text as="span" color="fulvous" fontWeight="extrabold">importante</Text>
          </Heading>
          <Text color="vampire-black">Les changements climatiques ont entraîné une augmentation des événements météorologiques extrêmes tels que les tempêtes, les inondations, les sécheresses...</Text>
        </Card>

        <Card align="left">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            Des prises en charge<br />
            <Text as="span" color="indian-yellow" fontWeight="extrabold"> très </Text>
            <Text as="span" color="fulvous" fontWeight="extrabold"> limitées </Text>
          </Heading>
          <Text color="vampire-black">Des acteurs ne pouvant pas apporter des réponses efficaces. Des obstacles techniques, la complexité des produits d&apos;assurance, une perte de confiance, une augmentation des coûts...</Text>
        </Card>

        <Card align="right">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            Des solutions<br />
            <Text as="span" color="indian-yellow" fontWeight="extrabold"> centralisées </Text>
            pour<br />
            un problème<br />
            <Text as="span" color="fulvous" fontWeight="extrabold"> collectif </Text>
          </Heading>
          <Text color="vampire-black">Nous pensons que les meilleures réponses viendront des communautés. Les individus travaillant ensemble sont plus susceptibles de trouver des réponses adaptées aux problèmes qu&apos;ils rencontrent.</Text>
        </Card>
      </Flex>

      <Flex
        flexDirection={["column", null, null, "row"]}
        justifyContent="center"
        marginTop={[null, null, null, "100px"]}
        marginX={["20px", null, null, 0]}
        gap={["10px", null, null, "124px"]}
      >
        <ButtonPressed href="#benefits">Quels sont mes avantages ?</ButtonPressed>
        <ButtonPressed href="#joinUs">Rester informé</ButtonPressed>
      </Flex>
    </Box >
  )
}
