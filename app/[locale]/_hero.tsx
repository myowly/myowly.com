import { Box, Center, Container, Flex, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

import ButtonLinkBeak from "@/ui/button/button-link-beak";
import CTABtn from "@/ui/button/cta-button";
import ButtonSocialNetwork from "@/ui/button/button-social-network";
import Beak from "@/svg/beak";
import { link } from "fs";

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
        <Flex pt="24">
          <Flex
            flex="1"
            flexDirection={["column", null, "row"]}
            alignItems="left"
            justifyContent={["flex-start", null, "space-between"]}
            gap={7}>
            <Box maxWidth="200px" pl="6" mr={5}>
              <Image src="/Logo.png" alt="Logo MyOwly" />
            </Box>
            <Flex flexDirection="row" alignItems="top" gap={4}>
              <Box width="100%">
                <Box hideFrom="md" py={4} bgColor="keppel">
                  <Link
                    href="https://app.myowly.com/"
                    textTransform="uppercase"
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    color="cultured"
                    fontWeight="bold"
                    fontSize="18"
                    textAlign="center"
                    justifyContent="center">
                    {t("hero_btn_1")}
                  </Link>
                </Box>
                <Flex
                  hideFrom="md"
                  alignItems="center"
                  justifyContent="center"
                  py={4}
                  borderBottom="1px solid #f6f6f6">
                  <Image as="img" src="/arrow.svg" w={3} h={3} mr="2" alt="Petite flèche" />
                  <Link
                    href="#joinUs"
                    textTransform="uppercase"
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    color="cultured">
                    {t("hero_btn_2")}
                  </Link>
                </Flex>
              </Box>
              <Flex hideBelow="md" borderColor="keppel" borderRadius="14" mr="6" direction="column">
                <Link
                  href="https://app.myowly.com/"
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
                <Flex alignItems="center" justifyContent="center" py={3}>
                  <Link
                    href="#joinUs"
                    textTransform="uppercase"
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    color="cultured"
                    sx={{
                      _hover: {
                        color: "#3bbfa1",
                        textDecoration: "underline",
                        fontWeight: "bold",
                      },
                    }}>
                    {t("hero_btn_2")}
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
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
            <Text
              fontSize={["70px", "90px", "110px", "130px", "150px"]}
              lineHeight={["0.8", null, null, "0.8"]}>
              {t("title.part_1")}
            </Text>
            <Text as="span" color="keppel">
              {t("title.part_2")}
            </Text>
            {t("title.part_3")}
          </Heading>
          <Box display="flex" margin="auto" overflow="visible">
            <Image
              as="img"
              src="/land.png"
              w={["350px", "500px", "580px", "500px", "651px"]}
              h={"auto"}
              py="8"
              alt="Land picture"
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
          <Heading
            as="h2"
            textTransform="uppercase"
            fontFamily="body"
            fontWeight="800"
            fontSize={["30px", "50px", null, "60px"]}
            lineHeight="1">
            <Text as="span" color="cultured">
              {t("subtitle.part_1")}
            </Text>
            <Text as="span" color="indian-yellow" lineHeight={["0.9", "0.9", null, "1.1"]}>
              {t("subtitle.part_2")}
            </Text>
            <Text as="span" color="fulvous" verticalAlign="text-top">
              {t("subtitle.part_3")}
            </Text>
          </Heading>

          <Box>
            <Text fontSize="16" mt={2} mb={4}>
              {t("introduction")}
            </Text>
            <Flex alignItems="center" mb={12} gap="2" justifyContent="end">
              <Link
                href="#joinus"
                fontSize="16"
                color="cultured"
                borderBottom="1px solid #F6F6F6"
                sx={{
                  _hover: {
                    borderBottom: "none",
                  },
                }}>
                En savoir plus
              </Link>
              <Image as="img" src="/arrow.svg" w={4} h={4} mr="2" alt="Petite flèche" />
            </Flex>
          </Box>

          <Box position="relative">
            <CTABtn href="https://app.myowly.com/" target="_blank">
              {t("cta_app")}
            </CTABtn>
            <Icon
              as={Beak}
              width="auto"
              height="20"
              position="absolute"
              top="-5"
              left="5"
              zIndex="1"
            />
          </Box>
        </Box>
      </Container>
    </Flex>
  );
}
