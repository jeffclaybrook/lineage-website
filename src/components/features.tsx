import Image from "next/image"

export default function Features() {
 return (
  <section id="features" className="bg-[#fafafa] flex flex-col items-center gap-[100px] md:p-[80px] py-[80px] p-[12px]">
   <h2 className="text-[#0c2115] text-5xl font-semibold">Features</h2>
   <div className="flex flex-col md:flex-row md:gap-[72px] gap-[32px]">
    <Image
     src="/image-1.png"
     alt="New Anti Spam Features"
     width={600}
     height={374}
    />
    <div className="flex flex-col justify-center">
     <h3 className="text-[#0c2115] font-semibold text-3xl mb-4">New! Anti Spam Measures</h3>
     <p className="text-[#48534d] font-medium">Manage your calling reputation and maintain trusted numbers so you can protect your communication channels with robust anti-spam features.</p>
    </div>
   </div>
   <div className="flex flex-col md:flex-row md:gap-[72px] gap-[32px]">
    <div className="flex flex-col justify-center">
     <h3 className="text-[#0c2115] font-semibold text-3xl mb-4">Bulk Lead Import</h3>
     <p className="text-[#48534d] font-medium">Migrate from excel or another CRM for the most optimized for end of life insurance. Easily import large volumes of leads to keep your pipeline full.</p>
    </div>
    <Image
     src="/image-2.png"
     alt="Bulk Lead Import"
     width={600}
     height={374}
     className="order-first md:order-last"
    />
   </div>
   <div className="flex flex-col md:flex-row md:gap-[72px] gap-[32px]">
    <Image
     src="/image-3.png"
     alt="Caller and Team Access"
     width={600}
     height={374}
    />
    <div className="flex flex-col justify-center">
     <h3 className="text-[#0c2115] font-semibold text-3xl mb-4">Caller and Team Access</h3>
     <p className="text-[#48534d] font-medium">Manage and track all your calls directly within the CRM. Delegate access to your events, leads, calling, and tools so you can scale your impact.</p>
    </div>
   </div>
  </section>
 )
}