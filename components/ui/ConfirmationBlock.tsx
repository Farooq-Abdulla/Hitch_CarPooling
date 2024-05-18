'use client'
import { CorouselCurrent, DateFormatted, DropOff, DropOffFullAddress, FinalPrice, PickUp, PickUpFullAddress, ProductDetails, SwitchChecked } from "@/lib/RecoilContextProvider";
import axios from "axios";
import { ArrowRight, Leaf, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaHandPointRight } from "react-icons/fa6";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button } from "./button";
import { Switch } from "./switch";

const ConfirmationBlock = () => {
    const router = useRouter()

    const pickUp = useRecoilValue(PickUp)
    // console.log("PickUp: " + pickUp)
    const dropOff = useRecoilValue(DropOff)
    // console.log("DropOff: " + dropOff)
    const Details = useRecoilValue(ProductDetails)
    const formattedDate = useRecoilValue(DateFormatted)
    const current = useRecoilValue(CorouselCurrent)
    const originFullAddress = useRecoilValue(PickUpFullAddress)
    // console.log("originFullAddress = " + originFullAddress)
    const destFullAddress = useRecoilValue(DropOffFullAddress)
    // console.log("destFullAddress = " + destFullAddress)
    const [checked, setChecked] = useRecoilState(SwitchChecked)
    // console.log(checked);
    const [finalPrice, setFinalPrice] = useRecoilState(FinalPrice)
    // console.log("finalPrice = " + finalPrice)

    useEffect(() => {
        checked ? setFinalPrice(Details.Price + 2.29 + 0.71) : setFinalPrice(Details.Price + 2.29)
    }, [checked, setChecked])

    async function handleSubmit() {
        try {
            const response = await axios.post("api/checkoutSession",
                {
                    Details,
                    finalPrice,
                    pickUp,
                    dropOff,
                    formattedDate,
                    originFullAddress,
                    destFullAddress,

                }
            );
            router.push(response.data)
        } catch (error) {
            console.log("Error while handling Submit in Travel Info Block", error)
        }
    }
    return (
        <div className="w-[450px] px-[20px] pt-[25px] max-h-full no-scrollbar rounded-xl overflow-y-auto bg-[#FFFFFFce] absolute z-10 mx-3 my-3  ">
            <div className="flex flex-col gap-y-4 relative">
                <div className="flex flex-col items-start">
                    <div className="flex flex-col pb-[18px]">
                        <div className="bg-white rounded-t-[20px] p-[24px] border-b">
                            <div className="">
                                <div className="flex gap-x-[8px] mb-[2px]">
                                    <span className="font-bold text-xl">{pickUp.split(",")[1]}</span>
                                    <span><ArrowRight className="w-[17px] h-[24px] flex items-center " /></span>
                                    <span className="font-bold text-xl ">{dropOff.split(",")[1]}</span>
                                    <span className="font-bold text-xl flex items-center ml-auto ">${Details.Price}</span>
                                </div>
                                <span className="text-[16px] text-black">{`${formattedDate}. Hitch Station`}</span>
                                <div className="flex items-center text-[16px] text-[#6a6a6a]">
                                    <User className="w-[16px] h-[16px]" />
                                    <span className="mt-[2px] ml-[2px] mr-[6px] font-medium">{current}</span>
                                </div>
                            </div>

                            <div className="mt-[16px] w-full px-[16px] py-[20px] bg-[#f5f5f5] rounded-[20px]">
                                <p className="text-xl font-bold pb-[16px] ">Itinerary</p>
                                <div className="flex flex-col">
                                    <div className="flex flex-col relative">
                                        <div className="flex gap-x-[16px]">

                                            <FaHandPointRight width={16} height={16} className="flex items-center" />
                                            <p className="text-[16px] font-medium">{pickUp}</p>
                                            <div className="ml-auto whitespace-nowrap font-medium">{`${Details.STime}`}</div>

                                        </div>
                                        <div className="flex-1 pl-[40px] relative pb-[16px]">
                                            <p className="text-[#6a6a6a] text-[12px] min-h-[20px] mr-6">{originFullAddress}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col relative">
                                        <div className="flex gap-x-[16px]">

                                            <FaHandPointRight width={16} height={16} className="flex items-center" />
                                            <p className="text-[16px] font-medium">{dropOff}</p>
                                            <div className="ml-auto whitespace-nowrap font-medium">{`${Details.STimeArrival.slice(0, 8)}`}</div>

                                        </div>
                                        <div className="flex-1 pl-[40px] relative pb-[16px]">
                                            <p className="text-[#6a6a6a] text-[12px] min-h-[20px] mr-6">{destFullAddress}</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className="bg-white p-[24px] flex flex-col border-b">
                            <span className="font-bold text-xl mb-[16px]">Price</span>
                            <div className="flex flex-col">
                                <div className="flex flex-col pb-[8px] border-b">
                                    <div className="flex justify-between mb-[8px]">
                                        <span className="flex items-center">Base Fare</span>
                                        <span>${Details.Price}</span>
                                    </div>
                                    <div className="flex justify-between mb-[8px]">
                                        <span className="flex items-center">Fuel Surcharge Fee</span>
                                        <span>$2.29</span>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-[16px] font-bold">
                                    <span>Total (USD)</span>
                                    <span>{checked ? `$${Details.Price + 2.29 + 0.71}` : `${Details.Price + 2.29}`}</span>
                                </div>
                            </div>
                            <div className="flex justify-between mt-[16px] pt-[16px] border-t">
                                <span className="mr-[20px]">Make your ride carbon neutral for <span className="font-bold">$0.71</span> <Leaf width={16} height={16} /></span>
                                <div className="flex items-center">
                                    <Switch checked={checked} onCheckedChange={setChecked} />
                                </div>
                            </div>

                            <div></div>
                        </div>
                        <div className="bg-white p-[24px] flex flex-col rounded-b-[20px] ">
                            <span className="font-bold text-xl mb-[8px]">Cancellation Policy</span>
                            <span className="text-sm">You can cancel your ride for a Hitch credit refund up to one hour before departure. Credit refunds are not offered for cancellations within an hour. Read more.</span>
                        </div>

                    </div>
                </div>
                <div className="bg-white p-[24px] w-full h-[150px] flex justify-between items-center border-t z-20 sticky bottom-1 ">
                    <Button className="w-[400px] rounded-lg" onClick={handleSubmit}>Book this trip</Button>
                </div>
            </div>

        </div>
    )
}

export default ConfirmationBlock