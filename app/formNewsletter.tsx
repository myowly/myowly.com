import { Checkbox, FormControl, FormLabel, Input } from "@chakra-ui/react";

import ButtonAction from "@/ui/button/button-action";

export default function formNewsletter() {
  return (
    <form>
      <FormControl isRequired mb={4}>
        <Input
          type="text"
          name="firstname"
          color="vampire-black"
          bgColor="cultured"
          placeholder="Votre prénom"
          _placeholder={{ color: "vampire-black" }}
        />
      </FormControl>

      <FormControl isRequired mb={4}>
        <Input
          type="text"
          name="lastname"
          color="vampire-black"
          bgColor="cultured"
          placeholder="Votre nom"
          _placeholder={{ color: "vampire-black" }}
        />
      </FormControl>

      <FormControl isRequired mb={4}>
        <Input
          type="email"
          name="email"
          color="vampire-black"
          bgColor="cultured"
          placeholder="Votre email"
          _placeholder={{ color: "vampire-black" }}
        />
      </FormControl>

      <FormControl isRequired mb="4" display="flex" flexDirection="row" justifyContent="space-between">
        <Checkbox name="LEGAL_CONSENT.subscription_type_195375400" iconColor="cultured" color="cultured" mr="4" />
        <FormLabel color="cultured" as="label" fontSize="sm" fontStyle="italic">J&apos;accepte que mes informations soient stockées et utilisées pour m&apos;enregistrer et participer à la newsletter Myowly.</FormLabel>
      </FormControl>

      <ButtonAction>
        Envoyer
      </ButtonAction>
    </form>
  )
}
