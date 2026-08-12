"use client"
import Image from 'next/image'
import { useState } from 'react'
import { ShoppingCart, Search, User, Globe } from 'lucide-react'

type HeaderProps = {
  lang: "ar" | "en"
  setLang: (lang: "ar" | "en") => void
  t: any
  isAr: boolean
}

export default function Header({ lang, setLang, t, isAr }: HeaderProps) {
  return (
    <header className="bg-black border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(isAr? "en" : "ar")}
              className="bg-yellow-500 text-black px-4 py-2 rounded font-bold flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {isAr? "EN" : "AR"}
            </button>
            <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-500">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:inline">{t.cart}</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-500">
              <User className="w-5 h-5" />
              <span className="hidden md:inline">{t.login}</span>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder={t.search}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className={`absolute ${isAr? 'left-0 rounded-l-lg' : 'right-0 rounded-r-lg'} top-0 h-full bg-yellow-500 text-black px-4`}>
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Kayan" width={120} height={40} />
          </div>
        </div>
      </div>
    </header>
  )
}