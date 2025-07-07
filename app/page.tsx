import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import Portfolio from "./components/portfolio"
import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"
import ScrollProgress from "./components/scroll-progress"
import ScrollToTop from "./components/scroll-to-top"

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
