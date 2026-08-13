import Image from 'next/image'
import { Star, ShoppingCart } from 'lucide-react'

type Product = {
  id: number
  name: string
  price: string
  rating: number
  image: string
  category: string
}

export default function ProductCard({ 
  product, 
  addToCartText 
}: { 
  product: Product, 
  addToCartText: string 
}) {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden border-gray-800 hover:border-yellow-500 transition-all duration-300 group shadow-lg hover:shadow-yellow-500/20 flex flex-col">
      
      {/* الصورة كبيرة وكاملة بدون قص */}
      <div className="relative w-full h-80 bg-gray-800 overflow-hidden">
        <Image 
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3 group-hover:scale-105 transition duration-500" // <-- ده السطر اللي اتغير
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-3 h-14 overflow-hidden leading-tight">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-600'}`} 
            />
          ))}
          <span className="text-sm text-gray-400 ml-1">({product.rating})</span>
        </div>

        <div className="mt-auto">
          <p className="text-yellow-500 font-extrabold text-3xl mb-4">{product.price}</p>
          
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3.5 rounded-xl transition-all duration-300 text-lg flex items-center justify-center gap-2 hover:scale-[1.02]">
            <ShoppingCart className="w-5 h-5" />
            {addToCartText}
          </button>
        </div>
      </div>
    </div>
  )
}