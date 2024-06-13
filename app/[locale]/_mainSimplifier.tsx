import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Icon,
  SimpleGrid,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";

import ButtonLink from "@/ui/button/button-link";
import Card from "@/ui/card";

export default function MainSimplifier() {
  const t = useTranslations("Home.MainSimplifier");
  const u = useTranslations("Home.MainProjet");

  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="brand.500"
            _dark={{ color: "brand.300" }}
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <Text fontSize="lg" fontWeight="bold" lineHeight="6" _light={{ color: "gray.900" }}>
            {props.title}
          </Text>
          <Text mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
            {props.children}
          </Text>
        </Box>
      </Flex>
    );
  };

  return (
    <Box py="100px" id="benefits">
      <Flex
        bg="#edf3f8"
        _dark={{ bg: "#3e3e3e" }}
        p={20}
        w="auto"
        justifyContent="center"
        alignItems="center">
        <Box shadow="xl" bg="white" _dark={{ bg: "gray.800" }} px={8} py={20} mx="auto">
          <SimpleGrid
            alignItems="center"
            columns={{ base: 1, lg: 3 }}
            spacingY={{ base: 10, lg: 32 }}
            spacingX={{ base: 10, lg: 24 }}>
            <Box alignSelf="start">
              <Heading
                _light={{ color: "brand.500" }}
                fontWeight="semibold"
                textTransform="uppercase">
                {t("title.part_1")} {t("title.part_2")} ?
              </Heading>
              <Text
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                textAlign={{ base: "center", sm: "left" }}
                color="gray.600"
                _dark={{ color: "gray.500" }}>
                {u("title")}
              </Text>
            </Box>
            <GridItem colSpan={2}>
              <Stack
                spacing={{ base: 10, md: 0 }}
                display={{ md: "grid" }}
                gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                gridColumnGap={{ md: 8 }}
                gridRowGap={{ md: 10 }}>
                <Feature title={u("cards.1.title")}>{u("cards.1.text")}</Feature>
                <Feature title={u("cards.2.title")}>{u("cards.2.text")}</Feature>
                <Feature title={u("cards.3.title")}>{u("cards.3.text")}</Feature>
                <Feature title={t("cards.1.title")}>{t("cards.1.text")}</Feature>
                <Feature title={t("cards.2.title")}>{t("cards.2.text")}</Feature>
                <Feature title={t("cards.3.title")}>{t("cards.3.text")}</Feature>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}
