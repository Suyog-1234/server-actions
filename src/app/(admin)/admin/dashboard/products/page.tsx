import AddProductDialog from '@/components/admin/dialogs/AddProductDialog';
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
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
    title: 'Categories',
    description: 'Product Categories Managment',
}

interface pageProps {
}


const Page: FC<pageProps> = async ({ }) => {
    return (
        <section className='p-5'>
            <div className="section-title mb-5 flex items-center justify-between gap-4">
                <h2 className='text-xl font-semibold uppercase'>Products</h2>
                <AddProductDialog />
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