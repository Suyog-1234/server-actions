import { NavigationItemProps } from '@/lib/types/admin.types'
import { CommonComponentTypes } from '@/lib/types/common.types'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'

interface NavListItemProps extends CommonComponentTypes{
     navItem:NavigationItemProps,
     isActive:boolean
}

const NavListItem: FC<NavListItemProps> = ({navItem,isActive,className}) => {
    return (
        <li className='w-full'>
            <Link href={navItem.navHref} className={cn(`text-sm font-medium flex items-center gap-3 px-3 py-2.5 hover:bg-accent rounded-sm overflow-hidden ${isActive && "bg-gold/15"}`,className)}>
                  <span>{navItem.icon}</span>
                  {navItem.navLink}
            </Link>
        </li>
    )
}

export default NavListItem