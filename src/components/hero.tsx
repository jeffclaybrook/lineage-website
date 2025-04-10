import Image from "next/image"

export default function Hero() {
 return (
  <header className="py-4">
   <div className="bg-linear-[98.46deg,#06323e,#0f554c] bg-cover bg-no-repeat md:rounded-4xl md:px-16 pt-12 px-4 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
    <div className="md:flex-1">
     <h1 className="text-white text-6xl/18 font-semibold mb-4">Success Tools For Senior Market Insurance Agents</h1>
     <p className="text-base text-white font-medium mb-6">Capture, track, and analyze lead data in one integrated platform, ensuring that every customer interaction is meaningful and productive.</p>
     <a href="https://app.lineagecrm.com" className="bg-linear-[90deg,#1ab95f_0%,#0da448_51%,#009033_100%] bg-cover bg-no-repeat text-white font-medium px-10 py-4 rounded-md inline-flex">Get started</a>
    </div>
    <div className="flex md:justify-end justify-center md:flex-1">
     <Image
      src="/person.png"
      alt="Insurance agent"
      width={400}
      height={600}
     />
    </div>
   </div>
  </header>
 )
}