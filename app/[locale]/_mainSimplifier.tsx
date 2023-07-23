import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useTranslations } from 'next-intl';

import ButtonLink from "@/ui/button/button-link";
import Card from "@/ui/card";


export default function MainSimplifier() {
  const t = useTranslations('Home.MainSimplifier');

  return (
    <Box py="100px" id="benefits">
      <Flex
        flexDirection={[null, null, null, "row-reverse"]}
        justifyContent={["flex-end", null, null, "flex-start", "center"]}
        position={[null, null, null, "relative", "inherit"]}
        left="140px"
      >
        <Image
          alt=""
          height={["334px", "434px"]}
          width={["300px", "400px"]}
          src="/owls/MyOwly.png"
          position={["relative", null, null, "inherit"]}
          left={["55px", "83px"]}
        />
        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize={["80px", "100px", "120px", "144px"]}
          fontWeight="400"
          fontFamily="heading"
          color="vampire-black"
          lineHeight="1"
          pr={["22px", null, null, "0"]}
          minWidth={["80vw", null, null, "inherit"]}
          maxWidth="1120px"
          letterSpacing="-2.4px"
          textAlign="right"
        >
          <Text as="span" color="white" textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)">{ t('title.part_1') }</Text>
          { t('title.part_2') }
          <Text as="span" color="white" textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)">{ t('title.part_3') }</Text>
          { t('title.part_4') }
          <Text as="span" color="white" textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)">?</Text>
        </Heading>
      </Flex>

      <Flex flexDirection={{ base: "column", lg: "row" }} p="4" justifyContent="center">
        <Card align="left">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            { t('cards.1.title.part_1') }
            <Text as="span" color="indian-yellow" fontWeight="extrabold">{ t('cards.1.title.part_2') }</Text><br />
            { t('cards.1.title.part_3') }<br />
            <Text as="span" color="fulvous" fontWeight="extrabold">{ t('cards.1.title.part_4') }</Text>
          </Heading>
          <Text color="vampire-black">{ t('cards.1.text') }</Text>
        </Card>

        <Card align="right">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            { t('cards.2.title.part_1') }
            <Text as="span" color="indian-yellow" fontWeight="extrabold">
              { t('cards.2.title.part_2') }<br />
              { t('cards.2.title.part_3') }
            </Text>
            { t('cards.2.title.part_4') }<br />
            <Text as="span" color="fulvous" fontWeight="extrabold">{ t('cards.2.title.part_5') }</Text>
          </Heading>
          <Text color="vampire-black">{ t('cards.2.text') }</Text>
        </Card>

        <Card align="left">
          <Heading as="h3" textTransform="uppercase" fontSize="3xl" mb="2">
            { t('cards.3.title.part_1') }<br />
            <Text as="span" color="indian-yellow" fontWeight="extrabold">{ t('cards.3.title.part_2') }</Text>
            <Text as="span" color="fulvous" fontWeight="extrabold">{ t('cards.3.title.part_3') }</Text>
          </Heading>
          <Text color="vampire-black">{ t('cards.3.text') }</Text>
        </Card>
      </Flex>

      <Flex
        flexDirection={["column", null, null, "row"]}
        justifyContent="center"
        marginTop={[null, null, null, "100px"]}
        marginX={["20px", null, null, 0]}
        gap={["10px", null, null, "124px"]}
      >
        <ButtonLink href="#roadmap" minWidth={[null, null, null, "400px", "500px"]}>{ t('project') }</ButtonLink>
        <ButtonLink href="#joinUs" minWidth={[null, null, null, "400px", "500px"]}>{ t('newsletter') }</ButtonLink>
      </Flex>
    </Box >
  )
}
