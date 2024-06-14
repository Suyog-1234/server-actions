"use client";

import SubmitButton from '@/components/common/submit-btn';
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { addCategory } from '@/lib/actions/categories.action'
import { FC, useState } from 'react'
import { toast } from 'sonner'

interface AddCategoryDialogProps {
    
}

const AddCategoryDialog: FC<AddCategoryDialogProps> = () => {
    const handleSubmit = async (formData: FormData) => {
        const { error, success, message } = await addCategory(formData)
        if (!success) {
            toast.error(error)
        } else {
            toast.success(message)
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} size={"sm"}>Add Category</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className=''>
                    <DialogTitle>Add Category</DialogTitle>
                </DialogHeader>
                <div className="body">
                    <form action={handleSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="">
                                <Label htmlFor="name" className="text-right text-sm text-black inline-block mb-2 font-medium">
                                    Category Name
                                </Label>
                                <Input
                                    id="categoryName"
                                    name='categoryName'
                                    type='text'
                                    defaultValue="Pedro Duarte"
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter className='flex items-center sm:justify-center'>
                            <SubmitButton>
                                 Add Category
                            </SubmitButton>
                        </DialogFooter>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AddCategoryDialog