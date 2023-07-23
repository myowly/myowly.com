import { Box, Center, Container, Flex, Heading, Icon, Image, Link, Text } from "@chakra-ui/react"
import { useTranslations } from 'next-intl';

import ButtonLinkBeak from "@/ui/button/button-link-beak"
import ButtonSocialNetwork from "@/ui/button/button-social-network"
import Beak from "@/svg/beak"


export default function Hero() {
  const t = useTranslations('Home.Hero');

  return (
    <Flex
      flexDirection="column"
      alignItems="stretch"
      bgGradient="linear(to-b, sherwood-green 0%, black-bean 33%, black-bean 71%, sherwood-green 100%)"
      borderBottomRadius="xl"
    >
      <Container
        p={0}
        centerContent
        maxWidth={[null, null, null, "1300px", "1400px"]}
        alignItems="stretch"
      >
        <Flex pt="10" pl="8">
          <Flex
            flex="1"
            flexDirection={["column", null, "row"]}
            alignItems="center"
            justifyContent={["flex-start", null, "space-between"]}
          >
            <Box maxWidth="500px">
              <Image
                mb={4}
                pt={[null, "16px"]}
                pr={["50px", "112px"]}
                src="/Logo.png"
                alt="Logo MyOwly"
              />
            </Box>
            <Box pr="14">
              <Box hideFrom="md">
                <Link
                  href="#joinUs"
                  textTransform="uppercase"
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                  color="cultured"
                >
                  <Image
                    as="img"
                    src="/arrow.svg"
                    w={3}
                    h={3}
                    mr="2"
                    alt="Petite flèche"
                  />
                  { t('subscribe_newsletter') }
                </Link>
              </Box>
              <Link
                href="#team"
                textTransform="uppercase"
                display="flex"
                alignItems="center"
                cursor="pointer"
                color="cultured"
              >
                <Image
                  as="img"
                  src="/arrow.svg"
                  w={3}
                  h={3}
                  mr="2"
                  alt="Petite flèche"
                />
                 { t('find_out_team') }
              </Link>
            </Box>
            <Box hideBelow="md" border="1px solid" borderColor="keppel" borderRadius="14" mr={{ base: "0", md: "4" }}>
              <Link
                href="#joinUs"
                textTransform="uppercase"
                alignItems="center"
                cursor="pointer"
                color="cultured"
                bgColor="keppel"
                borderRadius="15"
                border="1px solid"
                borderColor="keppel"
                whiteSpace="nowrap"
                p="2"
                boxShadow="0 0 10px var(--chakra-colors-keppel)"
              >
                { t('subscribe_newsletter') }
              </Link>
              <Center
                backgroundColor="transparent"
                m={0}
                p="2"
                display="flex"
                flexDirection="row"
              >
                <ButtonSocialNetwork socialNetwork="Discord" />
                <ButtonSocialNetwork socialNetwork="LinkedIn" />
                <ButtonSocialNetwork socialNetwork="Twitter" />
                {/* <ButtonSocialNetwork socialNetwork="Reddit" /> */}
                <ButtonSocialNetwork socialNetwork="Github" />
              </Center>
            </Box>
          </Flex>
          <Box hideFrom="md">
            <Center
              backgroundColor="keppel"
              m={0}
              p="5px"
              display="flex"
              borderStartRadius={14}
              boxShadow="0 0 10px var(--chakra-colors-keppel)"
              flexDirection="column"
              zIndex="1"
            >
              <ButtonSocialNetwork socialNetwork="Discord" margin="5px" />
              <ButtonSocialNetwork socialNetwork="LinkedIn" margin="5px" />
              <ButtonSocialNetwork socialNetwork="Twitter" margin="5px" />
              {/* <ButtonSocialNetwork socialNetwork="Reddit" margin="5px" /> */}
              <ButtonSocialNetwork socialNetwork="Github" margin="5px" />
            </Center>
          </Box>
        </Flex>

        <Flex
          flexDirection={["column", null, null, "row"]}
          alignItems="center"
          justifyContent="space-between"
          pt="8"
          px="8"
        >
          <Heading
            as="h1"
            textTransform="uppercase"
            fontSize={['60px', '90px', '110px', '130px', '150px']}
            fontWeight="extrabold"
            color="cultured"
            lineHeight={["0.8", null, null, "0.9"]}
            maxWidth="600px"
          >
            { t('title.part_1') }
            <Text
              as="span"
              color="transparent"
              sx={{
                'text-stroke': "1px var(--chakra-colors-cultured)",
                '-webkit-text-stroke': '1px var(--chakra-colors-cultured)'
              }}
            >
              { t('title.part_2') }
            </Text><br />
            { t('title.part_3') }<br />
            <Text
              as="span"
              color="transparent"
              sx={{
                'text-stroke': "1px var(--chakra-colors-cultured)",
                '-webkit-text-stroke': '1px var(--chakra-colors-cultured)'
              }}
            >
              { t('title.part_4') }
            </Text>
          </Heading>
          <Box display="flex" position="relative" overflow="visible">
            <Image as="img"
              src="/island.png"
              w={['350px', '500px', '580px', '470px', '651px']}
              h={['350px', '500px', '580px', '470px', '651px']}
              alt="Island 3D Model"
              transform={["translateY(-50px);", "translateY(-90px)", null, "translateY(30px)"]}
            />
            <Image
              as="img"
              src="/Cristals.png"
              w="320"
              h={["165px", "210px", "260px", "180px"]}
              alt="Cristals"
              position="absolute"
              left={[null, null, null, "-180px"]}
              right={["-45px", null, null, "unset"]}
              top={["-90px", "-130px", null, "-40px"]}
              transform={[
                null,
                null,
                null,
                "rotate(0.80turn)"
              ]}
            />
          </Box>
        </Flex>

        <Box
          display="flex"
          justifyContent="center"
          pt={{ base: "0", md: "14" }}
          pb="14"
          transform={[null, "translateY(-20px)", "translateY(-50px)", "translateY(-12px)"]}
        >
          <Icon as={Beak} w="6" h="auto" />
        </Box>

        <Box px="8" maxWidth={["460px", null, null, "567px"]} alignSelf={[null, null, null, "flex-start"]}>
          <Heading as="h2" mb={4} textTransform="uppercase" fontFamily="body" fontWeight="800">
            <Text
              as="span"
              color="cultured"
              fontSize={['30px', '42px', null, "60px"]}
              lineHeight={['40px', '51px', null, '1.1']}
            >
              { t('subtitle.part_1') }
            </Text>
            <Text
              as="span"
              color="indian-yellow"
              fontSize={["31px", "44px", null, "63px"]}
              lineHeight={['40px', '51px', null, '1.1']}
            >
              { t('subtitle.part_2') }
            </Text>
            <Text
              as="span"
              color="fulvous"
              fontSize={["36px", "50px", null, "72px"]}
              lineHeight={['34px', '47px', null, '1.1']}
              verticalAlign="text-top"
            >
              { t('subtitle.part_3') }
            </Text>
          </Heading>

          <Text mb={12}>
            { t('introduction') }
          </Text>

          <ButtonLinkBeak mb="4" href="#DAO">{ t('read_more') }</ButtonLinkBeak>
          <ButtonLinkBeak mb="14" href="#joinUs">{ t('stay_informed') }</ButtonLinkBeak>
        </Box>
      </Container>
    </Flex>
  )
}
