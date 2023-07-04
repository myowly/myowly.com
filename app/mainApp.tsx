import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import ButtonBeak from "@/ui/button/button-beak"

export default function MainApp() {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      mb="8"
      id="app"
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

      <Box
        p="10"
        m="8"
        ml={[null, null, "32"]}
        maxWidth="450px"
        alignSelf={["center", null, "auto"]}
      >
        {/* <Text my="8" color="vampire-black">
          Pourquoi ne pas tenter l&apos;aventure. Découvrez la première version de l&apos;application.
        </Text>
        <ButtonBeak mb="4" href="https://app.myowly.com/" target="_blank" color="cultured" background="keppel">Simuler ma prestation</ButtonBeak> */}
      </Box>
    </Flex>
  )
}