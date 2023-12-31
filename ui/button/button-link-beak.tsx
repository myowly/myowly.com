import { Box, Button, Icon, Link } from "@chakra-ui/react"

import Beak from "@/svg/beak"

export default function ButtonLinkBeak({
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
  let colorHover = (background == "transparent") ? "sherwood-green" : background

  let button =
    <Button
      data-group
      mb={mb}
      py="5"
      w="100%"
      border="1px solid"
      borderColor="keppel"
      borderRadius={16}
      boxShadow="2px 2px 4px 0px rgba(152, 173, 168, 0.5) inset, -2px -2px 4px 0px rgba(255, 255, 255, 0.10) inset,0 0 8px var(--chakra-colors-keppel)"
      background={background}
      justifyContent="space-between"
      _hover={{
        background: backgroundHover
      }}
    >
      <Icon as={Beak} width="auto" height="27" />
      <Box
        color={color}
        textTransform="uppercase"
        fontWeight="bold"
        fontSize={["18px", "20px", "22px"]}
        _groupHover={{
          color: colorHover
        }}
      >
        {children}
      </Box>
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
