import { Box, Button, Icon, Link } from "@chakra-ui/react"

import Beak from "@/svg/beak"

export default function ButtonBeak({
  children,
  href,
  mb,
  color = "keppel",
  background = "transparent",
  target
}: {
  children: string | JSX.Element | JSX.Element[],
  href?: string,
  mb?: string,
  color?: string,
  background?: string,
  target?: string
}) {
  let backgroundHover = color
  let colorHover = (background == "transparent")? "sherwood-green" : background

  let button =
    <Button
      mb={mb}
      w="100%"
      border="1px solid"
      borderColor="keppel"
      borderRadius={16}
      boxShadow="0 0 10px var(--chakra-colors-keppel)"
      background={background}
      color={color}
      justifyContent="space-between"
      _hover={{
        background: backgroundHover,
        color: colorHover
      }}
    >
      <Icon as={Beak} width="auto" height="27" />
      <Box textTransform="uppercase" fontWeight="bold">{children}</Box>
      <Icon as={Beak} width="auto" height="27" />
    </Button>

  if (href) {
    return (
      <Link href={href} target={target}>
        {button}
      </Link>
    );
  } else {
    return (
      <>
        {button}
      </>
    );
  }
}
