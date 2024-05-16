import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContentClicked, GoToConf, ProductClick, ProductDetails } from "@/lib/RecoilContextProvider"
import { Luggage, User } from "lucide-react"
import { useRecoilState, useSetRecoilState } from "recoil"
interface Props {
    STime1: string,
    STimeArrival: string,
    V1: string,
    V1Des: string,
    EntireCarV1: string,
    PassengerV1: number,
    luggageV1: number,
    V1Price: number,
    V2: string,
    V2Des: string,
    EntireCarV2: string,
    PassengerV2: number,
    luggageV2: number,
    V2Price: number,
}
const RideBlocks = ({ STime1, STimeArrival, V1, V1Des, EntireCarV1, PassengerV1, luggageV1, V1Price, V2, V2Des, EntireCarV2, PassengerV2, luggageV2, V2Price }: Props) => {
    const [details, setDetails] = useRecoilState(ProductDetails)
    const setProductClick = useSetRecoilState(ProductClick)
    const setContentClicked = useSetRecoilState(ContentClicked)
    const setGoToConf = useSetRecoilState(GoToConf)
    return (
        <div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <button className='text-left w-full no-underline rounded-[16px] p-[16px] rounded-b-[0px] cursor-pointer'>
                            <button className='flex justify-between items-center no-underline'>
                                <div className='flex flex-col text-left gap-y-1'>
                                    <span className=" font-bold text-[16px] text-black no-underline">{STime1}</span>
                                    <span className='text-sm text-[#6a6a6a] no-underline'>{STimeArrival}</span>
                                </div>
                            </button>
                        </button>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='min-h-0 overflow-hidden h-auto'>
                            <div className='w-full'>
                                <div className='flex flex-col gap-y-[16px] p-[16px] '>
                                    <div className='bg-white rounded-[16px]'>
                                        <div className='px-[12px] py-[16px] flex flex-col border-b '>
                                            <span className='font-bold text-[16px] text-black'>{V1}</span>
                                            <span className='text-xs text-[#6a6a6a] '>{V1Des}</span>
                                        </div>
                                        <div className='flex flex-col'>
                                            <button className=' px-[16px] py-[8px] flex items-center justify-between cursor-pointer' onClick={() => {
                                                setGoToConf(true)
                                                setContentClicked(false)
                                                setProductClick(true)
                                                setDetails({ ...details, CarName: V1, EntireCar: EntireCarV1, Price: V1Price, STime: STime1, STimeArrival: STimeArrival })
                                            }}>
                                                <div className='flex flex-col justify-start'>
                                                    <span className='font-bold text-[16px] text-black'>{EntireCarV1}</span>
                                                    <div className='text-left'>
                                                        <div className='text-sm flex items-center text-[#6a6a6a]'>
                                                            <User className='w-[12px] h-[12px] mr-[2px]' />
                                                            <span className='font-bold'>{PassengerV1}</span>
                                                            <Luggage className='w-[12px] h-[12px] mr-[2px]' />
                                                            <span className='font-bold'>{luggageV1}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div >
                                                    <div className='font-bold flex text-center'><span className='text-black text-[16px]'>$ {V1Price}</span></div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    <div className='bg-white rounded-[16px]'>
                                        <div className='px-[12px] py-[16px] flex flex-col border-b '>
                                            <span className='font-bold text-[16px] text-black'>{V2}</span>
                                            <span className='text-xs text-[#6a6a6a] '>{V2Des}</span>
                                        </div>
                                        <div className='flex flex-col'>
                                            <button className=' px-[16px] py-[8px] flex items-center justify-between cursor-pointer' onClick={() => {
                                                setGoToConf(true)
                                                setContentClicked(false)
                                                setProductClick(true)
                                                setDetails({ ...details, CarName: V2, EntireCar: EntireCarV2, Price: V2Price, STime: STime1, STimeArrival: STimeArrival })
                                            }}>
                                                <div className='flex flex-col justify-start'>
                                                    <span className='font-bold text-[16px] text-black'>{EntireCarV2}</span>
                                                    <div className='text-left'>
                                                        <div className='text-sm flex items-center text-[#6a6a6a]'>
                                                            <User className='w-[12px] h-[12px] mr-[2px]' />
                                                            <span className='font-bold'>{PassengerV2}</span>
                                                            <Luggage className='w-[12px] h-[12px] mr-[2px]' />
                                                            <span className='font-bold'>{luggageV2}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div >
                                                    <div className='font-bold flex text-center'><span className='text-black text-[16px]'>$ {V2Price}</span></div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    )
}

export default RideBlocks