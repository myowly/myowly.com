import { Image, Link } from "@chakra-ui/react"

export default function ButtonSocialNetwork({
  width = 30,
  height = 30,
  margin = "12px",
  socialNetwork = "Discord"
}: {
  width?: number | number[],
  height?: number | number[],
  margin?: string,
  socialNetwork?: "Discord" | "Twitter" | "Reddit" | "Github" | "LinkedIn" | "Facebook"
}) {
  let href = "https://discord.gg/3tQDqwUf9n"
  let src = "/reseaux/discord.svg"

  if (socialNetwork == "Twitter") {
    href = "https://twitter.com/MyOwly_Oracle"
    src = "/reseaux/twitter.svg"
  } else if (socialNetwork == "Reddit") {
    href = "#"
    src = "/reseaux/reddit.svg"
  } else if (socialNetwork == "Github") {
    href = "https://github.com/myowly"
    src = "/reseaux/github-white.svg"
  } else if (socialNetwork == "LinkedIn") {
    href = "https://www.linkedin.com/company/myowly/"
    src = "/reseaux/linkedin.svg"
  } else if (socialNetwork == "Facebook") {
    href = "https://www.facebook.com/people/MyOwly/100093950620391/"
    src = "/reseaux/facebook.svg"
  }

  return (
    <Link href={href} target="_blank">
      <Image as="img"
        src={src}
        w={width}
        h={height}
        alt={socialNetwork}
        m={margin}
        borderRadius="100%"
        _hover={{
          transform: "scale(1.1)"
        }}
      />
    </Link>
  );
}
