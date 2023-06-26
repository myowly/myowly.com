'use client'

import Hero from "./hero"
import MainDAO from "./mainDao"
import MainCaroussel from "./mainCaroussel"
import MainProjet from "./mainProjet"
import MainCommunauté from "./mainCommunauté"
import MainSimplifier from "./mainSimplifier"
import MainRejoignez from "./mainRejoignez"
// import MainMessage from "./mainMessage"
// import MainRoadmap from "./mainRoadmap"
// import MainTeam from "./mainTeam"
// import Footer from './footer'

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
        {/*
        <MainMessage/>
        <MainRoadmap/>
        <MainTeam/>
        <Footer/>
        */}
      </main>

      <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/139772533.js"></script>
    </>
  )
}
