import Hero from "@/components/_hero"
import MainDAO from "@/components/_maindao"
import MainCaroussel from "@/components/_mainCaroussel"
import MainProjet from "@/components/_mainProjet"
import MainCommunauté from "@/components/_mainCommunauté"
import MainSimplifier from "@/components/_mainSimplifier"
import MainRejoignez from "@/components/_mainRejoignez"
import MainMessage from "@/components/_mainMessage"
import MainRoadmap from "@/components/_mainRoadmap"
import MainTeam from "@/components/_mainTeam"

export default function MyApp() {
  return (
    <>
      <Hero></Hero>
      <MainDAO></MainDAO>
      <MainCaroussel></MainCaroussel>
      <MainProjet></MainProjet>
      <MainCommunauté></MainCommunauté>
      <MainSimplifier></MainSimplifier>
      <MainRejoignez></MainRejoignez>
      <MainMessage></MainMessage>
      <MainRoadmap></MainRoadmap>
      <MainTeam></MainTeam>
    </>
  )
}