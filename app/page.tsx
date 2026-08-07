"use client"

import Image from 'next/image'
import Link from 'next/link' // <-- ضفناه عشان صفحة اتصل بنا
import { useState } from 'react'
import { ShoppingCart, Shirt, Smartphone, Search, User, Package, Tv, Gem, Baby, Sofa, Wrench, ShoppingBag, Globe, Star, LucideIcon } from 'lucide-react'

// عملنا Types عشان Vercel يبطل يشتكي
type Category = {
  icon: LucideIcon
  name: string
}

type Product = {
  name: string
  price: string
  rating: number
}

export default function Home() {
  const [lang, setLang] = useState("ar")
  const isAr = lang === "ar"

  const content = {
    ar: {
      search: "ابحث عن منتج...",
      login: "تسجيل الدخول",
      cart: "السلة",
      title: "كل ما تحتاجه في مكان واحد",
      subtitle: "ازياء - اثاث - الكترونيات - ادوات منزلية واكثر",
      bestSeller: "المنتجات الاكثر مبيعا",
      addToCart: "اضف للسلة",
      about: "عن كيان",
      aboutText: "كيان وجهتك الاولى لكل ما تحتاجه. جودة عالية واسعار منافسة وتوصيل سريع في جميع انحاء مصر",
      customerService: "خدمة العملاء",
      returnPolicy: "سياسة الاسترجاع",
      shipping: "الشحن والتوصيل",
      faq: "الاسئلة الشائعة",
      contactUs: "اتصل بنا", // <-- ضفنا دي عشان الترجمة
      payment: "طرق الدفع",
      cod: "الدفع عند الاستلام",
      visa: "فيزا وماستر كارد",
      cash: "فودافون كاش",
      contact: "تواصل معنا",
      whatsapp: "واتساب: 01224453205 - 01017295477",
      email: "ايميل: kayanmall62@gmail.com",
      emailGmail: "راسلنا عبر Gmail",
      rights: "جميع الحقوق محفوظة",
      categories: [
        { icon: Shirt, name: "الملابس والموضة" },
        { icon: ShoppingBag, name: "الاحذية والشنط" },
        { icon: Gem, name: "الاكسسوارات والنظارات" },
        { icon: Baby, name: "لعب وهدايا الاطفال" },
        { icon: Sofa, name: "الاث والديكور" },
        { icon: Wrench, name: "الادوات المنزلية" },
        { icon: Smartphone, name: "الموبايلات" },
        { icon: Tv, name: "الاجهزة الالكترونية" },
      ] as Category[],
      products: [
        { name: "تيشيرت قطن رجالي", price: "350 ج.م", rating: 4.8 },
        { name: "شنطة كروس جلد", price: "890 ج.م", rating: 4.9 },
        { name: "سماعة بلوتوث", price: "1200 ج.م", rating: 4.7 },
        { name: "طقم ادوات مطبخ", price: "650 ج.م", rating: 4.6 },
      ] as Product[]
    },
    en: {
      search: "Search for product...",
      login: "Sign In",
      cart: "Cart",
      title: "Everything You Need in One Place",
      subtitle: "Fashion - Furniture - Electronics - Home Tools & More",
      bestSeller: "Best Selling Products",
      addToCart: "Add to Cart",
      about: "About Kayan",
      aboutText: "Kayan is your first destination for everything you need. High quality, competitive prices, and fast delivery all over Egypt",
      customerService: "Customer Service",
      returnPolicy: "Return Policy",
      shipping: "Shipping & Delivery",
      faq: "FAQ",
      contactUs: "Contact Us", // <-- وضفنا دي للانجليزي
      payment: "Payment Methods",
      cod: "Cash on Delivery",
      visa: "Visa & MasterCard",
      cash: "Vodafone Cash",
      contact: "Contact Us",
      whatsapp: "WhatsApp: 01224453205 - 01017295477",
      email: "Email: kayanmall62@gmail.com",
      emailGmail: "Contact via Gmail",
      rights: "All Rights Reserved",
      categories: [
        { icon: Shirt, name: "Clothing & Fashion" },
        { icon: ShoppingBag, name: "Shoes & Bags" },
        { icon: Gem, name: "Accessories & Glasses" },
        { icon: Baby, name: "Toys & Kids Gifts" },
        { icon: Sofa, name: "Furniture & Decor" },
        { icon: Wrench, name: "Home Tools" },
        { icon: Smartphone, name: "Mobile Phones" },
        { icon: Tv, name: "Electronics" },
      ] as Category[],
      products: [
        { name: "Men Cotton T-Shirt", price: "350 EGP", rating: 4.8 },
        { name: "Leather Cross Bag", price: "890 EGP", rating: 4.9 },
        { name: "Bluetooth Earphones", price: "1200 EGP", rating: 4.7 },
        { name: "Kitchen Tools Set", price: "650 EGP", rating: 4.6 },
      ] as Product[]
    }
  }

  const t = content[lang as keyof typeof content]

  return (
    <div dir={isAr? "rtl" : "ltr"} className="min-h-screen bg-black text-white">
      {/* Header */}
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

      {/* Categories */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 overflow-x-auto py-3">
            {t.categories.map((cat: Category, idx: number) => (
              <button key={idx} className="flex items-center gap-2 whitespace-nowrap hover:text-yellow-500 transition">
                <cat.icon className="w-5 h-5" />
                <span className="text-sm">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero + Best Sellers */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Kayan"
              width={400}
              height={200}
              className="drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-gray-400 text-lg">{t.subtitle}</p>
        </div>

        {/* Best Sellers */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-yellow-500">{t.bestSeller}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.products.map((product: Product, idx: number) => (
              <div key={idx} className="bg-gray-900 rounded-lg p-4 border-gray-800 hover:border-yellow-500 transition">
                <div className="w-full h-40 bg-gray-800 rounded mb-4 flex items-center justify-center">
                  <Package className="w-12 h-12 text-gray-600" />
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm">{product.rating}</span>
                </div>
                <p className="text-xl font-bold text-yellow-500 mb-3">{product.price}</p>
                <button className="w-full bg-yellow-500 text-black py-2 rounded font-bold hover:bg-yellow-400">
                  {t.addToCart}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 border-t border-gray-800 mt-20 -mx-4 px-4">
          <div className="container mx-auto py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-yellow-500 font-bold mb-4">{t.about}</h3>
                <p className="text-gray-400 text-sm">{t.aboutText}</p>
              </div>
              <div>
                <h3 className="text-yellow-500 font-bold mb-4">{t.customerService}</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="hover:text-yellow-500 cursor-pointer">{t.returnPolicy}</li>
                  <li className="hover:text-yellow-500 cursor-pointer">{t.shipping}</li>
                  <li className="hover:text-yellow-500 cursor-pointer">{t.faq}</li>
                  <li>
                    <Link href="/contact" className="hover:text-yellow-500 transition">
                      {t.contactUs}
                    </Link>
                  </li> {/* <-- ده اللي ضفناه */}
                </ul>
              </div>
              <div>
                <h3 className="text-yellow-500 font-bold mb-4">{t.payment}</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>{t.cod}</li>
                  <li>{t.visa}</li>
                  <li>{t.cash}</li>
                </ul>
              </div>
              
              {/* قسم التواصل الجديد */}
              <div>
                <h3 className="text-yellow-500 font-bold mb-4">{t.contact}</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <a 
                      href="https://wa.me/201224453205" 
                      target="_blank" 
                      className="hover:text-yellow-500 transition"
                    >
                      {t.whatsapp}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:kayanmall62@gmail.com" 
                      className="hover:text-yellow-500 transition"
                    >
                      {t.email}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=kayanmall62@gmail.com" 
                      target="_blank" 
                      className="hover:text-yellow-500 transition"
                    >
                      {t.emailGmail}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
              © 2026 Kayan. {t.rights}
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}