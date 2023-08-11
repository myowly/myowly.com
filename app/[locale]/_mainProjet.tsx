import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useTranslations } from 'next-intl';

import ButtonLink from "@/ui/button/button-link";
import Card from "@/ui/card";


export default function MainProjet() {
  const t = useTranslations('Home.MainProjet');

  return (
    <Box py="100px" id="project">
      <Flex
        flexDirection={[null, null, null, "row-reverse"]}
        justifyContent={[null, null, null, "flex-end", "center"]}
        alignItems={[null, null, null, "center"]}
        position={[null, null, null, "relative", "inherit"]}
        right="140px"
      >
        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize={["70px", "80px", "100px", "110px"]}
          fontWeight="400"
          fontFamily="heading"
          color="vampire-black"
          lineHeight="1"
          pl={["1.5rem", null, null, "0"]}
          pb={["24", null, null, "24"]}
          ml={[null, null, null, "-100", "0"]}
          mr={[null, null, null, null, "1.5rem"]}
          minWidth={["80vw", null, null, "inherit"]}
          maxWidth="1120px"
          letterSpacing="-2.4px"
        >
          {t('title.part_1')}
          <Text
            as="span"
            color="cultured"
            textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)"
          >
            {t('title.part_2')}
          </Text>
          {t('title.part_3')}
          <Text
            as="span"
            color="cultured"
            textShadow="-1px 0 var(--chakra-colors-vampire-black), 0 1px var(--chakra-colors-vampire-black), 1px 0 var(--chakra-colors-vampire-black), 0 -1px var(--chakra-colors-vampire-black)"
          >
            ?
          </Text>
        </Heading>
        <Image
          alt=""
          height={["335px", "350px", "500px"]}
          width={["385px", "400px", "500px"]}
          src="/owls/MyOwly.png"
          position={["relative", null, null, "inherit"]}
          right={["75px", "80px", "72px", "113px"]}
          top={["17px", "8px", "-50px", "-40px"]}
        />
      </Flex>

      <Flex flexDirection={{ base: "column", lg: "row" }} mb={["14", null, null, "0"]} justifyContent="center" gap={["20", null, null, "2"]}>
        <Card align="right">
          <Heading as="h3" textTransform="uppercase" fontFamily="body" fontSize="3xl" fontWeight="800" lineHeight="1" mb="4">
            {t('cards.1.title.part_1')}
            <Text as="span" color="indian-yellow" fontWeight="extrabold">{t('cards.1.title.part_2')}</Text>
            <Text as="span" color="fulvous" fontWeight="extrabold">{t('cards.1.title.part_3')}</Text>
          </Heading>
          <Text color="vampire-black">{t('cards.1.text')}</Text>
        </Card>

        <Card align="left">
          <Heading as="h3" textTransform="uppercase" fontFamily="body" fontSize="3xl" fontWeight="800" lineHeight="1" mb="4">
            {t('cards.2.title.part_1')}
            <Text as="span" color="indian-yellow" fontWeight="extrabold">{t('cards.2.title.part_2')}</Text>
            <Text as="span" color="fulvous" fontWeight="extrabold">{t('cards.2.title.part_3')}</Text>
          </Heading>
          <Text color="vampire-black">{t('cards.2.text')}</Text>
        </Card>

        <Card align="right">
          <Heading as="h3" textTransform="uppercase" fontFamily="body" fontSize="3xl" fontWeight="800" lineHeight="1" mb="4">
            {t('cards.3.title.part_1')}
            <Text as="span" color="indian-yellow" fontWeight="extrabold">{t('cards.3.title.part_2')}</Text>
            {t('cards.3.title.part_3')}
            {t('cards.3.title.part_4')}
            <Text as="span" color="fulvous" fontWeight="extrabold">{t('cards.3.title.part_5')}</Text>
          </Heading>
          <Text color="vampire-black">{t('cards.3.text')}</Text>
        </Card>
      </Flex>

      <Flex
        flexDirection={["column", null, null, "row"]}
        justifyContent="center"
        marginTop={[null, null, null, "6"]}
        marginX={["20px", null, null, 0]}
        gap={[null, null, null, "6"]}
      >
        <ButtonLink href="#benefits" minWidth={[null, null, null, "400px", "500px"]}>{t('benefits')}</ButtonLink>
        <ButtonLink href="#joinUs" minWidth={[null, null, null, "400px", "500px"]}>{t('stay_informed')}</ButtonLink>
      </Flex>
    </Box >
  )
}
