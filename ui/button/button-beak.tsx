import { Button, Text } from "@chakra-ui/react"

import Beak from "@/svg/beak"

export default function ButtonBeak({
  text,
  mb
}: {
  text: string,
  mb?: string
}) {
  return (
    <Button mb={mb} background="transparent" border="1px solid" borderColor="keppel" borderRadius={16} w="100%" justifyContent="space-between" boxShadow="0 0 10px var(--chakra-colors-keppel)">
      <Beak width="auto" height="27" />
      <Text as="p" color="keppel" textTransform="uppercase" fontWeight="bold">{text}</Text>
      <Beak width="auto" height="27" />
    </Button>
  );
}
