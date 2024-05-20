'use client'
import PlaceSearchDestination from '@/components/ui/DestPlaceApi';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { MapCompForBooking } from '@/components/ui/MapCompForBooking';
import PlaceSearchOrigin from '@/components/ui/OriginPlaceApi';
import TravelInfoBlock from '@/components/ui/TravelInfoBlock';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';

const containerStyle = {
    width: '100%',
    height: '95vh'
};

const Bookpage = () => {

    const [authUser] = useAuthState(auth)
    const router = useRouter()
    const [showTravelInfo, setShowTravelInfo] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleStartSearch = () => {
        setLoading(true);
        setShowTravelInfo(true);
    };
    // if (!sessionStorage.getItem("user")) {
    //     router.push("/signin")
    //     return
    // }

    if (!authUser) {
        router.push("/signin")
        return
    }

    return (
        <div>
            <div className='relative'>
                {!showTravelInfo && (
                    <div className='max-w-[450px] w-full p-[16px] z-10 mx-6 max-h-full bg-[#ffffffcc] absolute bottom-6'>
                        <PlaceSearchOrigin />
                        <PlaceSearchDestination />
                        <button
                            className='bg-black text-white px-[24px] w-full rounded-lg py-[16px] cursor-pointer'
                            onClick={handleStartSearch}
                        >
                            Start Your Search {loading ? <LoadingSpinner /> : ''}
                        </button>
                    </div>
                )}

                {showTravelInfo && <TravelInfoBlock />}

                <MapCompForBooking
                    className='grayscale-0 mx-0 w-full h-[95vh] z-0'
                    center={{ lat: 33.58495881848903, lng: -101.87456245869967 }}
                />
            </div>
        </div>
    );
};

export default Bookpage;
