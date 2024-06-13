import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text,
  useToken,
  Stack,
  SimpleGrid,
  Icon,
  Link,
  Badge,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";

import ButtonLink from "@/ui/button/button-link";
import Card from "@/ui/card";

export default function MainParadigme() {
  const t = useTranslations("Home.MainParadigme");
  const topBg = useColorModeValue("gray.800", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");
  const [bottomBgHex] = useToken("colors", [bottomBg]);
  const Feature = (props) => {
    return (
      <Flex align="center">
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
          <chakra.span mt={2} color="gray.700" _dark={{ color: "gray.400" }}>
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      boxSize="full"
      bg="#F9FAFB"
      _dark={{ bg: "gray.600" }}
      p={10}
      alignItems="center"
      justifyContent="center">
      <Box
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
        rounded="md"
        shadow="base"
        w="full"
        bg={bottomBg}>
        <Box pt={20} rounded="md" bg={topBg}>
          <Box w="full" px={[10, , 4]} mx="auto">
            <chakra.p
              fontSize={["lg", , "xl"]}
              color="gray.300"
              textTransform="uppercase"
              fontWeight="semibold">
              {t("hover")}
            </chakra.p>
            <Text
              mb={2}
              fontSize={["2xl", , "5xl"]}
              fontWeight="bold"
              lineHeight="tight"
              color="white">
              {t("title")}
            </Text>
            <chakra.p mb={6} fontSize={["lg", , "xl"]} color="gray.400">
              {t("subtitle")}
            </chakra.p>
          </Box>
          <Box bg={`linear-gradient(180deg, transparent 70%, ${bottomBgHex} 30%)`}>
            <SimpleGrid
              columns={[1, , , 2]}
              gap="24px"
              rounded="md"
              mx={[10, , 24]}
              textAlign="left">
              <Box bg="white" _dark={{ bg: "gray.800" }} pt={10} shadow="lg" rounded="md">
                <Flex direction="column">
                  <Box px={10} pb={5}>
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="brand"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}>
                      {t("card.1.hover")}
                    </Badge>
                  </Box>
                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
                    direction="column"
                    bg="gray.50"
                    _dark={{ bg: "gray.900" }}
                    roundedBottom="md">
                    <Stack mb={5} spacing={4}>
                      <Feature>{t("card.1.1")}</Feature>
                      <Feature>{t("card.1.2")}</Feature>
                      <Feature>{t("card.1.3")}</Feature>
                    </Stack>
                  </Flex>
                </Flex>
              </Box>
              <Box bg="white" _dark={{ bg: "gray.800" }} pt={10} shadow="lg" rounded="md">
                <Flex direction="column">
                  <Box px={10} pb={5}>
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="brand"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}>
                      {t("card.2.hover")}
                    </Badge>
                  </Box>
                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
                    direction="column"
                    bg="gray.50"
                    _dark={{ bg: "gray.900" }}
                    roundedBottom="md">
                    <Stack mb={5} spacing={4}>
                      <Feature>{t("card.2.1")}</Feature>
                      <Feature>{t("card.2.2")}</Feature>
                      <Feature>{t("card.2.3")}</Feature>
                    </Stack>
                  </Flex>
                </Flex>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
