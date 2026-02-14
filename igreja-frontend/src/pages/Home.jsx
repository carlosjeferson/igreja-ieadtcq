import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Ministries from "../components/Ministries"
import Sermons from "../components/Sermons"
import Schedule from "../components/Schedule"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Ministries />
        <Sermons />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </>
  )
}