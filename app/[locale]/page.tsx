'use client'

import Script from "next/script"

import ButtonPageUp from "@/ui/button/button-page-up"

import Hero from "./_hero"
import MainDAO from "./_mainDao"
import MainCaroussel from "./_mainCaroussel"
import MainProjet from "./_mainProjet"
import MainCommunauté from "./_mainCommunauté"
import MainSimplifier from "./_mainSimplifier"
import MainRejoignez from "./_mainRejoignez"
import MainMessage from "./_mainMessage"
import MainRoadmap from "./_mainRoadmap"
import MainTeam from "./_mainTeam"
import MainApp from "./_mainApp"
import Footer from './_footer'


export default function Home() {
  return (
    <>
      <main>
        <Hero />
        {/*
        <MainDAO />
        */}
        <MainProjet />
        <MainCaroussel />
        <MainSimplifier />
        {/*
        <MainCommunauté />
        */}
        <MainRejoignez />
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
