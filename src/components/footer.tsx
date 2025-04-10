import Image from "next/image"
import Link from "next/link"

export default function Footer() {
 return (
  <footer className="border-t border-[#0c2115] py-8 flex flex-col items-center gap-4">
   <Link href={"/"}>
    <Image
     src="/logo.png"
     alt="Lineage CRM logo"
     width={134}
     height={32}
    />
   </Link>
   <p className="text-sm text-[#0c2115]">&copy; 2025 Silverbow Technology Group. All right reserved.</p>
   <ul className="flex items-center gap-4">
    <li>
     <Link href={"/privacy-policy"} className="text-sm text-[#0c2115] underline">Privacy Policy</Link>
    </li>
    <li>
     <Link href={"/terms-of-service"} className="text-sm text-[#0c2115] underline">Terms of Service</Link>
    </li>
   </ul>
  </footer>
 )
}