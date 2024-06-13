import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Button,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import ButtonSocialNetwork from "@/ui/button/button-social-network";

import FormNewsletter from "./_formNewsletter";

export default function Footer() {
  const t = useTranslations("Home.Footer");
  const params = useParams();

  return (
    <Flex
      flexDirection="column"
      alignItems="stretch"
      bgGradient="linear(to-b, sherwood-green 0%, black-bean 33%, black-bean 71%, sherwood-green 100%)"
      borderTopRadius="xl"
      boxShadow="0px 0px 20px 0px #46E0BB"
      position="relative"
      p="6">
      <Container
        p={0}
        centerContent
        maxWidth={[null, null, null, "1300px", "1400px"]}
        alignItems="stretch">
        <Center>
          <Box
            my="2"
            borderRadius="lg"
            backgroundColor="keppel"
            boxShadow="0 0 5px var(--chakra-colors-cultured)"
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            position="absolute"
            top="-9">
            <ButtonSocialNetwork socialNetwork="Discord" />
            <ButtonSocialNetwork socialNetwork="LinkedIn" />
            <ButtonSocialNetwork socialNetwork="Twitter" />
            <ButtonSocialNetwork socialNetwork="Facebook" />
            {/* <ButtonSocialNetwork socialNetwork="Reddit" /> */}
            <ButtonSocialNetwork socialNetwork="Github" />
          </Box>
        </Center>

        <Flex mt="16" flexDirection={["column", null, "row"]} justifyContent="space-around">
          <Box flexGrow="1" flexBasis="0" maxWidth="500px">
            <Box maxWidth="500px">
              <Image mb="8" pt={[null, "16px"]} maxW="300px" src="/Logo.png" alt="Logo MyOwly" />
            </Box>

            <Heading as="h4" mb="2" fontFamily="body" textTransform="uppercase" color="cultured">
              {t("summary.title")}
            </Heading>

            <Flex flexDirection="column" gap="2">
              <Link
                href={`/${params.locale}#project`}
                textTransform="uppercase"
                cursor="pointer"
                color="cultured">
                <Flex flexDirection="row" alignItems="center">
                  <Image as="img" src="/arrow.svg" w={3} h={3} mr="2" alt="Petite flèche" />
                  {t("summary.links.project")}
                </Flex>
              </Link>
              {/*
              <Link
                href="#community"
                textTransform="uppercase"
                cursor="pointer"
                color="cultured"
              >
                <Flex flexDirection="row" alignItems="center">
                  <Image
                    as="img"
                    src="/arrow.svg"
                    w={3}
                    h={3}
                    mr="2"
                    alt="Petite flèche"
                  />
                  {t('summary.links.community')}
                </Flex>
              </Link>
              */}
              <Link
                href={`/${params.locale}#joinUs`}
                textTransform="uppercase"
                cursor="pointer"
                color="cultured">
                <Flex flexDirection="row" alignItems="center">
                  <Image as="img" src="/arrow.svg" w={3} h={3} mr="2" alt="Petite flèche" />
                  {t("summary.links.newsletter")}
                </Flex>
              </Link>
              <Link
                href={`/${params.locale}#roadmap`}
                textTransform="uppercase"
                cursor="pointer"
                color="cultured">
                <Flex flexDirection="row" alignItems="center">
                  <Image as="img" src="/arrow.svg" w={3} h={3} mr="2" alt="Petite flèche" />
                  {t("summary.links.roadmap")}
                </Flex>
              </Link>
              <Link
                href={`/${params.locale}#team`}
                textTransform="uppercase"
                cursor="pointer"
                color="cultured">
                <Flex flexDirection="row" alignItems="center">
                  <Image as="img" src="/arrow.svg" w={3} h={3} mr="2" alt="Petite flèche" />
                  {t("summary.links.team")}
                </Flex>
              </Link>
            </Flex>
            <Button
              my="5"
              py="5"
              w="100%"
              borderRadius="full"
              background="keppel"
              zIndex="3"
              _hover={{
                background: "eucalyptus",
              }}
              _active={{
                background: "fulvous",
              }}>
              <Box color="cultured" fontWeight="bold" fontSize="16px">
                Télécharger
              </Box>
            </Button>
          </Box>

          <Divider hideFrom="md" variant="solid" border="2" borderColor="indian-yellow" mt="8" />

          <Box flexGrow="1" flexBasis="0" maxWidth="500px">
            <Text
              mt="5"
              mb="4"
              textTransform="uppercase"
              fontSize="xl"
              fontWeight="bold"
              textAlign={["start", null, "end"]}>
              <Text as="span" color="indian-yellow">
                {t("form.title.part_1")}
              </Text>
              <br />
              {t("form.title.part_2")}
              <Text as="span" color="fulvous">
                {t("form.title.part_3")}
              </Text>
            </Text>

            <FormNewsletter />
          </Box>
        </Flex>

        <Divider variant="solid" border="2" borderColor="indian-yellow" mt="4" mb="2" />

        <Flex
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="baseline">
          <Flex flexDirection="row" justifyContent="space-between" width={["100%", null, "50%"]}>
            <Link
              href="/fr/legal"
              fontSize="xs"
              textTransform="uppercase"
              textDecoration="underline"
              cursor="pointer"
              color="cultured">
              {t("legal")}
            </Link>
            <Link
              href="/fr/privacy"
              fontSize="xs"
              textTransform="uppercase"
              textDecoration="underline"
              cursor="pointer"
              color="cultured">
              {t("privacy")}
            </Link>
          </Flex>
          <Text
            color="cultured"
            fontSize="xs"
            alignSelf={["left", null, "right"]}
            mt={["2", null, "0"]}>
            Copyright © 2023 MYOWLY. {t("rights")}.
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
}
