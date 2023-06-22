import { Button, Text } from "@chakra-ui/react"

export default function ButtonPressed({
  children
}: {
  children: string | JSX.Element | JSX.Element[]
}) {
  return (
    <Button
      background="transparent"
      boxShadow="inset 1px 0.5px 2px gray, inset -1px 2px 2px var(--chakra-colors-cultured)"
      borderRadius={16}
      w="100%"
      justifyContent="center"
      py="4"
      my="2"
    >
      <Text
        color="keppel"
        textTransform="uppercase"
        fontWeight="bold"
      >
        {children}
      </Text>
    </Button>
  );
}
