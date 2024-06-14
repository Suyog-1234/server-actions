import { FC, HTMLAttributes, ReactNode } from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'

interface SubmitButton extends HTMLAttributes<HTMLButtonElement>{
    
}

const SubmitButton:FC<SubmitButton> = ({children,...props}) => {
    const {pending} = useFormStatus()
  return (
     <Button type='submit' size={"sm"} variant={"default"} disabled={pending} {...props}>
          {
           pending ? "Loading" : children
          }
     </Button>
  )
}

export default SubmitButton