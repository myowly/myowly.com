import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  chakra,
  Badge,
  Input,
  VisuallyHidden,
  SimpleGrid,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
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
      bgGradient="linear-gradient(177deg, #081B17 0%, #1F6454 28.5%, #2C8F79 62.5%, #3BBFA1 58%, #2A8772 66%, #1D5D4F 72%, #081B17 99.99%)"
      borderBottomRadius="xl"
      boxShadow="0px 0px 20px 0px #46E0BB">
      <Flex pt="24">
        <Flex
          flex="1"
          flexDirection={["column", null, "row"]}
          alignItems="left"
          justifyContent={["flex-start", null, "space-between"]}
          gap={["7", null, "0"]}>
          <Box maxWidth="300px" pl="2.5rem">
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
            <Flex hideBelow="md" gap="2rem" borderColor="keppel" borderRadius="14" mr="6">
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
                textAlign="center"
                fontWeight="bold"
                p="2"
                boxShadow="0 0 10px var(--chakra-colors-keppel)">
                {t("hero_btn_1")}
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} mt={{ base: 0, lg: 20 }}>
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{ base: 0, lg: 20 }}
          py={24}>
          <Heading
            as="h1"
            textTransform="uppercase"
            fontSize={["80px", "90px", "110px"]}
            fontWeight="400"
            color="cultured"
            lineHeight={["0.8", null, null, "0.8"]}
            maxWidth="600px"
            px="1.5rem">
            <Text fontSize={["70px", "90px", "110px"]} lineHeight={["0.8", null, null, "0.8"]}>
              {t("title.part_1")}
            </Text>
            <Text as="span" color="keppel">
              {t("title.part_2")}
            </Text>
            {t("title.part_3")}
          </Heading>
          <Box px="1.5rem" mt="5rem">
            <Text fontWeight="bold" color="cultured">
              {t("golden.highlight")}
              <Text as="span" color="cultured" fontWeight="500">
                {t("golden.text")}
              </Text>
              <Text as="span" color="cultured" fontWeight="bold">
                {t("golden.bold1")}
              </Text>
              <Text as="span" color="cultured" fontWeight="bold">
                {t("golden.bold2")}
              </Text>
              <Text as="span" color="cultured" fontWeight="bold">
                {t("golden.bold3")}
              </Text>
            </Text>
          </Box>
          <Box px="1.5rem" position="relative" width="100%" mt="3rem">
            <CTABtn href="https://app.myowly.com/" target="_blank">
              {t("cta_app")}
            </CTABtn>
            <Icon
              as={Beak}
              width="auto"
              height="20"
              position="absolute"
              top="-5"
              left="20"
              zIndex="1"
            />
          </Box>
        </Flex>
        <Box>
          <Image
            mb="3rem"
            src="/land.png"
            alt="3 women looking at a laptop"
            w="full"
            loading="lazy"
          />
        </Box>
      </SimpleGrid>

      {/* <Heading
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
      <Text fontSize="16" mt={2} mb={4}>
        {t("introduction")}
      </Text> */}
    </Flex>
  );
}
