import { Checkmark } from "./icons"

export default function Pricing() {
 return (
  <section id="pricing" className="max-w-7xl mx-auto flex flex-col items-center gap-[64px] py-[80px] md:px-0 px-8">
   <h2 className="text-[#0c2115] text-5xl font-semibold">Pricing</h2>
   <div className="grid md:grid-cols-3 gap-8 w-full">
    <div className="bg-linear-[98.46deg,#06323e,#0f554c] bg-cover bg-no-repeat rounded-4xl flex flex-col p-[40px]">
     <h3 className="text-white text-2xl font-bold text-center">Starter</h3>
     <p className="text-[#b0b0b0] text-center mb-4">CRM + Lead Data</p>
     <h4 className="text-white text-6xl font-bold text-center mb-4">$39<span className="text-base font-medium text-[#b0b0b0]">/mo</span></h4>
     <ul className="space-y-4 mb-4">
      <li className="flex items-center gap-4">
       <Checkmark />
       <p className="text-white">Bulk lead import</p>
      </li>
      <li className="flex items-center gap-4">
       <Checkmark />
       <p className="text-white">1 phone number</p>
      </li>
      <li className="flex items-center gap-4">
       <Checkmark />
       <p className="text-white">Twilio in-app dialing</p>
      </li>
      <li className="flex items-center gap-4">
       <Checkmark />
       <p className="text-white">Anti-spam protection *per number</p>
      </li>
     </ul>
     <a href="https://app.lineagecrm.com" className="bg-linear-[90deg,#1ab95f_0%,#0da448_51%,#009033_100%] bg-cover bg-no-repeat text-white font-medium px-10 py-4 rounded-md inline-flex mx-auto">Get started</a>
    </div>
    <div className="bg-linear-[98.46deg,#06323e,#0f554c] bg-cover bg-no-repeat rounded-4xl flex flex-col p-[40px]">
     <h3 className="text-white text-2xl font-bold text-center">Essentials</h3>
     <p className="text-[#b0b0b0] text-center mb-4">CRM + Limited* VoIP</p>
     <h4 className="text-white text-6xl font-bold text-center mb-4">$79<span className="text-base font-medium text-[#b0b0b0]">/mo</span></h4>
     <ul className="space-y-4 mb-4">
      <li className="flex items-center gap-4">
       <Checkmark />
       <p className="text-white">2 days (16 hours) of calling</p>
      </li>
      <li className="flex items-center gap-4">
       <Checkmark />
       <p className="text-white">5 phone numbers</p>
      </li>
      <li className="flex items-center gap-4">
       <Checkmark />
       <p className="text-white">Anti-spam protection *per number</p>
      </li>
      <li className="flex items-center gap-4">
       <Checkmark />
       <p className="text-white">Team login</p>
      </li>
     </ul>
     <a href="https://app.lineagecrm.com" className="bg-linear-[90deg,#1ab95f_0%,#0da448_51%,#009033_100%] bg-cover bg-no-repeat text-white font-medium px-10 py-4 rounded-md inline-flex mx-auto">Get started</a>
    </div>
    <div className="bg-linear-[98.46deg,#06323e,#0f554c] bg-cover bg-no-repeat rounded-4xl flex flex-col p-[40px]">
     <h3 className="text-white text-2xl font-bold text-center">Navigator</h3>
     <p className="text-[#b0b0b0] text-center mb-4">CRM + Limited* VoIP</p>
     <h4 className="text-white text-6xl font-bold text-center mb-4">$139<span className="text-base font-medium text-[#b0b0b0]">/mo</span></h4>
     <ul className="space-y-4 mb-4">
      <li className="flex items-center gap-4">
       <Checkmark />
       <p className="text-white">Up to 40 hours weekly calling</p>
      </li>
      <li className="flex items-center gap-4">
       <Checkmark />
       <p className="text-white">10 phone numbers</p>
      </li>
      <li className="flex items-center gap-4">
       <Checkmark />
       <p className="text-white">Anti-spam protection *per number</p>
      </li>
      <li className="flex items-center gap-4">
       <Checkmark />
       <p className="text-white">Team login (Upline/Downline)</p>
      </li>
     </ul>
     <a href="https://app.lineagecrm.com" className="bg-linear-[90deg,#1ab95f_0%,#0da448_51%,#009033_100%] bg-cover bg-no-repeat text-white font-medium px-10 py-4 rounded-md inline-flex mx-auto">Get started</a>
    </div>
   </div>
  </section>
 )
}