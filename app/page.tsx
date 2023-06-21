import styles from './page.module.css'

import Hero from "@/components/hero"
import MainDAO from "@/components/mainDao"
import MainCaroussel from "@/components/mainCaroussel"
import MainProjet from "@/components/mainProjet"
import MainCommunauté from "@/components/mainCommunauté"
import MainSimplifier from "@/components/mainSimplifier"
import MainRejoignez from "@/components/mainRejoignez"
import MainMessage from "@/components/mainMessage"
import MainRoadmap from "@/components/mainRoadmap"
import MainTeam from "@/components/mainTeam"

export default function Home() {
  return (
    <main className={styles.main}>
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
    </main>
  )
}
