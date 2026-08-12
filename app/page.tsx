"use client"
import Image from 'next/image'
import { useState } from 'react'
import { Shirt, Tv, Gem, Sofa, Wrench, ShoppingBag, LucideIcon } from 'lucide-react'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'

type Category = { icon: LucideIcon; name: string; key: string }
type Product = { id: number; name: string; price: string; rating: number; image: string; category: string }

export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("ar")
  const [activeCat, setActiveCat] = useState<string>("الكل")
  const isAr = lang === "ar"

  const content = {
    ar: {
      search: "ابحث عن منتج...", login: "تسجيل الدخول", cart: "السلة",
      title: "كل ما تحتاجه في مكان واحد", subtitle: "ازياء - اثاث - الكترونيات - اجهزة منزلية واكثر",
      bestSeller: "المنتجات الاكثر مبيعا", addToCart: "اضف للسلة", allProducts: "كل المنتجات",
      about: "عن كيان", aboutText: "كيان وجهتك الاولى لكل ما تحتاجه. جودة عالية واسعار منافسة وتوصيل سريع في جميع انحاء مصر",
      customerService: "خدمة العملاء", returnPolicy: "سياسة الاسترجاع", shipping: "الشحن والتوصيل", faq: "الاسئلة الشائعة", contactUs: "اتصل بنا",
      payment: "طرق الدفع", cod: "الدفع عند الاستلام", visa: "فيزا وماستر كارد", cash: "فودافون كاش",
      contact: "تواصل معنا", whatsapp: "واتساب: 01224453205 - 01017295477", email: "ايميل: kayanmall62@gmail.com", emailGmail: "راسلنا عبر Gmail", rights: "جميع الحقوق محفوظة",
      categories: [
        { icon: Shirt, name: "الكل", key: "الكل" },
        { icon: Shirt, name: "الملابس والموضة", key: "clothes" },
        { icon: ShoppingBag, name: "الاحذية والشنط", key: "shoes-bags" },
        { icon: Gem, name: "الاكسسوارات", key: "accessories" },
        { icon: Sofa, name: "المفروشات", key: "furniture" },
        { icon: Wrench, name: "الأجهزة المنزلية", key: "home-appliances" },
        { icon: Tv, name: "الأجهزة الالكترونية", key: "اجهزة" },
      ] as Category[],
      products: [
        // 1. الملابس - عدلت الاسامي عشان تطابق 1.jpg 2.jpg 3.jpg 4.jpg
        { id: 1, name: "تيشيرت قطن ابيض", price: "300 ج.م", rating: 4.5, image: "/clothes/1.jpg", category: "clothes" },
        { id: 2, name: "قميص كتان ازرق", price: "650 ج.م", rating: 4.7, image: "/clothes/2.jpg", category: "clothes" },
        { id: 3, name: "بنطلون جينز", price: "800 ج.م", rating: 4.6, image: "/clothes/3.jpg", category: "clothes" },
        { id: 4, name: "هودي رمادي", price: "750 ج.م", rating: 4.8, image: "/clothes/4.jpg", category: "clothes" },

        // 2. الشنط - 50 منتج
  ...Array.from({length: 50}, (_, i) => ({
          id: 5 + i,
          name: ["شنطة يد جلد بني","شنطة كروس سودا","شنطة ظهر مدرسي","شنطة لاب توب 15 بوصة","شنطة سفر كبيرة بعجل","شنطة يد جلد ابيض","شنطة كروس كاجوال","شنطة ظهر رياضي","شنطة يد سواريه دهبي","شنطة بحر مقلمة","شنطة يد جلد نبيتي","شنطة كروس جلد طبيعي","شنطة ظهر جلد فخم","شنطة يد هاند باج","شنطة كتف قماش","شنطة لاب توب جلد اسود","شنطة سفر 3 قطع","شنطة يد صغيرة كروس","شنطة كروس رياضي","شنطة ظهر جامعة","شنطة يد سويد رمادي","شنطة يد جلد اسود","شنطة كروس بناتي وردي","شنطة ظهر اطفال","شنطة سفر يد قماش","شنطة يد كروشيه","شنطة كروس سلسلة دهبي","شنطة ظهر ووتر بروف","شنطة يد جلد طبيعي فاخر","شنطة كتف كبيرة عملية","شنطة لاب توب ظهر","شنطة يد كلاتش سهرة","شنطة كروس جلد مقلوب","شنطة ظهر تكتيكال","شنطة يد خروج انيقة","شنطة سفر قماش خفيف","شنطة كروس رجالي","شنطة ظهر بناتي","شنطة يد جلد مزخرف","شنطة كتف عملية يومية","شنطة لاب توب كروس","شنطة يد جلد هافان","شنطة كروس صغيرة","شنطة ظهر مدرسي ولادي","شنطة سفر بعجل كبير","شنطة يد جلد ابيض في اسود","شنطة كروس قماش","شنطة ظهر لابتوب 17 بوصة","شنطة يد سواريه فضي","شنطة كتف جلد بني غامق"][i],
          price: `${400 + i * 20} ج.م`,
          rating: 4.5 + (i % 5) * 0.1,
          image: `/shoes-bags/${i + 1}.jpg`,
          category: "shoes-bags"
        })),

        // 3. الاكسسوارات - 10 منتج
  ...Array.from({length: 10}, (_, i) => ({
          id: 55 + i,
          name: `اكسوار ${i + 1}`,
          price: `${300 + i * 50} ج.م`,
          rating: 4.6,
          image: `/accessories/${i + 1}.jpg`,
          category: "accessories"
        })),

        // 4. المفروشات
        { id: 65, name: "مرتبة سرير", price: "8000 ج.م", rating: 4.8, image: "/furniture/furn1.jpg", category: "furniture" },
        { id: 66, name: "طقم ملايات", price: "900 ج.م", rating: 4.6, image: "/furniture/furn2.jpg", category: "furniture" },

        // 5. الاجهزة المنزلية - 10 منتج
  ...Array.from({length: 10}, (_, i) => ({
          id: 67 + i,
          name: `جهاز منزلي ${i + 1}`,
          price: `${1000 + i * 500} ج.م`,
          rating: 4.7,
          image: `/home-appliances/${i + 1}.jpg`,
          category: "home-appliances"
        })),

        // 6. الاجهزة الالكترونية
        { id: 77, name: "شاشة 55 بوصة", price: "20000 ج.م", rating: 4.9, image: "/اجهزة/11.jpg", category: "اجهزة" },
      ] as Product[]
    },
    en: { products: [] as Product[] }
  }

  const t = content[lang]

  const filteredProducts = activeCat === "الكل"
? t.products.slice(0, 8)
    : t.products.filter(p => p.category === activeCat)

  return (
    <div dir={isAr? "rtl" : "ltr"} className="min-h-screen bg-black text-white">
      <Header lang={lang} setLang={setLang} t={t} isAr={isAr} />
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 overflow-x-auto py-3">
            {t.categories.map((cat, idx) => (
              <button key={idx} onClick={() => setActiveCat(cat.key)} className={`flex items-center gap-2 whitespace-nowrap transition pb-2 border-b-2 ${activeCat === cat.key? 'text-yellow-500 border-yellow-500' : 'hover:text-yellow-500 border-transparent'}`}>
                <cat.icon className="w-5 h-5" />
                <span className="text-sm font-bold">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8"><Image src="/logo.png" alt="Kayan" width={400} height={200} /></div>
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-gray-400 text-lg">{t.subtitle}</p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-yellow-500">
            {activeCat === "الكل"? t.bestSeller : t.allProducts}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCartText={t.addToCart} />
            ))}
          </div>
        </section>

        <Footer t={t} />
      </main>
    </div>
  )
}