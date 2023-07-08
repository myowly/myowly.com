import PageUp from "@/svg/page-up";
import { Icon, Link } from "@chakra-ui/react"

export default function ButtonPageUp() {
  return (
    <Link
      href="#"
      position="fixed"
      bottom="4"
      right="4"
      _hover={{
        transform: "scale(1.1)"
      }}
    >
      <Icon as={PageUp} />
    </Link>
  );
}
