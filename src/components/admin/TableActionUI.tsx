"use client";

import { FC } from 'react'
import { Button } from '../ui/button'
import { Edit, Eye, Trash } from 'lucide-react'
import { deleteCategory } from '@/lib/actions/categories.action';
import { toast } from 'sonner';

interface TableActionUiProps {
    dataObj: any,
    actions?: string[]
}

const TableActionUi: FC<TableActionUiProps> = ({ dataObj, actions }) => {

    const handleClickViewActionBtn = (product: string) => {

    }

    const handleClickEditActionBtn = (product: string) => {

    }

    const handleClickDeleteActionBtn = async (formData: FormData) => {
        const categoryId = formData.get("categoryId") as string
        const { success, error, message } = await deleteCategory(categoryId);
        if (!success) {
            toast.error(error)
        } else {
            toast.success(message)
        }
    }
    return (
        <>
            {
                !actions ? (
                    <div className="flex items-center gap-2 justify-end">
                        <Button onClick={() => handleClickViewActionBtn(dataObj)} className='w-8 h-8' variant="outline" size="icon">
                            <Eye className='w-4 h-4' />
                        </Button>
                        <Button onClick={() => handleClickEditActionBtn(dataObj)} className='w-8 h-8' variant="outline" size="icon">
                            <Edit className='w-4 h-4' />
                        </Button>
                        <form action={handleClickDeleteActionBtn}>
                            <Button type='submit' name='categoryId' value={dataObj.id} className='w-8 h-8' variant="outline" size="icon">
                                <Trash className='w-4 h-4 text-red' />
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 justify-end">
                        {
                            actions.includes("view") && <Button onClick={() => handleClickViewActionBtn(dataObj)} className='w-8 h-8' variant="outline" size="icon">
                                <Eye className='w-4 h-4' />
                            </Button>
                        }
                        {
                            actions.includes("edit") && <Button onClick={() => handleClickEditActionBtn(dataObj)} className='w-8 h-8' variant="outline" size="icon">
                                <Edit className='w-4 h-4 text-blue-2' />
                            </Button>
                        }
                        {
                            actions.includes("delete") && <form action={handleClickDeleteActionBtn}>
                                <Button type='submit' name='categoryId' value={dataObj.id} className='w-8 h-8' variant="outline" size="icon">
                                    <Trash className='w-4 h-4 text-red' />
                                </Button>
                            </form>
                        }
                    </div>
                )
            }
        </>
    )
}

export default TableActionUi