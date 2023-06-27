import { Flex, Text, Box, Image, Container } from "@chakra-ui/react";

export default function MainMessage() {
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
          Utilisez <Box as="span" fontStyle='italic' fontWeight='hairline'>les dernières technologies </Box>pour
          vous offrir <Box as="span" fontWeight='bold'>une protection </Box>
          <Box as="span" fontWeight='extrabold' fontStyle='italic' color="fulvous">adaptée à vos besoins</Box>.
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
          <Box as="span" fontWeight='bold'>Concentrez-vous</Box> sur ce qui compte <Box
            as="span" fontWeight='extrabold' color="keppel" textDecoration={[null, null, null, "underline"]}>vraiment</Box>.
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
          Une protection <Box as="span" fontStyle='italic' fontWeight='extrabold' color="fulvous">d&apos;entreprises</Box> et
          de <Box as="span" fontStyle='italic' fontWeight='extrabold' color="spanish-orange">particuliers</Box>
          <Box as="span" fontWeight='bold'> sur mesure</Box> et <Box as="span" fontWeight='bold'>sécurisée.</Box>
        </Text>
      </Box>
    </Container>
  )
}
