import { Image, Link } from "@chakra-ui/react"

export default function ButtonSocialNetwork({
  width=30,
  height=30,
  href,
  src,
  alt
}: {
  width?: number,
  height?: number,
  href?: string,
  src?: string,
  alt?: string
}) {
  return (
    <Link href={href}>
      <Image as="img" src={src} w={width} h={height} alt={alt} m="3" />
    </Link>
  );
}
