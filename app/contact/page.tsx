"use client"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // هنا بعدين هنربطه بالايميل الفعلي
    setSent(true)
  }

  return (
    <div dir="rtl" className="min-h-screen bg-black text-white py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <Link href="/" className="text-yellow-500 hover:underline mb-8 inline-block">
          ← الرجوع للرئيسية
        </Link>
        
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">اتصل بنا</h1>
        <p className="text-gray-400 mb-8">عندك سؤال؟ ابعتلنا رسالة وهنرد عليك في اسرع وقت</p>

        {sent ? (
          <div className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg">
            تم ارسال رسالتك بنجاح! سنتواصل معك قريبا
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">الاسم</label>
              <input 
                type="text" 
                required
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block mb-2">الايميل</label>
              <input 
                type="email" 
                required
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block mb-2">الرسالة</label>
              <textarea 
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold hover:bg-yellow-400">
              ارسال الرسالة
            </button>
          </form>
        )}

        {/* بيانات التواصل السريع */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <h2 className="text-xl font-bold text-yellow-500 mb-4">او تواصل مباشرة</h2>
          <div className="space-y-3">
            <a href="https://wa.me/201224453205" target="_blank" className="block hover:text-yellow-500">
              واتساب: 01224453205
            </a>
            <a href="mailto:kayanmall62@gmail.com" className="block hover:text-yellow-500">
              kayanmall62@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}