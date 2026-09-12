import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeatureGrid from './components/FeatureGrid'
import HerbalCare from './components/HerbalCare'
import ProductShowcase from './components/ProductShowcase'
import ProductLayers from './components/ProductLayers'
import Benefits from './components/Benefits'
import TrustSection from './components/TrustSection'
import ProductDetails from './components/ProductDetails'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeatureGrid />
        <HerbalCare />
        <ProductShowcase />
        <ProductLayers />
        <Benefits />
        <TrustSection />
        <ProductDetails />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
