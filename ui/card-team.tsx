import { Flex, Image, Link } from "@chakra-ui/react";

export default function CardTeam({
  children,
  alignSelf,
  borderType,
  imgSrc,
  linkedInUrl,
}: {
  children: string | JSX.Element | JSX.Element[];
  alignSelf?: string[];
  borderType?: "inner" | "outer";
  imgSrc?: string;
  linkedInUrl?: string;
}) {
  let boxShadowCard =
    "0px 1px 3px var(--chakra-colors-keppel), 0px -2px 5px var(--chakra-colors-cultured)";
  let boxShadowImage =
    "0px -1px 3px var(--chakra-colors-keppel), 0px 2px 5px var(--chakra-colors-cultured)";
  if (borderType == "inner") {
    boxShadowCard =
      "0px -1px 3px var(--chakra-colors-keppel), 0px 2px 5px var(--chakra-colors-cultured)";
    boxShadowImage =
      "0px 1px 3px var(--chakra-colors-keppel), 0px -2px 5px var(--chakra-colors-cultured)";
  }

  let src = "/owls/MyOwly.png";
  if (imgSrc) src = imgSrc;

  if (linkedInUrl) {
    return (
      <Flex
        w="180px"
        minH="200px"
        m="6"
        mt="16"
        px="3"
        flexDirection="column"
        alignSelf={alignSelf}
        bgColor="white"
        borderRadius="3xl"
        boxShadow={boxShadowCard}>
        <Image
          as="img"
          src={src}
          alt=""
          w="115px"
          h="115px"
          borderRadius="100%"
          alignSelf="center"
          position="relative"
          top="-8"
          bgColor="white"
          boxShadow={boxShadowImage}
        />

        {children}

        <Flex justifyContent="end">
          <Link href={linkedInUrl} target="_blank">
            <Image as="img" src="/reseaux/linkedin.svg" alt="" w="25px" h="25px" my="2" />
          </Link>
        </Flex>
      </Flex>
    );
  } else {
    return (
      <Flex
        w="180px"
        h="200px"
        m="8"
        mt="16"
        px="2"
        flexDirection="column"
        alignSelf={alignSelf}
        bgColor="white"
        borderRadius="3xl"
        boxShadow={boxShadowCard}>
        <Image
          as="img"
          src={src}
          alt=""
          w="115px"
          h="115px"
          borderRadius="100%"
          alignSelf="center"
          position="relative"
          top="-8"
          bgColor="white"
          boxShadow={boxShadowImage}
        />
        {children}
      </Flex>
    );
  }
}
