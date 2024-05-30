import { Box, Button, Icon, Link } from "@chakra-ui/react";

export default function CTABtn({
  children,
  href,
  mb,
  target,
}: {
  children: string | JSX.Element | JSX.Element[];
  href?: string;
  mb?: string;
  target?: string;
}) {
  let button = (
    <Button
      data-group
      mb={mb}
      py="5"
      w="100%"
      borderRadius="full"
      background="keppel"
      zIndex="3"
      _hover={{
        background: "eucalyptus",
      }}
      _active={{
        background: "fulvous",
      }}>
      <Box color="cultured" fontWeight="bold" fontSize={["16px", "20px", "22px"]}>
        {children}
      </Box>
    </Button>
  );

  if (href) {
    return (
      <Link href={href} target={target}>
        {button}
      </Link>
    );
  } else {
    return <>{button}</>;
  }
}
