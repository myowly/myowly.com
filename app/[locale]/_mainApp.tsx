import { Box, Flex, Heading, Image, Text, Link, SimpleGrid, Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

import ButtonLinkBeak from "@/ui/button/button-link-beak";
import ButtonSocialNetwork from "@/ui/button/button-social-network";
import CTABtn from "@/ui/button/cta-button";

export default function MainApp() {
  const t = useTranslations("Home.MainApp");
  const h = useTranslations("Home.Hero");

  return (
    <Box>
      <Box>
        <Flex flexDir="column" justifyContent="space-between" mb="50px" id="app">
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={["space-between", null, null, null, "space-around"]}
            alignItems="center"
            px="1.5rem"
            pt="50px"
            gap="1">
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
              lineHeight="15px"
              textAlign="center">
              {t("title.part_1")}
              <Text
                as="span"
                color="indian-yellow"
                fontSize={["37px", "51px", "39px"]}
                fontWeight="semibold">
                {t("title.part_2")}
              </Text>
              <br />
              <Text
                as="span"
                color="fulvous"
                fontSize={["39px", "52px", "40px"]}
                lineHeight="54px"
                fontWeight="semibold">
                {t("title.part_3")}
              </Text>{" "}
              ?
            </Heading>
          </Flex>
        </Flex>
        <Box position="relative">
          <Flex w="full" p={50} alignItems="center" justifyContent="center">
            <SimpleGrid
              columns={[1, , 2]}
              gap="24px"
              mx="auto"
              textAlign={["left", , "center"]}
              maxW="1300px">
              <Box bg="cultured" px={4} py={24} shadow="base" rounded="md">
                <Heading
                  as="h2"
                  textTransform="uppercase"
                  fontFamily="body"
                  fontWeight="800"
                  fontSize={["30px", "50px", "30px", "40px"]}
                  lineHeight="1">
                  <Text as="span" color="indian-yellow">
                    {t("subtitle.part_1")}
                  </Text>
                  <Text as="span" color="fulvous" lineHeight={["0.9", "0.9", null, "1.1"]}>
                    {t("subtitle.part_2")}
                  </Text>
                  <Text as="span" color="spanish-orange" verticalAlign="text-top">
                    {t("subtitle.part_3")}
                  </Text>
                </Heading>
                <Text fontSize="16" mt={2} mb={4} color="vampire-black">
                  {t("introduction")}
                </Text>
              </Box>

              <Box
                p="1.5rem"
                boxShadow="-2px -2px 4px 0px rgba(255, 255, 255, 0.50) inset, 2px 2px 4px 0px rgba(152, 173, 168, 0.25) inset"
                borderRadius="20px">
                <Heading color="keppel">{t("appTitle")}</Heading>
                <Text color="vampire-black">{t("appTxt")}</Text>
                <Box mt="30px">
                  <CTABtn href="https://app.myowly.com/" target="_blank">
                    {h("cta_app")}
                  </CTABtn>
                </Box>
                <Flex mt="30px" alignItems="center">
                  <Image as="img" src="/arrow.svg" w={4} h={4} mr="2" alt="Petite flèche" />
                  <Text color="vampire-black" fontWeight="bold">
                    {t("feedback.title")}
                  </Text>
                </Flex>
                <Text mt="0.5rem" color="vampire-black">
                  {t("feedback.text")}
                </Text>

                <Flex gap="1rem" mt="1rem">
                  <ButtonSocialNetwork margin="0" socialNetwork="Discord" />
                  <ButtonSocialNetwork margin="0" socialNetwork="LinkedIn" />
                  <ButtonSocialNetwork margin="0" socialNetwork="Facebook" />
                  <ButtonSocialNetwork margin="0" socialNetwork="Twitter" />
                  {/* <ButtonSocialNetwork socialNetwork="Reddit" /> */}
                  <ButtonSocialNetwork margin="0" socialNetwork="Github" />
                </Flex>
              </Box>
            </SimpleGrid>
          </Flex>
          <Image
            src="/Owl.png"
            alt="MyOwly owl logo"
            position="absolute"
            top="0"
            left="30%"
            zIndex="-1"
            opacity="5%"></Image>
        </Box>
      </Box>
    </Box>
  );
}
