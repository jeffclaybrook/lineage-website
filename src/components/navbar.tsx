"use client"

import { useState } from "react"
import { Close, Menu } from "./icons"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false)

 return (
  <nav>
   <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
    <Link href={"/"}>
     <Image
      src="/logo.png"
      alt="Lineage CRM logo"
      width={134}
      height={32}
     />
    </Link>
    <div className="hidden md:flex space-x-6">
     <Link href={"#benefits"} className="text-[#222222] text-sm font-medium px-1">Benefits</Link>
     <Link href={"#features"} className="text-[#222222] text-sm font-medium px-1">Features</Link>
     <Link href={"#pricing"} className="text-[#222222] text-sm font-medium px-1">Pricing</Link>
     <a href="https://app.lineagecrm.com" className="text-[#008d3f] text-sm font-medium px-1">Login</a>
    </div>
    <button
     onClick={() => setIsOpen(!isOpen)}
     className="md:hidden p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
    >
     {isOpen ? <Close /> : <Menu />}
    </button>
   </div>
   <div className={clsx(
    "fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 md:hidden",
    isOpen ? "translate-x-0" : "translate-x-full"
   )}>
    <div className="flex justify-end p-2">
     <button
      onClick={() => setIsOpen(false)}
      className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
     >
      <Close />
     </button>
    </div>
    <div className="flex flex-col items-start px-6 space-y-4 mt-4">
     <Link href={"#benefits"} className="text-[#222222] text-lg font-medium w-full">Benefits</Link>
     <Link href={"#features"} className="text-[#222222] text-lg font-medium w-full">Features</Link>
     <Link href={"#pricing"} className="text-[#222222] text-lg font-medium w-full">Pricing</Link>
     <a href="https://app.lineagecrm.com" className="text-[#008d3f] text-lg font-medium w-full">Login</a>
    </div>
   </div>
   {isOpen && (
    <div
     onClick={() => setIsOpen(false)}
     className="fixed inset-0 bg-black opacity-60 z-30 md:hidden"
    />
   )}
  </nav>
 )
}