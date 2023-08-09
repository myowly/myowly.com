import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useTranslations } from 'next-intl';

import ButtonLinkBeak from "@/ui/button/button-link-beak"

export default function MainApp() {
  const t = useTranslations('Home.MainApp');

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
        px="1.5rem"
        pt="50px"
        gap="1.5rem"
      >
        <Box maxWidth="500px">
          <Image as="img" src="/Logotype-Noir.png" alt="MyOwly" />
        </Box>

        <Heading
          as="h2"
          minWidth={[null, null, "340px"]}
          pt="10px"
          color="vampire-black"
          textTransform="uppercase"
          fontSize="20px"
          fontFamily="body"
          fontWeight="black"
          lineHeight="30px"
          textAlign="center"
        >
          {t('title.part_1')}
          <Text
            as="span"
            color="indian-yellow"
            fontSize={["37px", "51px", "39px"]}
            fontWeight="semibold"
          >
            {t('title.part_2')}
          </Text><br />
          <Text
            as="span"
            color="fulvous"
            fontSize={["39px", "52px", "40px"]}
            lineHeight="54px"
            fontWeight="semibold"
          >
            {t('title.part_3')}
          </Text> ?
        </Heading>
      </Flex>

      <Box
        p="10"
        m="8"
        ml={[null, null, "32"]}
        maxWidth="450px"
        alignSelf={["center", null, "auto"]}
      >
        {/*     
        <Text my="8" color="vampire-black">
          Pourquoi ne pas tenter l&apos;aventure. Découvrez la première version de l&apos;application.
        </Text>
        <ButtonLinkBeak mb="4" href="https://app.myowly.com/" target="_blank" color="cultured" background="keppel">Simuler ma prestation</ButtonLinkBeak>
        */}
      </Box>
    </Flex>
  )
}
