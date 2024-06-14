import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'
interface ContainerProps extends HTMLAttributes<HTMLDivElement>{
} 

const Container: FC<ContainerProps> = ({children,className}) => {
  return (
      <div className={cn("container",className)}>
           {children}
      </div>
  )
}

export default Container