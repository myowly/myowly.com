import { Text, Box, Image, Container } from "@chakra-ui/react";
import { useTranslations } from 'next-intl';


export default function MainMessage() {
  const t = useTranslations('Home.MainMessage');

  return (
    <Container maxWidth={[null, null, null, "1300px", "1500px"]} centerContent>
      <Box alignSelf="end" mt={["100px"]} mx={["20px"]} mb="50px" >
        <Text
          color="vampire-black"
          textTransform="uppercase"
          fontWeight="normal"
          fontSize="30px"
          lineHeight="36px"
        >
          { t('texts.1.part_1') }
          <Box as="span" fontStyle='italic' fontWeight='hairline'>{ t('texts.1.part_2') }</Box>
          { t('texts.1.part_3') }
          <Box as="span" fontWeight='bold'>{ t('texts.1.part_4') }</Box>
          <Box as="span" fontWeight='extrabold' fontStyle='italic' color="fulvous">{ t('texts.1.part_5') }</Box>.
        </Text>
      </Box>
      <Box display={[null, null, "none"]} mx="auto" >
        <Image src="/Cristals_2b.png" alt="" />
      </Box>
      <Box alignSelf='center' my="50px" mx={["20px"]} >
        <Text
          color="vampire-black"
          textTransform="uppercase"
          fontWeight="normal"
          fontSize="30px"
          lineHeight="36px"
        >
          <Box as="span" fontWeight='bold'>{ t('texts.2.part_1') }</Box>
          { t('texts.2.part_2') }
          <Box as="span" fontWeight='extrabold' color="keppel" textDecoration={[null, null, null, "underline"]}>{ t('texts.2.part_3') }</Box>.
        </Text>
      </Box>
      <Box display={[null, null, "none"]} mx="auto" >
        <Image src="/Cristals_2b.png" alt="" />
      </Box>
      <Box alignSelf='start' my="50px" mx={["20px"]} mb={["100px"]} >
        <Text
          color="vampire-black"
          textTransform="uppercase"
          fontWeight="normal"
          fontSize="30px"
          lineHeight="30px"
        >
          { t('texts.3.part_1') }
          <Box as="span" fontStyle='italic' fontWeight='extrabold' color="fulvous">{ t('texts.3.part_2') }</Box>
          { t('texts.3.part_3') }
          <Box as="span" fontStyle='italic' fontWeight='extrabold' color="spanish-orange">{ t('texts.3.part_4') }</Box>
          <Box as="span" fontWeight='bold'>{ t('texts.3.part_5') }</Box>
          { t('texts.3.part_6') }
          <Box as="span" fontWeight='bold'>{ t('texts.3.part_7') }</Box>.
        </Text>
      </Box>
    </Container>
  )
}
