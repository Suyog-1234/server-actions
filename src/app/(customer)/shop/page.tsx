import Container from '@/components/common/Container'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { ChevronLeftIcon, ChevronRightIcon, Filter, SlidersHorizontal } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface pageProps {

}
type ColorProps = {
     color:string,
     code:string
}
const colors:ColorProps[] =[
     {color:"green",code:"#00C12B"},
     {color:"red",code:"#F50606"},
     {color:"yellow",code:"#F5DD06"},
     {color:"orange",code:"#F57906"},
     {color:"sky",code:"#06CAF5"}
]
const page: FC<pageProps> = ({ }) => {
    return (
        <section className='py-4'>
            <Container>
                <div className="section-content">
                    <div className="mb-4">
                        <ul className='flex items-center gap-2'>
                            <li><Link href={"/"} className='text-black text-sm'>Home</Link></li>
                            <li><ChevronRightIcon className='w-4 h-4 text-black/60' /></li>
                            <li><Link href={"/shop"} className='text-black/60 text-sm'>shop</Link></li>
                        </ul>
                    </div>
                    <div className="flex gap-10">
                        <div className="filter-sidebar w-[280px] sticky top-[80px] p-6 h-[calc(100vh-100px)] border border-gray rounded-md flex-shrink-0 overflow-y-auto">
                            <div className="flex items-center justify-between gap-4">
                                <h3 className='text-lg font-medium'>Filters</h3>
                                <SlidersHorizontal className='text-black/60 w-5 h-5' />
                            </div>
                            <Separator className='my-4' />
                            <div className="">
                                <RadioGroup defaultValue="men">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="men" id="r1" />
                                        <Label className='cursor-pointer' htmlFor="r1">Men</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="women" id="r2" />
                                        <Label className='cursor-pointer' htmlFor="r2">Women</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="boy" id="r3" />
                                        <Label className='cursor-pointer' htmlFor="r3">Boy</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="girl" id="r4" />
                                        <Label className='cursor-pointer' htmlFor="r4">Girl</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <Separator className='my-4' />
                            <div className="">
                                <div className="flex items-center justify-between gap-4 mb-3">
                                    <h3 className='text-lg font-medium'>Categories</h3>
                                </div>
                                <ul>
                                    <li className='mb-3 last:mb-0 group'><Link href={"/"} className='flex items-center justify-between text-sm text-black/60 group-hover:text-black'>T-shirts <span><ChevronRightIcon className='w-4 h-4' /></span></Link></li>
                                    <li className='mb-3 last:mb-0 group'><Link href={"/"} className='flex items-center justify-between text-sm text-black/60 group-hover:text-black'>Shorts <span><ChevronRightIcon className='w-4 h-4' /></span></Link></li>
                                    <li className='mb-3 last:mb-0 group'><Link href={"/"} className='flex items-center justify-between text-sm text-black/60 group-hover:text-black'>Shirts <span><ChevronRightIcon className='w-4 h-4' /></span></Link></li>
                                    <li className='mb-3 last:mb-0 group'><Link href={"/"} className='flex items-center justify-between text-sm text-black/60 group-hover:text-black'>Hoodie <span><ChevronRightIcon className='w-4 h-4' /></span></Link></li>
                                    <li className='mb-3 last:mb-0 group'><Link href={"/"} className='flex items-center justify-between text-sm text-black/60 group-hover:text-black'>Jeans <span><ChevronRightIcon className='w-4 h-4' /></span></Link></li>
                                </ul>
                            </div>
                            <Separator className='my-4' />
                            <div className="">
                                <div className="flex items-center justify-between gap-4 mb-3">
                                    <h3 className='text-lg font-medium'>Price Range</h3>
                                </div>
                                <RadioGroup defaultValue="men">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="men" id="r1" />
                                        <Label className='cursor-pointer' htmlFor="r1">Rs. 351 to Rs. 17389</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="women" id="r2" />
                                        <Label className='cursor-pointer' htmlFor="r2">Rs. 351 to Rs. 17389</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="boy" id="r3" />
                                        <Label className='cursor-pointer' htmlFor="r3">Rs. 351 to Rs. 17389</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="girl" id="r4" />
                                        <Label className='cursor-pointer' htmlFor="r4">Rs. 351 to Rs. 17389</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <Separator className='my-4' />
                            <div className="">
                                <div className="flex items-center justify-between gap-4 mb-3">
                                    <h3 className='text-lg font-medium'>Colors</h3>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    {
                                         colors.map((color,index)=>(
                                            <div key={index} className={`w-8 h-8 rounded-full border border-gray flex-shrink-0`} style={{backgroundColor:color.code}}></div>
                                         )) 
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolores nam assumenda maiores sed architecto voluptatibus cumque iste repellendus temporibus error doloribus exercitationem fugit est numquam, magnam saepe! Expedita corporis enim accusantium molestiae? Quos consequuntur eius quisquam velit iure cum fugiat nihil impedit corrupti placeat sunt totam corporis, quasi reiciendis error molestias laudantium dolores repellendus quas consequatur. Sint dolore quas magnam distinctio corrupti necessitatibus porro adipisci consectetur atque in totam harum illum quia, eligendi id tempora? Fuga sunt aspernatur tempora sint, cumque reprehenderit laboriosam dolor necessitatibus quidem unde quasi ullam sed commodi qui id. Labore officiis eligendi laudantium quas minus consequuntur quo eius ipsum dolorem atque, debitis inventore beatae sit in magnam et tempore corrupti, at quis eos totam, doloremque deserunt adipisci laborum. Nulla consectetur numquam voluptas vel enim omnis similique doloribus sit nobis quod ratione, quam adipisci maxime neque repudiandae distinctio vitae in. Velit eos fuga amet ipsum beatae sequi unde rerum neque nihil voluptatem? Saepe minima velit assumenda magnam? Corrupti, quo officia, qui eaque fuga maxime nostrum tenetur aspernatur enim numquam assumenda repudiandae ratione excepturi asperiores temporibus consequatur consectetur amet alias? Corrupti nobis beatae eius! Facere exercitationem et quas delectus. Rerum impedit temporibus consequuntur quam facilis! Neque excepturi ex voluptatem omnis, accusamus eum nesciunt qui eos! Cupiditate placeat quod eaque nam perspiciatis dolorum voluptas labore? Quaerat, voluptatum corporis harum maxime at quod, dignissimos aut blanditiis, dolor esse ex fuga. Eligendi mollitia qui cum iure maiores, iusto non similique blanditiis neque sunt ratione odit nemo voluptatem omnis? Ratione sunt explicabo officia laudantium amet qui odio rerum earum dicta consectetur alias dolorum dolore quidem harum, suscipit vitae! Dolorum, numquam. Fugiat error porro inventore magnam, consectetur doloribus amet assumenda quaerat accusantium numquam laboriosam molestiae natus praesentium. Cupiditate optio aliquam veniam, in rerum labore earum molestiae, fugit eveniet officiis ut molestias nihil ipsum facere, pariatur culpa aspernatur. Odit consequuntur hic explicabo aliquam iusto pariatur ducimus quis repellat repudiandae unde? Non maxime atque ab assumenda magni molestiae, sequi ex excepturi amet, fugiat sapiente neque? Rem voluptas laboriosam, harum et dolorem enim repellendus quasi assumenda ab optio qui aperiam dolorum minus beatae nam magni possimus, fuga placeat omnis distinctio tempora odit aliquid sequi quod? Consectetur laborum, voluptate illo vitae enim nam debitis nisi animi et eum similique vero quam tenetur ea tempora expedita voluptatem deleniti iure! Repellendus, sed unde cum ipsum fuga explicabo voluptate temporibus, vero illo neque, itaque necessitatibus assumenda. Eveniet at, corrupti ipsam quasi saepe quidem quos atque reiciendis eum? Tempore repudiandae eveniet eius. Ratione qui earum necessitatibus et, suscipit itaque at, maxime quia odit reprehenderit fugiat repellendus veritatis minima optio rerum voluptates. Facilis nostrum maiores, sequi quidem quo eligendi iure atque, quasi molestiae inventore fugiat enim. Error quod odio temporibus assumenda fuga cum sed vitae praesentium, voluptas nihil, debitis totam itaque velit, est pariatur odit nostrum accusamus excepturi reprehenderit adipisci ad nobis. Iure, eveniet omnis commodi eum eaque quos facilis! Iste excepturi impedit, magni asperiores necessitatibus error odit, voluptas quisquam saepe ad illo mollitia eum. Ad corrupti aut ratione ab, quam debitis non ipsam similique voluptatum sapiente minus distinctio! Cupiditate, voluptates a. Iste mollitia aperiam fuga obcaecati amet natus iure reprehenderit doloribus expedita, asperiores quis inventore architecto eveniet, in excepturi ipsa accusantium dolorum maxime odit voluptate illum. Corporis, hic nesciunt error aut quas architecto officia rem ipsam aperiam fuga quidem, in deserunt placeat? Optio alias necessitatibus saepe quibusdam doloremque quidem iste magni eaque autem? Quibusdam, error cumque odit omnis sed magni, repudiandae quia delectus nihil sunt natus doloremque culpa vero odio amet aliquam reprehenderit voluptate perspiciatis sit blanditiis exercitationem! Error rerum, pariatur ex voluptas nam odio maiores nisi unde voluptate molestias praesentium reprehenderit! Consectetur aliquid voluptas obcaecati, praesentium qui soluta possimus atque aperiam eos excepturi hic, laborum asperiores repudiandae ad quisquam deserunt eligendi maiores ipsam! Totam fugiat odit, soluta eaque consequuntur, corporis aperiam omnis cumque esse beatae aliquam natus ea vero optio, nostrum sit quos autem? Neque facilis, placeat at voluptatem dolorum dolore odio molestias natus similique laboriosam doloremque? Aut distinctio natus, laborum error, iusto, reprehenderit officiis doloremque fuga earum a veniam placeat saepe et quos voluptas nulla culpa consequuntur facere? Pariatur optio explicabo dicta, quos quasi eaque iure, non commodi ea possimus officiis? Dolores deserunt possimus sapiente recusandae quos, iusto tempora facere nulla? Perspiciatis blanditiis, accusamus quam aperiam quae dolorem excepturi alias magni molestiae est hic a veritatis quisquam, dolorum unde earum tenetur ratione quidem facilis mollitia. Quia odit illo beatae, nostrum laborum consectetur aliquam veniam vero nam, inventore, unde molestias doloribus? Perspiciatis atque voluptatibus mollitia fugit tempore amet debitis ullam, dolore, animi necessitatibus sed dignissimos similique. Omnis fuga perspiciatis tenetur delectus incidunt id cum magni laudantium. Inventore aspernatur dignissimos praesentium similique suscipit optio quia, earum tenetur molestias sed veniam provident? Voluptates quis quidem rem et molestiae dolores iste ipsa recusandae modi dicta totam corrupti, quasi quia repudiandae nesciunt repellendus facere harum dolorem distinctio tempore cum deserunt. Unde omnis, quam, impedit illum enim non harum amet nihil quod minus ratione reprehenderit ut corrupti. Iusto laborum maxime, ratione, deleniti esse ea enim eveniet hic dignissimos repellendus eligendi facere suscipit, at sed saepe expedita nesciunt nihil ducimus! Earum tenetur animi tempore deleniti quibusdam est modi dignissimos, reprehenderit magnam vel quam ullam, officia velit veritatis, fugit explicabo ipsam mollitia dolore. Tempora quae quas perferendis odio non voluptatum voluptatibus a modi tenetur quidem sint, eius amet reprehenderit veritatis beatae iusto placeat, ut autem sapiente repellendus animi? Velit veniam aut minima facere perspiciatis ipsum iste sapiente explicabo quam atque minus consequatur blanditiis officiis reiciendis neque, iure fugiat libero illum ratione porro commodi culpa nostrum aliquid. Dolore, nihil aspernatur. Odit itaque, harum nesciunt ad laudantium cum voluptatem vitae, fuga libero praesentium quis voluptas saepe porro voluptate, tempora molestias fugiat aliquam dignissimos blanditiis atque expedita in rerum? Asperiores vero labore deserunt praesentium iste eveniet reiciendis. Fugit possimus ducimus facilis consequatur, sunt ipsum, eum voluptatibus hic repellendus blanditiis maiores deserunt dolor quae illum aliquam veritatis quia et laudantium numquam alias reprehenderit, minus delectus harum! Praesentium sed dignissimos eligendi. Asperiores, atque quasi suscipit et eligendi voluptas? Dicta, eum vitae?</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default page