import { Button, Link, Text } from "@chakra-ui/react"

export default function ButtonLink({
  children,
  href
}: {
  children: string | JSX.Element | JSX.Element[],
  href?: string
}) {

  let button =
    <Button
      data-group
      my="2"
      w="100%"
      minWidth={[null, null, null, "300px", "500px"]}
      py="4"
      borderColor="keppel"
      borderRadius={16}
      boxShadow="0 0 10px var(--chakra-colors-keppel)"
      background="transparent"
      justifyContent="center"
      _hover={{
        borderColor: "cultured",
        background: "keppel"
      }}
    >
      <Text
        color="keppel"
        textTransform="uppercase"
        fontWeight="bold"
        _groupHover={{
          color: "cultured"
        }}
      >
        {children}
      </Text>
    </Button>
  
  if (href) {
    return (
      <Link href={href}>
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
