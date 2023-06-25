import { Box, Button, Icon, Link } from "@chakra-ui/react"

import Beak from "@/svg/beak"

export default function ButtonBeak({
  children,
  href,
  mb  
}: {
  children: string | JSX.Element | JSX.Element[],
  href?: string,
  mb?: string  
}) {
  if (href) {
    return (
      <Link href={href}>
        <Button mb={mb} background="transparent" border="1px solid" borderColor="keppel" borderRadius={16} w="100%" justifyContent="space-between" boxShadow="0 0 10px var(--chakra-colors-keppel)">
          <Icon as={Beak} width="auto" height="27" />
          <Box color="keppel" textTransform="uppercase" fontWeight="bold">{children}</Box>
          <Icon as={Beak} width="auto" height="27" />
        </Button>
      </Link>
    );
  } else {
    return (
      <Button mb={mb} background="transparent" border="1px solid" borderColor="keppel" borderRadius={16} w="100%" justifyContent="space-between" boxShadow="0 0 10px var(--chakra-colors-keppel)">
        <Icon as={Beak} width="auto" height="27" />
        <Box color="keppel" textTransform="uppercase" fontWeight="bold">{children}</Box>
        <Icon as={Beak} width="auto" height="27" />
      </Button>
    );
  }
}
