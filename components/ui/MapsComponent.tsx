'use client'

import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '686px'

};

const center = {
    lat: 33.58495881848903,
    lng: -101.87456245869967
};

const MapsComponent = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
    })


    return isLoaded ? (
        <div className='mx-8 grayscale  z-0' >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                // options={options}
                zoom={14}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <MarkerF position={center} draggable />
                <></>
            </GoogleMap>
        </div>
    ) : <></>
}

export default MapsComponent