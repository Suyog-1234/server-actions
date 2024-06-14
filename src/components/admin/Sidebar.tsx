"use client";

import { FC } from 'react'
import { Landmark, PackageSearch, ShoppingBasket, ShoppingCart, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import NavList from './NavList';
import NavListItem from './NavListItem';
import { NavigationItemProps } from '@/lib/types/admin.types';

interface SidebarProps {

}
const navigation: NavigationItemProps[] = [
  { navLink: "Customers", navHref: "/admin/dashboard",icon:<User className='w-5 h-5'/>},
  { navLink: "Sales", navHref: "/admin/dashboard/sales",icon:<Landmark className="w-5 h-5"/>},
  { navLink: "Products", navHref: "/admin/dashboard/products",icon:<PackageSearch className='w-5 h-5'/>},
  { navLink: "Categories", navHref: "/admin/dashboard/categories",icon:<ShoppingBasket className='w-5 h-5'/>},
  { navLink: "Orders", navHref: "/admin/dashboard/orders",icon:<ShoppingCart className='w-5 h-5'/>}
]
const Sidebar: FC<SidebarProps> = ({ }) => {
  const pathname = usePathname()
  return (
    <aside className='w-[250px] fixed top-[56px] left-0 h-[calc(100vh-56px)] z-40 bg-gray'>
      <div className="p-3">
        <NavList>
          {
            navigation?.map((navItem: NavigationItemProps, index: number) => (
              <NavListItem isActive={pathname == navItem.navHref} navItem={navItem} key={index} />
            ))
          }
        </NavList>
      </div>
    </aside>
  )
}

export default Sidebar