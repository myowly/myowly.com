import { Text, Box, Image, Container } from "@chakra-ui/react";
import { useTranslations } from 'next-intl';
import ButtonLinkBeak from "@/ui/button/button-link-beak"


export default function MainMessage() {
  const t = useTranslations('Home.MainMessage');

  return (
    <Container maxWidth={[null, null, null, "1300px", "1500px"]} centerContent my="100px" px="6">
      <Box alignSelf="start" maxW={[null, null, "80%", "60%", "50%"]}>
        <Text
          color="vampire-black"
          textTransform="uppercase"
          fontWeight="normal"
          fontSize="30px"
          lineHeight="36px"
        >
          {t('texts.1.part_1')}
          <Box as="span" fontStyle='italic' fontWeight='light'>{t('texts.1.part_2')}</Box>
          {t('texts.1.part_3')}
          <Box as="span" fontWeight='bold'>{t('texts.1.part_4')}</Box>
          <Box as="span" fontWeight='extrabold' fontStyle='italic' color="fulvous">{t('texts.1.part_5')}</Box>.
        </Text>
      </Box>
      <Box alignSelf='start' my="12">
        <Image src="/Cristals_2b.png" maxH="50px" alt="" />
      </Box>
      <Box
        mx={["1.5rem", null, null, "auto"]}
        my="5"
        px="5"
        py="5"
        maxWidth="450px"
        alignSelf={["center", null, "auto"]}
        boxShadow="2px 2px 4px 0px rgba(152, 173, 168, 0.5) inset, -2px -2px 4px 0px rgba(255, 255, 255, 0.10) inset, 0px 0px 20px 0px #3bbfa1"
        borderRadius="20px"
      >
        <Text mb="5" color="vampire-black">
          Pourquoi ne pas tenter l&apos;aventure. Découvrez la version alpha de notre application dès maintenant.
        </Text>
        <ButtonLinkBeak href="https://app.myowly.com/" target="_blank" color="cultured" background="keppel">Simuler ma prestation</ButtonLinkBeak>
      </Box>
      <Box alignSelf='end' my="12" >
        <Image src="/Cristals_2b.png" maxH="50px" alt="" />
      </Box>
      <Box alignSelf='end' maxW={[null, null, "80%", "60%", "50%"]} >
        <Text
          color="vampire-black"
          textTransform="uppercase"
          fontWeight="normal"
          fontSize="30px"
          lineHeight="30px"
          textAlign="right"
        >
          {t('texts.3.part_1')}
          <Box as="span" fontStyle='italic' fontWeight='extrabold' color="fulvous">{t('texts.3.part_2')}</Box>
          {t('texts.3.part_3')}
          <Box as="span" fontStyle='italic' fontWeight='extrabold' color="spanish-orange">{t('texts.3.part_4')}</Box>
          <Box as="span" fontWeight='bold'>{t('texts.3.part_5')}</Box>
          {t('texts.3.part_6')}
          <Box as="span" fontWeight='bold'>{t('texts.3.part_7')}</Box>.
        </Text>
      </Box>
    </Container>
  )
}
