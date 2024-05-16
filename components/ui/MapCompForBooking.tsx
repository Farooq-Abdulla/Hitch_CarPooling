import { DestinationLatAtom, DestinationLngAtom, DropOff, OriginLatAtom, OriginLngAtom, PickUp } from "@/lib/RecoilContextProvider";
import { cn } from "@/lib/utils";
import { APIProvider, Map, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export function MapCompForBooking({ className, center }: { className: string, center?: { lat: number, lng: number } }) {
    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!} >
            <div className={cn("rayscale-0 mx-0 w-full h-[95vh] ", className)}>
                <Map defaultZoom={12} defaultCenter={center} mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID} fullscreenControl={false}   >
                    {/* <AdvancedMarker position={center} draggable ></AdvancedMarker> */}
                    <Directions />
                </Map>
            </div>
        </APIProvider>
    )
}

const Directions = () => {
    const Lat = useRecoilValue(OriginLatAtom);
    const Lng = useRecoilValue(OriginLngAtom);
    const DestLat = useRecoilValue(DestinationLatAtom);
    const DestLng = useRecoilValue(DestinationLngAtom);
    const setPickUp = useSetRecoilState(PickUp);
    const setDropOff = useSetRecoilState(DropOff);
    // console.log("Origin Lat and lng: " + Lat, Lng);
    // console.log("Destination Lat and lng: " + DestLat, DestLng);

    const map = useMap();
    const routeLib = useMapsLibrary("routes");
    const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>()
    const [directionsRender, setDirectionsRender] = useState<google.maps.DirectionsRenderer>()
    const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([])
    const [routeIndex, setRouteIndex] = useState(0);
    const selected = routes[routeIndex]
    const leg = selected?.legs[0]
    useEffect(() => {
        if (!routeLib || !map) return
        setDirectionsService(new routeLib.DirectionsService())
        setDirectionsRender(new routeLib.DirectionsRenderer({ map }))
    }, [map, routeLib])

    useEffect(() => {
        if (!directionsService || !directionsRender) return
        directionsService.route({
            origin: new google.maps.LatLng(Lat, Lng),
            destination: new google.maps.LatLng(DestLat, DestLng),
            travelMode: google.maps.TravelMode.DRIVING,
            // provideRouteAlternatives: true
        }).then(responses => {
            directionsRender.setDirections(responses)
            setRoutes(responses.routes)
        })
    }, [directionsRender, directionsService, Lat, Lng, DestLat, DestLng])
    const originArray = routes[0]?.legs[0].start_address.split(",")
    const pickup = originArray && originArray[originArray.length - 4] + "," + originArray[originArray.length - 3]
    const destArray = routes[0]?.legs[0].end_address.split(",")
    const dropoff = destArray && destArray[destArray.length - 4] + "," + destArray[destArray.length - 3]
    // console.log(" Routes from MapCompForBooking.tsx: ", pickup, "and " + dropoff)
    setPickUp(pickup)
    setDropOff(dropoff)
    return (
        <></>
    )
}