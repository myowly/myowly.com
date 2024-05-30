import { Box, Center, Container, Flex, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

import ButtonLinkBeak from "@/ui/button/button-link-beak";
import ButtonSocialNetwork from "@/ui/button/button-social-network";
import Beak from "@/svg/beak";

export default function Hero() {
  const t = useTranslations("Home.Hero");

  return (
    <Flex
      flexDirection="column"
      alignItems="stretch"
      bgGradient="linear(to-b, sherwood-green 0%, black-bean 33%, black-bean 71%, sherwood-green 100%)"
      borderBottomRadius="xl"
      boxShadow="0px 0px 20px 0px #46E0BB">
      <Container
        p={0}
        centerContent
        maxWidth={[null, null, null, "1300px", "1400px"]}
        alignItems="stretch">
        <Flex pt="24" pl="6">
          <Flex
            flex="1"
            flexDirection={["column", null, "row"]}
            alignItems="left"
            justifyContent={["flex-start", null, "space-between"]}
            gap={7}>
            <Box maxWidth="200px" mr={5}>
              <Image src="/Logo.png" alt="Logo MyOwly" />
            </Box>
            <Flex flexDirection="row" alignItems="top" gap={4}>
              <Box>
                <Box hideFrom="md" pt={1} bgColor="keppel">
                  <Link
                    href="#joinUs"
                    textTransform="uppercase"
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    color="cultured">
                    {t("hero_btn_1")}
                  </Link>
                </Box>
                <Link
                  href="#team"
                  textTransform="uppercase"
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                  color="cultured">
                  {t("hero_btn_2")}
                </Link>
              </Box>
              <Flex
                hideBelow="md"
                border="1px solid"
                borderColor="keppel"
                borderRadius="14"
                mr="6"
                direction="column">
                <Link
                  href="#joinUs"
                  textTransform="uppercase"
                  alignItems="center"
                  cursor="pointer"
                  color="cultured"
                  bgColor="keppel"
                  borderRadius="15"
                  border="1px solid"
                  borderColor="keppel"
                  whiteSpace="nowrap"
                  textAlign="center"
                  p="2"
                  boxShadow="0 0 10px var(--chakra-colors-keppel)">
                  {t("hero_btn_1")}
                </Link>
                <Center
                  backgroundColor="transparent"
                  m={0}
                  pt="2"
                  display="flex"
                  flexDirection="row">
                  <ButtonSocialNetwork socialNetwork="Discord" />
                  <ButtonSocialNetwork socialNetwork="LinkedIn" />
                  <ButtonSocialNetwork socialNetwork="Twitter" />
                  <ButtonSocialNetwork socialNetwork="Facebook" />
                  {/* <ButtonSocialNetwork socialNetwork="Reddit" /> */}
                  <ButtonSocialNetwork socialNetwork="Github" />
                </Center>
              </Flex>
            </Flex>
          </Flex>
          <Box hideFrom="md">
            <Center
              backgroundColor="keppel"
              m={0}
              p="5px"
              display="flex"
              borderStartRadius={14}
              boxShadow="0 0 10px var(--chakra-colors-keppel)"
              flexDirection="column"
              zIndex="1">
              <ButtonSocialNetwork socialNetwork="Discord" margin="5px" />
              <ButtonSocialNetwork socialNetwork="LinkedIn" margin="5px" />
              <ButtonSocialNetwork socialNetwork="Twitter" margin="5px" />
              {/* <ButtonSocialNetwork socialNetwork="Reddit" margin="5px" /> */}
              <ButtonSocialNetwork socialNetwork="Github" margin="5px" />
            </Center>
          </Box>
        </Flex>

        <Flex
          flexDirection={["column", null, null, "row"]}
          alignItems="start"
          justifyContent="space-between"
          pt="16"
          px="6">
          <Heading
            as="h1"
            textTransform="uppercase"
            fontSize={["80px", "90px", "110px", "130px", "150px"]}
            fontWeight="400"
            color="cultured"
            lineHeight={["0.8", null, null, "0.8"]}
            maxWidth="600px">
            {t("title.part_1")}
            <Text
              as="span"
              color="transparent"
              sx={{
                "text-stroke": "1px var(--chakra-colors-cultured)",
                "-webkit-text-stroke": "1px var(--chakra-colors-cultured)",
              }}>
              {t("title.part_2")}
              <Image as="img" src="/arrow.svg" w={3} h={3} mr="2" alt="Petite flèche" />
            </Text>
            <br />
            {t("title.part_3")}
            <br />
            <Text
              as="span"
              color="transparent"
              sx={{
                "text-stroke": "1px var(--chakra-colors-cultured)",
                "-webkit-text-stroke": "1px var(--chakra-colors-cultured)",
              }}>
              {t("title.part_4")}
            </Text>
          </Heading>
          <Box display="flex" position="relative" overflow="visible">
            <Image
              as="img"
              src="/island.png"
              w={["350px", "500px", "580px", "500px", "651px"]}
              h={["350px", "500px", "580px", "500px", "651px"]}
              alt="Island 3D Model"
              transform={[
                "translateY(-50px);",
                null,
                "translate(130px,-90px)",
                "translate(-10px, 50px)",
                "translateY(30px)",
              ]}
            />
            <Image
              as="img"
              src="/Cristals.png"
              w="320"
              h={["165px", "210px", "260px", "180px"]}
              alt="Cristals"
              position="absolute"
              left={[null, null, null, "-100px"]}
              right={["-25px", null, "-130px", "unset"]}
              top={["-100px", "-130px", "-200px", "-40px"]}
              transform={[null, null, null, "rotate(0.80turn)"]}
            />
          </Box>
        </Flex>

        <Box
          display="flex"
          justifyContent="center"
          pt={{ base: "0", lg: "14" }}
          pb="16"
          transform={[null, "translateY(-20px)", "translateY(-50px)", "translateY(-12px)"]}>
          <Image as="img" alt="" src="/arrow-white.svg" w="auto" h="10" />
        </Box>

        <Box
          px="8"
          mb="100px"
          maxWidth={[null, "480px", null, "567px"]}
          alignSelf={[null, null, null, "flex-start"]}>
          <Heading as="h2" textTransform="uppercase" fontFamily="body" fontWeight="800">
            <Text as="span" color="cultured" fontSize={["37px", "50px", null, "60px"]}>
              {t("subtitle.part_1")}
            </Text>
            <Text
              as="span"
              color="indian-yellow"
              fontSize={["35px", "47px", null, "56px"]}
              lineHeight={["0.9", "0.9", null, "1.1"]}>
              {t("subtitle.part_2")}
            </Text>
            <Text
              as="span"
              color="fulvous"
              fontSize={["44px", "59px", null, "72px"]}
              lineHeight={["0.8", "0.8", null, "0.8"]}
              verticalAlign="text-top">
              {t("subtitle.part_3")}
            </Text>
          </Heading>

          <Text mt={5} mb={12}>
            {t("introduction")}
          </Text>

          <ButtonLinkBeak mb="4" href="#joinUs">
            {t("stay_informed")}
          </ButtonLinkBeak>
          <ButtonLinkBeak
            mb="4"
            href="https://app.myowly.com/"
            target="_blank"
            color="cultured"
            background="keppel">
            {t("cta_app")}
          </ButtonLinkBeak>
        </Box>
      </Container>
    </Flex>
  );
}
