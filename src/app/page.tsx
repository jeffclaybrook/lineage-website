import Benefits from "@/components/benefits"
import Features from "@/components/features"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Pricing from "@/components/pricing"

export default function Home() {
 return (
  <>
   <Navbar />
   <Hero />
   <Benefits />
   <Features />
   <Pricing />
   <Footer />
  </>
 )
}