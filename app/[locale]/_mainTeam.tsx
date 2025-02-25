import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useTranslations } from 'next-intl';

import CardTeam from "@/ui/card-team";


export default function MainTeam() {
  const t = useTranslations('Home.MainTeam');

  return (
    <Box
      my="100px"
      mx={["6", null, null, "auto"]}
      id="team"
      maxWidth={[null, null, null, "1300px", "1500px"]}
    >
      <Flex justifyContent={["center", "start", "end"]}>
        <Heading as="h2"
          textTransform="uppercase"
          fontSize={["55px", "65px", "73px", null, "80px"]}
          fontWeight="400"
          color="keppel"
          mx={["auto", null, "6"]}
          mb={["6", null, null, "-80px"]}
        >
          {t('title')}
        </Heading>
      </Flex>

      <Flex
        flexDirection={["column", null, "row"]}
        backgroundImage={["/Cristals_2.png", null, "/Cristals_2b.png"]}
        backgroundRepeat={["repeat-y", null, "repeat-x"]}
        backgroundSize={["70px", null, "auto"]}
        backgroundPosition="center"
      >
        <Flex flexDirection="column" justifyContent="center" order={["2", null, "1"]}>
          <CardTeam
            alignSelf={["center", null, "auto"]}
            imgSrc="team/noemie.png"
            linkedInUrl="https://fr.linkedin.com/in/no%C3%A9mie-rivi%C3%A8re"
          >
            <Text color="keppel" fontWeight="bold">Noémie</Text>
            <Text color="vampire-black" fontStyle="italic" fontSize="14px" mt="-5px" ml="-1px" >UX Researcher</Text>
          </CardTeam>
          <CardTeam
            alignSelf={["start", null, "auto"]}
            borderType="inner"
            imgSrc="team/lilian.png"
            linkedInUrl="https://www.linkedin.com/in/lilianchesneauciccarelli/"
          >
            <Text color="keppel" fontWeight="bold">Lilian</Text>
            <Text color="vampire-black" fontStyle="italic" fontSize="14px" mt="-5px" ml="-1px">Graphic designer</Text>
          </CardTeam>
        </Flex>
        <Flex flexDirection="column" order={["1", null, "2"]}>
          <CardTeam
            alignSelf={["center", null, "auto"]}
            borderType="inner"
            imgSrc="team/jean-sebastien.png"
            linkedInUrl="https://fr.linkedin.com/in/jean-s%C3%A9bastien-lefevre"
          >
            <Text color="keppel" fontWeight="bold">Jean-Sébastien</Text>
            <Text color="vampire-black" fontStyle="italic" fontSize="14px" mt="-5px" ml="-1px">CEO</Text>
          </CardTeam>
          <CardTeam
            alignSelf={["start", null, "auto"]}
            imgSrc="team/thomas.png"
            linkedInUrl="https://fr.linkedin.com/in/thomas-castellengo"
          >
            <Text color="keppel" fontWeight="bold">Thomas</Text>
            <Text color="vampire-black" fontStyle="italic" fontSize="14px" mt="-5px" ml="-1px">DevOps</Text>
          </CardTeam>
          <CardTeam
            alignSelf={["end", null, "auto"]}
            borderType="inner"
            imgSrc="team/adeline.png"
            linkedInUrl="https://www.linkedin.com/in/adeline-pitet/"
          >
            <Text color="keppel" fontWeight="bold">Adeline</Text>
            <Text color="vampire-black" fontStyle="italic" fontSize="14px" mt="-5px" ml="-1px">CTO</Text>
          </CardTeam>
        </Flex>
        <Flex flexDirection="column" justifyContent="center" order="3">
          <CardTeam
            alignSelf={["end", null, "auto"]}
            imgSrc="team/nassara.png"
            linkedInUrl="https://www.linkedin.com/in/nassara-elhadji-ph-d-6937a8b4/"
          >
            <Text color="keppel" fontWeight="bold">Nassara</Text>
            <Text color="vampire-black" fontStyle="italic" fontSize="14px" mt="-5px" ml="-1px">Data Scientist</Text>
          </CardTeam>
          <CardTeam
            alignSelf={["center", null, "auto"]}
            borderType="inner"
            linkedInUrl="https://www.linkedin.com/in/elisa-duronsoy-50a761172/"
            imgSrc="team/elisa.png"
          >
            <Text color="keppel" fontWeight="bold">Elisa</Text>
            <Text color="vampire-black" fontStyle="italic" fontSize="14px" mt="-5px" ml="-1px">Community Builder</Text>
          </CardTeam>
        </Flex>
      </Flex>
    </Box>
  )
}
