import Link from 'next/link'

type FooterProps = {
  t: any
}

export default function Footer({ t }: FooterProps) {
  return (
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
              </li>
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
          <div>
            <h3 className="text-yellow-500 font-bold mb-4">{t.contact}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="https://wa.me/201224453205" target="_blank" className="hover:text-yellow-500 transition">
                  {t.whatsapp}
                </a>
              </li>
              <li>
                <a href="mailto:kayanmall62@gmail.com" className="hover:text-yellow-500 transition">
                  {t.email}
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kayanmall62@gmail.com" target="_blank" className="hover:text-yellow-500 transition">
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
  )
}