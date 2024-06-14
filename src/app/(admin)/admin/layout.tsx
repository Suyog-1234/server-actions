import Header from '@/components/admin/Header'
import Sidebar from '@/components/admin/Sidebar'
import { FC, ReactNode } from 'react'

interface layoutProps {
    children: ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <main className='pt-[56px] pl-[250px]'>
                {children}
            </main>
        </>
    )
}

export default layout