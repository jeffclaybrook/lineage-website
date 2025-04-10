import { EnhancedProductivity, SalesOptimizations, DialingAndMapping } from "./icons"

export default function Benefits() {
 return (
  <section id="benefits" className="max-w-7xl mx-auto flex flex-col items-center gap-[64px] py-[80px] md:px-0 px-8">
   <h2 className="text-[#0c2115] text-5xl font-semibold">Benefits</h2>
   <ul className="grid md:grid-cols-3 gap-[24px]">
    <li className="flex flex-col gap-[12px] items-center">
     <EnhancedProductivity />
     <h3 className="text-[#0c2115] font-semibold text-xl text-center">Enhanced Productivity</h3>
     <p className="text-[#48534d] font-medium text-center">Streamline your sales process with automated lead management.</p>
    </li>
    <li className="flex flex-col gap-[12px] items-center">
     <SalesOptimizations />
     <h3 className="text-[#0c2115] font-semibold text-xl text-center">Sales Optimizations</h3>
     <p className="text-[#48534d] font-medium text-center">Leverage detailed analytics to optimize your sales strategies.</p>
    </li>
    <li className="flex flex-col gap-[12px] items-center">
     <DialingAndMapping />
     <h3 className="text-[#0c2115] font-semibold text-xl text-center">Dialing and Mapping</h3>
     <p className="text-[#48534d] font-medium text-center">Utilize integrated Twilio calling for direct and efficient client interactions.</p>
    </li>
   </ul>
  </section>
 )
}