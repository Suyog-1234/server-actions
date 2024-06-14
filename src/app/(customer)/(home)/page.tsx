import Container from '@/components/common/Container'
import ProductCard from '@/components/customer/ProductCard'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'
interface pageProps {

}
export type Product = {
  name: string,
  price: number,
  image: string
}
const products: Product[] = [
  { name: "T-SHIRT WITH TAPE DETAILS", price: 230, image: "beige_1" },
  { name: "T-SHIRT WITH TAPE DETAILS", price: 330, image: "blue_1" },
  { name: "T-SHIRT WITH TAPE DETAILS", price: 130, image: "green_1" },
  { name: "T-SHIRT WITH TAPE DETAILS", price: 240, image: "purple_1" }
]
const page: FC<pageProps> = ({ }) => {
  return (
    <div className=''>
      <section className='bg-gray py-10 md:py-16 xl:py-0'>
        <Container>
            <div className="flex items-center max-w-[80%] mx-auto text-center  gap-4 xs:gap-6 flex-col 2xl:py-24 xl:py-16 py-0 ">
              <h1 className='text-3xl xs:text-4xl 2xl:text-6xl font-bold leading-[1.1] lg:max-w-[60%] mx-auto'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p className='text-black/60 text-xs xs:text-sm leading-[1.6]  lg:max-w-[60%]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <Button className='sm:w-auto w-full'>
                Shop Now
              </Button>
            </div>
        </Container>
      </section>
      <section className='py-10 pb-0'>
        <Container>
          <div className="section-content">
            <div className="section-title  text-center mb-10">
              <h2 className='font-bold text-4xl text-space'>NEW ARRIVALS</h2>
            </div>
            <div className="section-body  mb-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {
                  products?.map((product: Product, index: number) => (
                    <ProductCard key={index} data={product} />
                  ))
                }
              </div>
            </div>
            <div className="section-footer flex items-center justify-center">
              <Link href='' className={cn(buttonVariants({variant:"outline"}))}>
                View More
               </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className='py-10'>
        <Container>
          <div className="section-content">
            <div className="section-title  text-center mb-10">
              <h2 className='font-bold text-4xl text-space'>TOP SELLING</h2>
            </div>
            <div className="section-body  mb-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {
                  products?.map((product: Product, index: number) => (
                    <ProductCard key={index} data={product} />
                  ))
                }
              </div>
            </div>
            <div className="section-footer flex items-center justify-center">
              <Link href='' className={cn(buttonVariants({variant:"outline"}))}>
                View More
               </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default page