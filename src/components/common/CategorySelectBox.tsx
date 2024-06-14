"use client";

import { getCategories } from '@/lib/actions/categories.action';
import { FC, HTMLAttributes } from 'react'
import { useQuery } from 'react-query';

interface CategorySelectBoxProps extends HTMLAttributes<HTMLSelectElement>{
    name?:string
    id?:string
}

const CategorySelectBox: FC<CategorySelectBoxProps> = ({name,id,...props}) => {
    const { data: categories} = useQuery({
        queryFn: async () => await getCategories(),
        queryKey: ["categories"]
    });
    return (
        <select name={name} id={id} {...props} className='block w-full py-1.5 px-3 bg-gray  rounded-lg'>
            {
                categories?.map((category, index) => (
                    <option value={category.id} key={index}>{category.name}</option>
                ))
            }
        </select>
    )
}

export default CategorySelectBox