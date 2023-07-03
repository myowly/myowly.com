'use client'

import Script from "next/script"

import Hero from "./hero"
import MainDAO from "./mainDao"
import MainCaroussel from "./mainCaroussel"
import MainProjet from "./mainProjet"
import MainCommunauté from "./mainCommunauté"
import MainSimplifier from "./mainSimplifier"
import MainRejoignez from "./mainRejoignez"
import MainMessage from "./mainMessage"
import MainRoadmap from "./mainRoadmap"
import MainTeam from "./mainTeam"
import MainApp from "./mainApp"
import Footer from './footer'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <MainDAO />
        <MainCaroussel />
        <MainProjet />
        <MainCommunauté />
        <MainSimplifier />
        <MainRejoignez />
        <MainMessage />
        <MainRoadmap />
        <MainTeam />
        <MainApp />
        <Footer />
      </main>

      <Script src="//js-eu1.hs-scripts.com/139772533.js" />
    </>
  )
}
