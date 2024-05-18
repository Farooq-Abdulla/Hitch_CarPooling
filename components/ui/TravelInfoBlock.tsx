'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import { ContentClicked, CorouselCurrent, DropOff, GoToConf, PickUp, ProductClick, ProductDetails } from "@/lib/RecoilContextProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import AffordableRides from "./AffordableRides";
import { CarouselDemo } from "./CarouselSmall";
import PlaceSearchDestination from "./DestPlaceApi";
import PlaceSearchOrigin from "./OriginPlaceApi";
import SelectedProduct from "./SelectedProduct";



const TravelInfoBlock = () => {
    const router = useRouter();
    const [date, setDate] = useState<Date | undefined>(new Date())

    const pickUp = useRecoilValue(PickUp)
    const dropOff = useRecoilValue(DropOff)
    const current = useRecoilValue(CorouselCurrent)
    // console.log("PickUp and DropOff: ", pickUp, dropOff)


    const formattedDate = date?.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });
    const Details = useRecoilValue(ProductDetails)
    const Clicked = useRecoilValue(ProductClick)
    const [contentClicked, setContentClicked] = useRecoilState(ContentClicked)
    const conf = useRecoilValue(GoToConf)

    async function handleSubmit() {
        try {
            const response = await axios.post("api/checkoutSession",
                {
                    details: Details
                }
            );
            console.log(response.data)
            router.push(response.data)
        } catch (error) {
            console.log("Error while handling Submit in Travel Info Block", error)
        }

    }



    return (
        <div className='w-[464px] p-[16px] max-h-full no-scrollbar overflow-y-auto bg-[#FFFFFF] absolute z-10 mx-3 bottom-3 '>
            <div className='flex flex-col gap-y-4 relative'>

                <Accordion type="single" collapsible   >
                    <AccordionItem value="1" >
                        <AccordionTrigger onClick={() => setContentClicked(true)} >

                            <div className='bg-white w-full rounded-[20px] border border-[#DBDBDB] '>
                                <button className='rounded text-left w-full cursor-pointer no-underline '>
                                    <div className='flex justify-between items-center w-full p-[24px] '>
                                        <span className='text-[#6A6A6A] text-[16px] font-bold mr-[40px]'>Pick-up</span>
                                        <span className='flex flex-col text-right'>
                                            <span className='text-[16px] text-[#212529] font-bold'>{pickUp} </span>
                                            <span className='text-[#2075CE] text-[16px] '> 4 min away</span>
                                        </span>
                                    </div>
                                </button>

                            </div>
                        </AccordionTrigger>
                        {contentClicked && <AccordionContent>
                            <div className="w-full flex flex-col ">
                                <div className="p-[24px] pt-[8px] flex flex-col gap-y-[16px]">
                                    <div className="flex flex-col flex-1 overflow-hidden">
                                        <div className="rounded-[12px] ">
                                            <PlaceSearchOrigin />
                                        </div>
                                    </div>
                                    <button className="cursor-pointer rounded-[8px] px-[20px] py-[16px] border-solid border-2 border-black ">
                                        <div className="flex flex-col text-left ">
                                            <span className="text-[16px] text-[#212529]">Hitch location</span>
                                            <span className="text-[14px] text-[#6a6a6a] leading-[20px]">
                                                <span>Starting at $--</span>
                                            </span>

                                        </div>
                                    </button>

                                    <button className="cursor-pointer rounded-[8px] px-[20px] py-[16px] border-solid border-2 border-black ">
                                        <div className="flex flex-col text-left ">
                                            <span className="text-[16px] text-[#212529]">Pick me at {pickUp}</span>
                                            <span className="text-[14px] text-[#6a6a6a] leading-[20px]">
                                                <span>Starting at $-- </span>

                                            </span>

                                        </div>
                                    </button>
                                </div>
                                <div className="flex justify-between items-center border-t py-[8px] pl-[12px] pr-[24px]">
                                    <button className="px-[24px] rounded-[10px] py-[16px] flex mr-[10px]">
                                        <span className="flex flex-col text-left">
                                            <span className="font-bold flex-1">{pickUp}</span>
                                            <span className="text-[#2075ce] text-[14px]"> 4 min away </span>
                                        </span>
                                    </button>
                                    <button className="px-[24px] rounded-[12px] py-[12px] text-white ml-auto cursor-pointer bg-black " onClick={() => {
                                        setContentClicked(false)
                                        console.log("clicked on")
                                    }} >Next</button>
                                </div>
                            </div>
                        </AccordionContent>}
                    </AccordionItem>

                    <AccordionItem value="2">
                        <AccordionTrigger onClick={() => setContentClicked(true)}>
                            <div className='bg-white w-full rounded-[20px] border border-[#DBDBDB] '>
                                <button className='rounded text-left w-full cursor-pointer no-underline '>
                                    <div className='flex justify-between items-center w-full p-[24px] '>
                                        <span className='text-[#6A6A6A] text-[16px] font-bold mr-[40px]'>Drop-Off</span>
                                        <span className='flex flex-col text-right'>
                                            <span className='text-[16px] text-[#212529] font-bold'>{dropOff} </span>
                                            <span className='text-[#2075CE] text-[16px] '> 4 min away</span>
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </AccordionTrigger>
                        {contentClicked && <AccordionContent>
                            <div className="w-full flex flex-col ">
                                <div className="p-[24px] pt-[8px] flex flex-col gap-y-[16px]">
                                    <div className="flex flex-col flex-1 overflow-hidden">
                                        <div className="rounded-[12px] ">
                                            <PlaceSearchDestination />
                                        </div>
                                    </div>
                                    <button className="cursor-pointer rounded-[8px] px-[20px] py-[16px] border-solid border-2 border-black ">
                                        <div className="flex flex-col text-left ">
                                            <span className="text-[16px] text-[#212529]">Hitch location</span>
                                            <span className="text-[14px] text-[#6a6a6a] leading-[20px]">
                                                <span>Starting at $--</span>
                                            </span>

                                        </div>
                                    </button>

                                    <button className="cursor-pointer rounded-[8px] px-[20px] py-[16px] border-solid border-2 border-black ">
                                        <div className="flex flex-col text-left ">
                                            <span className="text-[16px] text-[#212529]">DropOff at {dropOff}</span>
                                            <span className="text-[14px] text-[#6a6a6a] leading-[20px]">
                                                <span>Starting at $-- </span>

                                            </span>

                                        </div>
                                    </button>
                                </div>
                                <div className="flex justify-between items-center border-t py-[8px] pl-[12px] pr-[24px]">
                                    <button className="px-[24px] rounded-[10px] py-[16px] flex mr-[10px]">
                                        <span className="flex flex-col text-left">
                                            <span className="font-bold flex-1">{dropOff}</span>
                                            <span className="text-[#2075ce] text-[14px]"> 4 min away </span>
                                        </span>
                                    </button>
                                    <button className="px-[24px] rounded-[12px] py-[12px] text-white ml-auto cursor-pointer bg-black " onClick={() => { setContentClicked(false) }}>Next</button>
                                </div>
                            </div>
                        </AccordionContent>}
                    </AccordionItem>

                    <AccordionItem value="3" >
                        <AccordionTrigger onClick={() => setContentClicked(true)} >
                            <div className='bg-white rounded-[20px] w-full border border-[#DBDBDB] max-h-[72px]'>
                                <button className='rounded text-left w-full cursor-pointer no-underline '>
                                    <div className='flex justify-between items-center w-full p-[24px] '>
                                        <span className='text-[#6A6A6A] text-[16px] font-bold mr-[40px]'>When</span>
                                        <span className='flex flex-col text-right'>
                                            <span className='text-[16px] text-[#212529] font-bold'>{formattedDate}</span>
                                            {/* <span className='text-[#2075CE] text-[16px] '> 4 min away</span> */}
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </AccordionTrigger>
                        {contentClicked && <AccordionContent>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border bg-white flex justify-center w-full"
                                onDayClick={() => setContentClicked(false)}
                            />
                        </AccordionContent>}
                    </AccordionItem>

                    <AccordionItem value="4" >
                        <AccordionTrigger onClick={() => setContentClicked(true)}>
                            <div className='bg-white rounded-[20px] w-full border border-[#DBDBDB] max-h-[72px] '>
                                <button className='rounded text-left w-full cursor-pointer no-underline '>
                                    <div className='flex justify-between items-center w-full p-[24px] '>
                                        <span className='text-[#6A6A6A] text-[16px] font-bold mr-[40px]'>Details</span>
                                        <span className='flex flex-col text-right'>
                                            <span className='text-[16px] text-[#212529] font-bold'> {current} Person</span>
                                            {/* <span className='text-[#2075CE] text-[16px] '> 4 min away</span> */}
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </AccordionTrigger>
                        {contentClicked && <AccordionContent>
                            <div className="bg-white rounded-[20px] border-1 border-[#dbdbdb] ">
                                <div className="overflow-hidden h-auto">
                                    <div className="w-full flex flex-col">
                                        <div className="flex flex-col p-4 pt-0">
                                            <div className="flex items-center border-b pb-[16px] pt-1">
                                                <div className="flex flex-col flex-1 mr-[80px] max-w-48">
                                                    <span className="text-[16px] text-[#212529]">Passengers</span>
                                                    <span className="text-sm text-[#6a6a6a] "> Let us know how many people are riding</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <CarouselDemo />
                                                </div>
                                            </div>
                                            <div className="flex items-center pt-[16px] ">
                                                <div className="flex flex-1 flex-col mr-[24px]">
                                                    <span className="text-[16px] text-[#212529] ">Pets (Optional)</span>
                                                    <span className="text-sm text-[#6a6a6a]"> We allow 1 pet per ride. <br /> Read our pet policy here.</span>
                                                </div>
                                                <div className="flex items-center space-x-2">

                                                    <Switch id="Pets" />

                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex justify-end items-center border-t px-[16px] py-[24px]">
                                            <button className="px-[24px] rounded-[10px] py-[12px] text-white bg-black cursor-pointer ml-auto" onClick={() => setContentClicked(false)}>Next </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </AccordionContent>}
                    </AccordionItem>

                    <AccordionItem value="5" >
                        <AccordionTrigger onClick={() => setContentClicked(true)}>
                            <div className='bg-white rounded-[20px] w-full border border-[#DBDBDB] max-h-[72px] '>
                                <button className='rounded text-left w-full cursor-pointer no-underline '>
                                    <div className='flex justify-between items-center w-full p-[24px] '>
                                        <span className='text-[#6A6A6A] text-[16px] font-bold mr-[40px]'>Product</span>
                                        <span className='flex flex-col text-right'>
                                            <span className='text-[16px] text-[#6A6A6A] font-normal'> {Clicked ? <SelectedProduct /> : "Not Selected"}</span>
                                            {/* <span className='text-[#2075CE] text-[16px] '> 4 min away</span> */}
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </AccordionTrigger>
                        {contentClicked && <AccordionContent>
                            <AffordableRides />
                        </AccordionContent>}
                    </AccordionItem>



                </Accordion>





            </div>
            {conf && <div className="bg-white p-[24px] w-full flex justify-between items-center border-t  sticky bottom-0 ">
                <div className="flex flex-col">
                    <span className="font-bold text-[24px] leading-[32px] text-black">${Details.Price}</span>
                    <span className="text-[#6a6a6a] text-[16px] ">total Price</span>
                </div>
                <button className="px-[24px] rounded-[10px] py-[16px] bg-black text-white cursor-pointer" onClick={handleSubmit}>Go to Confirmation</button>
            </div>}
        </div>
    )
}

export default TravelInfoBlock