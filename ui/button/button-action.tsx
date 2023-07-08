import { Button } from "@chakra-ui/react"

export default function ButtonAction({
  children
}: {
  children: string | JSX.Element | JSX.Element[]
}) {
  return (
    <Button
      type="submit"
      my="2"
      width="100%"
      bgColor="cultured"
      borderBottom="4px solid"
      borderColor="keppel"
      boxShadow="0 0 5px var(--chakra-colors-cultured)"
      color="keppel"
      textTransform="uppercase"
      _hover={{
        bgColor: "keppel",
        borderBottom: "4px solid",
        borderColor: "cultured",
        boxShadow: "0 0 5px var(--chakra-colors-keppel)",
        color: "cultured",
      }}
    >
      {children}
    </Button>
  );
}
