import PageUp from "@/svg/page-up";
import { Icon, Link } from "@chakra-ui/react"

export default function ButtonUp() {
  return (
    <Link href="#" position="fixed" bottom="4" right="4">
      <Icon as={PageUp} />
    </Link>
  );
}
