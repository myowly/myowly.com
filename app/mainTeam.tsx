import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import CardTeam from "@/ui/card-team";

export default function MainTeam() {
  return (
    <Box
      py="16"
      px="8"
      id="team"
    >
      <Flex justifyContent={["center", null, "start"]} px="8" mb="4">
        <Heading as="h2"
          textTransform="uppercase"
          fontSize="6xl"
          fontWeight="extrabold"
          color="vampire-black"
        >
          L'équipe MyOwly
        </Heading>
      </Flex>
      
      <Flex
        flexDirection={["column", null, "row"]}
        backgroundImage ={["/Cristals_2.png", null, "/Cristals_2b.png"]}
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
            <Text color="vampire-black" fontWeight="bold">Noémie</Text>
            <Text color="vampire-black">UX Researcher</Text>
          </CardTeam>
          <CardTeam
            alignSelf={["start", null, "auto"]}
            borderType="inner"
          >
            <Text color="vampire-black" fontWeight="bold">Lilian</Text>
            <Text color="vampire-black">Graphic designer</Text>
          </CardTeam>
        </Flex>
        <Flex flexDirection="column" order={["1", null, "2"]}>
          <CardTeam
            alignSelf={["center", null, "auto"]}
            borderType="inner"
            imgSrc="team/jean-sebastien.png"
            linkedInUrl="https://fr.linkedin.com/in/jean-s%C3%A9bastien-lefevre"
          >
            <Text color="vampire-black" fontWeight="bold">Jean-Sébastien</Text>
            <Text color="vampire-black">CEO</Text>
          </CardTeam>
          <CardTeam
            alignSelf={["start", null, "auto"]}
            imgSrc="team/thomas.png"
            linkedInUrl="https://fr.linkedin.com/in/thomas-castellengo"
          >
            <Text color="vampire-black" fontWeight="bold">Thomas</Text>
            <Text color="vampire-black">CTO</Text>
          </CardTeam>
          <CardTeam
            alignSelf={["end", null, "auto"]}
            borderType="inner"
            imgSrc="team/adeline.png"
          >
            <Text color="vampire-black" fontWeight="bold">Adeline</Text>
            <Text color="vampire-black">Dev Fullstack</Text>
          </CardTeam>
        </Flex>
        <Flex flexDirection="column" justifyContent="center" order="3">
          <CardTeam
            alignSelf={["end", null, "auto"]}
            imgSrc="team/nassara.png"
          >
            <Text color="vampire-black" fontWeight="bold">Nassara</Text>
            <Text color="vampire-black">Data Scientist</Text>
          </CardTeam>
          <CardTeam
            alignSelf={["center", null, "auto"]}
            borderType="inner"
            imgSrc="team/tahani.png"
          >
            <Text color="vampire-black" fontWeight="bold">Tahani</Text>
            <Text color="vampire-black">AI Researcher</Text>
          </CardTeam>
        </Flex>
      </Flex>
    </Box>
  )
}
