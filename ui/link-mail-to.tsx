import { Link } from "@chakra-ui/react";
import { useState } from "react";

export default function LinkMailTo() {
  const [deciphered, setDeciphered] = useState(false);

  const decipher = (sentence) => {
    return sentence.replace(/[a-zA-Z]/g, function (char) {
      return String.fromCharCode(
        (char <= "Z" ? 90 : 122) >= (char = char.charCodeAt(0) + 13) ? char : char - 26
      );
    });
  };

  const updateLink = (e) => {
    if (!deciphered) {
      e.preventDefault();

      let mailTo = decipher("znvygb");
      let mail = decipher("pbagnpg@zlbjyl.pbz");

      let element = e.target;
      element.firstChild.nodeValue = mail;
      element.setAttribute("href", mailTo + ":" + mail);

      setDeciphered(true);
    }
    // else default action
  };

  return (
    <Link
      href="#"
      onClick={(e) => updateLink(e)}
      py="1"
      px="2"
      borderBottom="4px solid"
      borderColor="keppel"
      borderRadius="4"
      boxShadow="0 0 5px var(--chakra-colors-cultured)"
      bgColor="cultured"
      color="keppel"
      _hover={{
        bgColor: "keppel",
        borderBottom: "4px solid",
        borderColor: "cultured",
        boxShadow: "0 0 5px var(--chakra-colors-keppel)",
        color: "cultured",
      }}>
      Afficher l`&apos;`adresse mail
    </Link>
  );
}
