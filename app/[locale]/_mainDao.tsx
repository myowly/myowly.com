import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useTranslations } from 'next-intl';

import ButtonLink from "@/ui/button/button-link";


export default function MainDAO() {
  const t = useTranslations('Home.MainDAO');

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
            maxWidth={[null, "448px", null, null, "583px"]}
            pt="100px"
            pb="75px"
            my={{ md: "4" }}
            mx={{ sm: "auto", md: "28" }}
            bgColor="cultured"
            overflow="hidden"
          >
            <Heading
              as="h3"
              textTransform="uppercase"
              color="vampire-black"
              fontWeight="extrabold"
              fontFamily="body"
            >
              <Box fontSize={["36px", "43px", null, null, "58px"]} >
                <Text as="span" color="fulvous" fontWeight="extrabold">{t('subtitle.part_1')}</Text>
                {t('subtitle.part_2')}
              </Box>
              <Box fontSize={["42px", "51px", null, null, "68px"]} mt="-10px">
                <Text as="span">{t('subtitle.part_3')}</Text>
                <Text as="span" color="spanish-orange" fontWeight="black">{t('subtitle.part_4')}</Text>
              </Box>
            </Heading>

            <Text color="vampire-black" mt="15px" mb="50px">
              {t('explanation')}
            </Text>

            <ButtonLink href="#carousel">{t('how_it_works')}</ButtonLink>
            <ButtonLink href="#joinUs">{t('stay_in_touch')}</ButtonLink>
          </Container>

          <Box position={{ md: "absolute" }} top="145px" zIndex="-1" w="100vw" pb="75px">
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
