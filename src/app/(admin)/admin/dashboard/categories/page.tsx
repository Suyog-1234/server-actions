import TableActionUi from '@/components/admin/TableActionUI';
import AddCategoryDialog from '@/components/admin/dialogs/AddCategoryDialog';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { db } from '@/lib/db';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
    title: 'Categories',
    description: 'Product Categories Managment',
}

interface pageProps {
}

const fetchCategories = async () => {
    const categories = await db.category.findMany({
        include:{
            products:{}
        }
    });
    return categories
}

const Page: FC<pageProps> = async ({ }) => {
    const categories = await fetchCategories()
    return (
        <section className='p-5'>
            <div className="section-title mb-5 flex items-center justify-between gap-4">
                <h2 className='text-xl font-semibold uppercase'>Categories</h2>
                <AddCategoryDialog />
            </div>
            <div className="section-content">
                <div className="rounded-sm border border-black/10 overflow-hidden">
                    <div className="relative w-full overflow-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Name</TableHead>
                                    <TableHead className="">Products</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {categories.map((category, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium w-[240px]">{category.name}</TableCell>
                                        <TableCell className="font-medium w-[240px]">{category.products.length}</TableCell>
                                        <TableCell className="font-medium">
                                            <TableActionUi
                                                actions={["edit", "delete"]}
                                                dataObj={category} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={5}>
                                        <div className="flex items-center justify-end">
                                            <div className="flex-1 text-sm text-muted-foreground">
                                                10 selected.
                                            </div>
                                            <div className="space-x-2 flex items-center">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Previous
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Next
                                                </Button>
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page