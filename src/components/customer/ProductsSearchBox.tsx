"use client"
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import { Input } from '../ui/input'

interface ProductsSearchBoxProps {
}

const ProductsSearchBox: FC<ProductsSearchBoxProps> = ({ }) => {
    // const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);
    const [search, setSearch] = useState<string | undefined>(undefined);
    const router = useRouter()
    // const handleFocus = () => {
    //     setOpenSearchBox(true)
    // }
    // let domNode = useClickOutside(() => {
    //     setOpenSearchBox(false);
    // });
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            router.push(`/shop?search=${search}`)
        }
    };
    // const handleSearchResultClick=(search:string)=>{
    //     router.push(`/shop?search=${search}`)
    // }
    return (
        <div className="search filter flex-grow relative">
            <div className="">
                <Input value={search} onKeyDown={handleKeyDown} onChange={handleChange} placeholder='Search For Product or Category' className={`ps-10 rounded-sm`} />
                <span className='absolute top-1/2 left-3 -translate-y-1/2'><Search className='text-black/60 w-5 h-5' /></span>
            </div>
            {/* <div className={`w-full h-[300px] absolute z-50 bg-white overflow-hidden rounded-b-sm ${openSearchBox ? "block" : "hidden"}`}>
                <div className="h-full overflow-hidden">
                    <div className="px-3 py-2">
                        <h3 className='font-medium'>
                            {search ? "Search Result" : "Recent Searched"}
                        </h3>
                    </div>
                    <ul className='overflow-y-auto h-[calc(100%-40px)]'>
                        {
                            !search ? <>
                                {
                                    Array.from({ length: 8 }, (_, index: number) => (
                                        <li onClick={()=>handleSearchResultClick("jeans")} key={index} className='px-3 py-1.5 hover:bg-gray flex items-center gap-2 cursor-pointer relative hover:before:h-full before:absolute before:w-1 before:h-0 before:bg-black before:bottom-0 before:left-0'>
                                           
                                                <span><History className='w-4 h-4 text-black/60' /></span>
                                                <div className="">
                                                    <h4 className='text-sm'>Mens Jens <span className='text-xs text-black/60'>(Jeans)</span></h4>
                                                </div>
                                        </li>
                                    ))
                                }
                            </> : (
                                <>
                                    <div className="p-6 flex h-full items-center justify-center flex-col gap-4">
                                        <span>
                                            <Icons.notAvailable className='w-24 h-24 text-black/60' />
                                        </span>
                                        <h6 className='text-black/60 text-xs'>No Such Product Or Category Available</h6>
                                    </div>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div> */}
        </div>
    )
}

export default ProductsSearchBox