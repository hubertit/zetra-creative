import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import Portfolio from "./components/portfolio"
import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
