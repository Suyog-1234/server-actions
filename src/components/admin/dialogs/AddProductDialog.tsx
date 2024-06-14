"use client";

import CategorySelectBox from '@/components/common/CategorySelectBox';
import SubmitButton from '@/components/common/submit-btn';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { addProduct } from '@/lib/actions/products.action';
import { FC } from 'react';
import { toast } from 'sonner';

interface AddProductDialogProps {
    
}

const AddProductDialog: FC<AddProductDialogProps> = () => {
    const handleSubmit = async (formData: FormData) => {
        const { error, success, message } = await addProduct(formData)
        if (!success) {
            toast.error(error)
        } else {
            toast.success(message)
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} size={"sm"}>Add Product</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className=''>
                    <DialogTitle>Add product</DialogTitle>
                </DialogHeader>
                <div className="body">
                    <form action={handleSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="">
                                <Label htmlFor="name" className="text-right text-sm text-black inline-block mb-2 font-medium">
                                    Product Name
                                </Label>
                                <Input
                                    id="productName"
                                    name='productName'
                                    type='text'
                                    defaultValue="Pedro Duarte"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="">
                                <Label htmlFor="name" className="text-right text-sm text-black inline-block mb-2 font-medium">
                                    Product Price
                                </Label>
                                <Input
                                    id="productPrice"
                                    name='productPrice'
                                    type='number'
                                    defaultValue="Pedro Duarte"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="">
                                <Label htmlFor="name" className="text-right text-sm text-black inline-block mb-2 font-medium">
                                    Category Name
                                </Label>
                               <CategorySelectBox name="category" id='category'/>
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

export default AddProductDialog