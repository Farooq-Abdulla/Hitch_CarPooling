'use client'

import { cn } from "@/lib/utils";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
const containerStyle = {
    width: '100%',
    height: '686px'

};



const MapsComponent = ({ className, center }: { className?: string, center?: { lat: number, lng: number } }) => {
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
    // })


    // return isLoaded ? (
    //     <div className={cn("mx-8 grayscale  z-0", className)}>
    //         <GoogleMap
    //             mapContainerStyle={containerStyle}
    //             center={center}
    //             // options={options}
    //             zoom={14}
    //         >
    //             { /* Child components, such as markers, info windows, etc. */}
    //             <MarkerF position={center} draggable />
    //             <></>
    //         </GoogleMap>
    //     </div>
    // ) : <></>
    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
            <div className={cn("mx-8 grayscale z-0 ", className)}>
                <Map defaultZoom={12} defaultCenter={center} mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID} fullscreenControl={false}   >
                    <AdvancedMarker position={center} draggable ></AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    )
}

export default MapsComponent


