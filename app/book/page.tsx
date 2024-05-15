'use client'
import PlaceSearchDestination from '@/components/ui/DestPlaceApi';
import { MapCompForBooking } from '@/components/ui/MapCompForBooking';

import PlaceSearchOrigin from '@/components/ui/OriginPlaceApi';
const containerStyle = {
    width: '100%',
    height: '95vh'
}
const Bookpage = () => {

    return (
        <div>
            <div className='relative'>

                <div className='max-w-[450px] w-full p-[16px] z-10 mx-6  max-h-full bg-[#ffffffcc] absolute  bottom-6'>
                    <PlaceSearchOrigin />
                    <PlaceSearchDestination />
                    <button className='bg-black text-white px-[24px] w-full rounded-lg py-[16px] cursor-pointer'>Start Your Search</button>

                </div>
                <MapCompForBooking className='grayscale-0 mx-0 w-full h-[95vh] z-0' center={{ lat: 33.58495881848903, lng: -101.87456245869967 }} />
            </div>

        </div>
    )
}

export default Bookpage