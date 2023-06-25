import { Image, Link } from "@chakra-ui/react"

export default function ButtonSocialNetwork({
  width=30,
  height=30,
  socialNetwork="Discord"
}: {
  width?: number,
  height?: number,
  socialNetwork?: "Discord" | "Twitter" | "Reddit" | "Github"
}) {
  let href = "https://github.com/myowly"
  let src = "/reseaux/discord.svg"

  if (socialNetwork == "Twitter") {
    href = "https://github.com/myowly"
    src = "/reseaux/twitter.svg"
  } else if (socialNetwork == "Reddit") {
    href = "https://github.com/myowly"
    src = "/reseaux/reddit.svg"
  } else if (socialNetwork == "Github") {
    href = "https://github.com/myowly"
    src = "/reseaux/github-white.svg"
  }

  return (
    <Link href={href}>
      <Image as="img" src={src} w={width} h={height} alt={socialNetwork} m="3" />
    </Link>
  );
}
