import Footer from '@/components/customer/Footer'
import Header from '@/components/customer/Header'
import { FC, ReactNode } from 'react'

interface layoutProps {
    children: ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className='pt-[60px]'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default layout