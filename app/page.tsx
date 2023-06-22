'use client'

import Hero from "./hero"
import MainDAO from "./mainDao"
import MainCaroussel from "./mainCaroussel"
// import MainProjet from "./mainProjet"
// import MainCommunauté from "./mainCommunauté"
// import MainSimplifier from "./mainSimplifier"
// import MainRejoignez from "./mainRejoignez"
// import MainMessage from "./mainMessage"
// import MainRoadmap from "./mainRoadmap"
// import MainTeam from "./mainTeam"

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <MainDAO></MainDAO>
      <MainCaroussel></MainCaroussel>
      {/*
      <MainProjet></MainProjet>
      <MainCommunauté></MainCommunauté>
      <MainSimplifier></MainSimplifier>
      <MainRejoignez></MainRejoignez>
      <MainMessage></MainMessage>
      <MainRoadmap></MainRoadmap>
      <MainTeam></MainTeam>
      */}
    </main>
  )
}
