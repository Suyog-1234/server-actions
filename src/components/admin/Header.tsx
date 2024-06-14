import { ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import Container from '../common/Container'
import { Button } from '../ui/button'

interface HeaderProps {

}
const Header: FC<HeaderProps> = ({ }) => {
  return (
    <header className='py-3 px-4 fixed top-0 left-0 bg-white w-full z-40 border-b border-gray'>
        <div className="header-wrapper flex items-center justify-between gap-8">
          <div className="logo-part"><h3 className='font-bold text-black text-2xl'>SHOP.CO</h3></div>
        </div>
    </header>
  )
}

export default Header