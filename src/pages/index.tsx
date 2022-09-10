import type { NextPage } from 'next'
import Head from 'next/head'
import About from 'src/components/portfolio/about'
import Contact from 'src/components/portfolio/contact'
import HomeHero from 'src/components/portfolio/home-hero'
import Projects from 'src/components/portfolio/projects'
import Technologies from 'src/components/portfolio/technologies'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Portfolio
        </title>
      </Head>
      <main>
        <HomeHero />
        <About />
        <Projects />
        <Technologies />
        <Contact />
      </main>
    </>
  )
}

export default Home
