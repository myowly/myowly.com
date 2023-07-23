'use client'

import Script from "next/script"

import Hero from "./_hero"
import MainDAO from "./_mainDao"
import MainCaroussel from "./_mainCaroussel"
import MainProjet from "./_mainProjet"
import MainCommunauté from "./_mainCommunauté"
import MainSimplifier from "./_mainSimplifier"
import MainRejoignez from "./_mainRejoignez"
import MainMessage from "./mainMessage"
import MainRoadmap from "./mainRoadmap"
import MainTeam from "./mainTeam"
import MainApp from "./mainApp"
import Footer from './footer'
import ButtonPageUp from "@/ui/button/button-page-up"


export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <MainDAO />
        <MainRejoignez />
        <MainProjet />
        <MainCaroussel />
        <MainSimplifier />
        <MainCommunauté />
        <MainMessage />
        <MainRoadmap />
        <MainTeam />
        <MainApp />
      </main>

      <footer>
        <Footer />
      </footer>

      <ButtonPageUp />

      <Script src="//js-eu1.hs-scripts.com/139772533.js" />
    </>
  )
}
