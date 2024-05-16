'use client'
import { DestinationLatAtom, DestinationLngAtom } from "@/lib/RecoilContextProvider";
import { GrMapLocation } from "react-icons/gr";
import { useRecoilState } from "recoil";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";


export default function PlaceSearchDestination() {
    const [destLat, setdestLat] = useRecoilState(DestinationLatAtom)
    const [destLng, setdestLng] = useRecoilState(DestinationLngAtom)

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({ requestOptions: { componentRestrictions: { country: "us" } }, debounce: 300 });

    const handleInput = (e: any) => {
        setValue(e.target.value);
    };

    const handleSelect = (description: any) => {
        setValue(description, false);
        clearSuggestions();
        getGeocode({ address: description }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            setdestLat(lat);
            setdestLng(lng);

        });
    };

    return (
        <div className='max-w-[402px] w-full bg-gray-200 my-5 rounded-xl cursor-text'>
            <div className="flex p-3">
                <div className='flex items-center px-3 '>
                    <GrMapLocation className='size-7' />
                </div>
                <div>
                    <label htmlFor="destination" className='text-[16px] text-[#6A6A6A] text-nowrap'>Destination address</label>
                    <input
                        value={value}
                        onChange={handleInput}
                        disabled={!ready}
                        id="destination"
                        className='bg-gray-200 w-full outline-none cursor-text'
                    />
                </div>
            </div>
            {status === "OK" && (
                <ul>
                    {data.map((suggestion) => {
                        const {
                            place_id,
                            structured_formatting: { main_text, secondary_text },
                        } = suggestion;
                        return (
                            <li
                                key={place_id}
                                className="my-1 border p-1"
                                onClick={() => {
                                    handleSelect(main_text)
                                    // console.log(suggestion)
                                }}
                            >
                                <p className=" px-3 py-4 rounded-2xl cursor-pointer hover:bg-white">
                                    <div className="flex items-center"><GrMapLocation className='size-5 mx-2' /> {main_text}</div>
                                    <span className=" ml-10 text-sm">{secondary_text}</span>
                                </p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
