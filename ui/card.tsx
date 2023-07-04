import { Box } from "@chakra-ui/react"

export default function Card({
  children,
  align
}: {
  children: string | JSX.Element | JSX.Element[],
  align?: "left" | "right"
}) {
  let textAlign: any = "start"
  let marginStart: any = "4"
  let marginEnd: any = { base: "auto", lg: "4" }
  let boxShadow = { lg: "0px -1.5px 3px var(--chakra-colors-keppel), 0px 2px 5px var(--chakra-colors-cultured)" }

  if (align == "right") {
    textAlign = { base: "end", lg: "start" }
    marginStart = { base: "auto", lg: "4" }
    marginEnd = "4"
    boxShadow = { lg: "0px 1.5px 3px var(--chakra-colors-keppel), 0px -2px 5px var(--chakra-colors-cultured)" }
  }

  return (
    <Box
      m="4"
      p="4"
      textAlign={textAlign}
      maxWidth="400px"
      minHeight={[null, null, null, "438px"]}
      marginStart={marginStart}
      marginEnd={marginEnd}
      boxShadow={boxShadow}
      borderRadius="16"
      display="flex"
      flexDirection="column"
      flexGrow="1"
      flexBasis="0"
      justifyContent="center"
    >
      {children}
    </Box>
  );
}
