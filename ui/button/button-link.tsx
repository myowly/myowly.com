import { Button, Link, Text } from "@chakra-ui/react"

export default function ButtonLink({
  children,
  href,
  minWidth = ["100%"]
}: {
  children: string | JSX.Element | JSX.Element[],
  href?: string,
  background?: string,
  minWidth?: string[]
}) {

  let button =
    <Button
      data-group
      my="2"
      w="100%"
      minWidth={minWidth}
      py="4"
      borderColor="keppel"
      borderRadius="50px"
      boxShadow="2px 2px 4px 0px rgba(152, 173, 168, 0.5) inset, -2px -2px 4px 0px rgba(255, 255, 255, 0.10) inset"
      background="#f6f6f6;"
      justifyContent="center"
      _hover={{
        borderColor: "cultured",
        background: "linear-gradient(145deg, #3fccac, #35ac91)",
        boxShadow: "2px 2px 6px #32a289,-2px -2px 6px #44dcb9",
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
