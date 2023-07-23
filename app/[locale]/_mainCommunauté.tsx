import { Box, Center, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { useTranslations } from 'next-intl';

import Beak from "@/svg/beak"
import ButtonLink from "@/ui/button/button-link";
import ButtonSocialNetwork from "@/ui/button/button-social-network"


export default function MainCommunauté() {
  const t = useTranslations('Home.MainCommunauté');

  return (
    <Flex
      id="community"
      py="14"
      w="100%"
      bgGradient="linear(to-b, sherwood-green, black-bean, sherwood-green)"
      borderRadius="xl"
      justifyContent="center"
      alignItems="center"
      position="relative"
      minHeight="100vh"
    >
      <Flex
        flexGrow="1"
        maxWidth={[null, null, null, "1300px", "1400px"]}
      >
        <Flex
          hideFrom="md"
          position="absolute"
          top="0"
          w="100%"
          h="100%"
          justifyContent="center"
        >
          <Image as="img" src="/Cristals_2.png" alt="Cristaux" m="4" height="80%" />
          <Image as="img" src="/Cristals_2.png" alt="Cristaux" m="4" height="80%" mt="auto" />
        </Flex>

        <Box
          hideBelow="md"
          position="absolute"
          top="40%"
          w="100%"
          h="40%"
          backgroundImage="/Cristals_2b.png"
          backgroundRepeat="repeat-x"
          backgroundSize="auto"
        >
        </Box>

        <Box
          py="60px"
          px="10"
          m="8"
          ml={{ md: "32" }}
          maxWidth="450px"
          border="1px solid var(--chakra-colors-cultured)"
          borderRadius="32"
          bgGradient="linear(110.72deg, rgba(255, 255, 255, 0.36) 1.21%, rgba(196, 196, 196, 0.06) 100%);"
          backdropFilter="blur(10px)"
          color="cultured"
          position="relative"
        >
          <Icon as={Beak} width="auto" height="20" position="absolute" top="-10" right="8" />

          <Heading
            as="h2"
            textTransform="uppercase"
            fontSize={["40px", "60px"]}
            fontWeight="400"
            my="2"
            lineHeight="1"
          >
            { t('title') }
          </Heading>

          <Text
            mt="8"
            textTransform="uppercase"
            fontSize={["19px", null, null, "30px"]}
            lineHeight="1"
            fontWeight={["600", null, null, "800"]}
          >
            { t('subtitles.1.part_1') }
            <Text as="span" color="indian-yellow">{ t('subtitles.1.part_2') }</Text>
          </Text>
          <Center
            my="2.5"
            borderRadius="lg"
            backgroundColor="cultured"
            boxShadow="0 0 5px var(--chakra-colors-cultured)"
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
          >
            <ButtonSocialNetwork socialNetwork="Discord" width={[30, null, null, 50]} height={[30, null, null, 50]} />
            <ButtonSocialNetwork socialNetwork="LinkedIn" width={[30, null, null, 50]} height={[30, null, null, 50]} />
            <ButtonSocialNetwork socialNetwork="Twitter" width={[30, null, null, 50]} height={[30, null, null, 50]} />
            {/* <ButtonSocialNetwork socialNetwork="Reddit" /> */}
            <ButtonSocialNetwork socialNetwork="Github" width={[30, null, null, 50]} height={[30, null, null, 50]} />
          </Center>

          <Text
            mt="8"
            textTransform="uppercase"
            fontSize={["19px", null, null, "30px"]}
            lineHeight="1"
            fontWeight={["600", null, null, "800"]}
          >
            { t('subtitles.2.part_1') }
            <Text as="span" color="fulvous">{ t('subtitles.2.part_2') }</Text>
          </Text>
          <ButtonLink href="#joinUs" background="cultured">{ t('subscription') }</ButtonLink>
        </Box>
      </Flex>
    </Flex>
  )
}
