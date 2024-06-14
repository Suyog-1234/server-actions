import { ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import Container from '../common/Container'
import { Button } from '../ui/button'
import ProductsSearchBox from './ProductsSearchBox'

interface HeaderProps {

}
const Header: FC<HeaderProps> = ({ }) => {
  return (
    <header className='py-3 fixed top-0 left-0 bg-white w-full z-40 border-b border-gray'>
      <Container>
        <div className="header-wrapper flex items-center justify-between gap-8">
          <div className="logo-part"><h3 className='font-bold text-black text-2xl'>SHOP.CO</h3></div>
          <div className="navigation-part xl:flex hidden items-center gap-8 flex-grow ">
            <ul className='flex items-center gap-8'>
              <li><Link href={""} className='text-sm'>Shop</Link></li>
              <li><Link href={""} className='text-sm'>On Sale</Link></li>
              <li><Link href={""} className='text-sm'>New Arrival</Link></li>
              <li><Link href={""} className='text-sm'>Brands</Link></li>
            </ul>
           <ProductsSearchBox/>
          </div>
          <div className="action-part flex items-center gap-4">
            <Button size={"icon"} variant={"icon"}>
              <ShoppingCart />
            </Button>
            <Button size={"icon"} variant={"icon"}>
              <User />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header