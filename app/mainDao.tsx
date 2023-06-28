import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

import ButtonPressed from "@/ui/button/button-pressed";

export default function MainDAO() {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      mb="8"
      id="DAO"
      minHeight={[null, null, null, null, "100vh"]}
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={["space-between", null, null, null, "space-around"]}
        alignItems="center"
        px={["20px", null, "50px"]}
        pt="50px"
      >
        <Box maxWidth="500px" pr={[null, null, "30px"]}>
          <Image as="img" src="/Logotype-Noir.png" alt="MyOwly" />
        </Box>

        <Heading
          as="h2"
          minWidth={[null, null, "340px"]}
          pt="20px"
          color="vampire-black"
          textTransform="uppercase"
          fontSize="20px"
          fontFamily="body"
          fontWeight="black"
          lineHeight="30px"
        >
          Et si
          <Text
            as="span"
            color="indian-yellow"
            fontSize={["34px", "38px"]}
            fontWeight="semibold"
          > on reprenait</Text><br />
          <Text
            as="span"
            color="fulvous"
            fontSize={["41px", "45px"]}
            lineHeight="54px"
            fontWeight="semibold"
          > le contrôle</Text> ?
        </Heading>
      </Flex>

      <Flex
        flexGrow="1"
        flexDir="column"
        justifyContent="center"
        alignItems={["center", null, "flex-start"]}
      >
        <Box
          position={{ md: "relative" }}
          overflow="visible"
        >
          <Container
            maxWidth={[null, "393px", null, null, "583px"]}
            px="20px"
            pt="100px"
            my={{ md: "4" }}
            mx={{ base: "auto", md: "28" }}
            bgColor="white"
            overflow="hidden"
          >
            <Heading
              as="h3"
              textTransform="uppercase"
              color="vampire-black"
              fontWeight="extrabold"
              fontFamily="body"
            >
              <Box fontSize={["33px", "37px", null, null, "53px"]} >
                <Text as="span" color="fulvous" fontWeight="extrabold">Une DAO </Text>
                appuyée
              </Box>
              <Box fontSize={["39px", "43px", null, null, "62px"]}>
                <Text as="span">sur </Text>
                <Text as="span" color="spanish-orange" fontWeight="black" textDecoration="underline">un oracle</Text>
              </Box>
            </Heading>

            <Text color="vampire-black" mt="37px" mb="50px">
              Les membres de la communauté versent les sommes au sein d&apos;une DAO dont ils ont la gestion.
              Les prix et les conditions de réalisation des indemnisations sont réalisés automatiquement par un oracle.
            </Text>

            <ButtonPressed href="#carousel">Comment ça marche ?</ButtonPressed>
            <ButtonPressed href="#joinUs">Rester en relation</ButtonPressed>
          </Container>

          <Box position={{ md: "absolute" }} top="145px" zIndex="-1" w="100vw">
            <Flex flexDirection="row" overflow="hidden">
              <Image as="img" w="228px" h="auto" src="/owls/Athena.png" alt="" />
              <Image as="img" w="228px" h="auto" src="/owls/DEurope.png" alt="" />
              <Image as="img" w="228px" h="auto" src="/owls/Effraie.png" alt="" />
              <Image as="img" w="228px" h="auto" src="/owls/DesMarais.png" alt="" />
              <Image as="img" w="228px" h="auto" src="/owls/GrandDEurope.png" alt="" />
              <Image as="img" w="228px" h="auto" src="/owls/Moyen-Duc.png" alt="" />
              <Image as="img" w="228px" h="auto" src="/owls/MaitreBois.png" alt="" />
              <Image as="img" w="228px" h="auto" src="/owls/MyOwly.png" alt="" />
              <Image as="img" w="228px" h="auto" src="/owls/Redoutable.png" alt="" />
              <Image as="img" w="228px" h="auto" src="/owls/Strié.png" alt="" />
              <Image as="img" w="228px" h="auto" src="/owls/Tengmalm.png" alt="" />
            </Flex>
          </Box>
        </Box>

      </Flex>

    </Flex >
  )
}
