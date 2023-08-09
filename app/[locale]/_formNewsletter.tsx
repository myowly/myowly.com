import { Checkbox, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useTranslations } from 'next-intl';

import ButtonAction from "@/ui/button/button-action";


export default function FormNewsletter() {
  const t = useTranslations('Home.FormNewsletter');

  return (
    <form>
      <FormControl isRequired mb={4}>
        <Input
          type="text"
          name="firstname"
          color="vampire-black"
          bgColor="cultured"
          placeholder={t('firstname')}
          _placeholder={{ color: "vampire-black" }}
        />
      </FormControl>

      <FormControl isRequired mb={4}>
        <Input
          type="text"
          name="lastname"
          color="vampire-black"
          bgColor="cultured"
          placeholder={t('lastname')}
          _placeholder={{ color: "vampire-black" }}
        />
      </FormControl>

      <FormControl isRequired mb={10}>
        <Input
          type="email"
          name="email"
          color="vampire-black"
          bgColor="cultured"
          placeholder={t('email')}
          _placeholder={{ color: "vampire-black" }}
        />
      </FormControl>

      <FormControl isRequired display="flex" flexDirection="row">
        <Checkbox name="LEGAL_CONSENT.subscription_type_195375400" iconColor="cultured" color="cultured" mr="4" />
        <FormLabel color="cultured" as="label" fontSize="12px" fontStyle="italic" m="0">{t('consent')}</FormLabel>
      </FormControl>

      <ButtonAction>
        {t('send')}
      </ButtonAction>
    </form>
  )
}
