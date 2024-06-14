import { Product } from '@/app/(customer)/(home)/page'
import Image from 'next/image'
import { FC } from 'react'

interface ProductCardProps {
   data:Product
}

const ProductCard: FC<ProductCardProps> = ({data}) => {
  return (
     <div className="product-card cursor-pointer">
         <div className="img-wrapper w-full h-[175px] sm:h-[220px] lg:h-[240px] xl:h-[280px] bg-gray mb-3 rounded-sm">
              <Image src={`/t-shirts/${data.image}.png`} alt="" width={2048} height={2048} className='w-full h-full object-contain'/>
         </div>
         <div className="">
             <h3 className='text-sm sm:text-base text-black/60 font-medium mb-1'>{data.name}</h3>
             <span className='text-xl font-medium'>${data.price}</span>
         </div>
     </div>
  )
}

export default ProductCard