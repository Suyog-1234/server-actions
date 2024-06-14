import { CommonComponentTypes } from '@/lib/types/common.types'
import { cn } from '@/lib/utils'
import { FC } from 'react'

interface NavListProps extends CommonComponentTypes{
        
}

const NavList: FC<NavListProps> = ({children,className}) => {
    return (
        <ul className={cn("flex items-start flex-col gap-2",className)}>
             {children}
        </ul>
    )
}

export default NavList