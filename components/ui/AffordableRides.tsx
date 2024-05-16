import RideBlocks from "./RideBlocks"

const AffordableRides = () => {
    return (
        <div className='min-h-0 overflow-hidden h-auto visible'>
            <div className='w-full p-4 pt-0 mt-2'>

                <div className='flex flex-col gap-y-[16px] '>
                    <div className='bg-[#f5f5f5] rounded-[16px]  '>
                        <RideBlocks STime1="8:45 AM" STimeArrival="11:50 AM Arrival" V1="Hitch Sedan" V1Des="Full size Sedan" EntireCarV1="Entire Car" PassengerV1={3} luggageV1={3} V1Price={100} V2="Hitch XL" V2Des="Five seater SUV" EntireCarV2="Entire Car" PassengerV2={5} luggageV2={5} V2Price={150} />
                    </div>
                </div>

                <div className="py-[20px] flex flex-col ">
                    <span className="text-xl font-bold mb-1">Other Trips</span>
                    <span className="text-base">Additional departure timings</span>
                </div>

                <div className='flex flex-col gap-y-[16px] '>
                    <div className='bg-[#f5f5f5] rounded-[16px]'>
                        <RideBlocks STime1="12:44 PM" STimeArrival="3:40 PM Arrival" V1="Hitch Sedan" V1Des="Full size Sedan" EntireCarV1="Entire Car" PassengerV1={3} luggageV1={3} V1Price={100} V2="Hitch XL" V2Des="Five seater SUV" EntireCarV2="Entire Car" PassengerV2={5} luggageV2={5} V2Price={150} />
                    </div>
                    <div className='bg-[#f5f5f5] rounded-[16px]'>
                        <RideBlocks STime1="4:34 PM" STimeArrival="7:30 PM Arrival" V1="Hitch Sedan" V1Des="Full size Sedan" EntireCarV1="Entire Car" PassengerV1={3} luggageV1={3} V1Price={100} V2="Hitch XL" V2Des="Five seater SUV" EntireCarV2="Entire Car" PassengerV2={5} luggageV2={5} V2Price={150} />
                    </div>
                    <div className='bg-[#f5f5f5] rounded-[16px]'>
                        <RideBlocks STime1="8:24 PM" STimeArrival="11:20 PM Arrival" V1="Hitch Sedan" V1Des="Full size Sedan" EntireCarV1="Entire Car" PassengerV1={3} luggageV1={3} V1Price={100} V2="Hitch XL" V2Des="Five seater SUV" EntireCarV2="Entire Car" PassengerV2={5} luggageV2={5} V2Price={150} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AffordableRides