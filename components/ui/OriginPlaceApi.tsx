'use client'
import { OriginLatAtom, OriginLngAtom, OriginMainText, PickUpFullAddress } from "@/lib/RecoilContextProvider";
import { PiMapPin } from "react-icons/pi";
import { useRecoilValue, useSetRecoilState } from "recoil";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";


export default function PlaceSearchOrigin() {
    const setOriginLat = useSetRecoilState(OriginLatAtom)
    const setOriginLng = useSetRecoilState(OriginLngAtom)
    const setOriginFullAddress = useSetRecoilState(PickUpFullAddress)
    const originMainText = useRecoilValue(OriginMainText)

    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({ requestOptions: { componentRestrictions: { country: "us" } }, debounce: 300, });

    const handleInput = (e: any) => {
        setValue(e.target.value);
    };

    const handleSelect = (description: any) => {
        setValue(description, false);
        clearSuggestions();
        getGeocode({ address: description }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            setOriginLat(lat);
            setOriginLng(lng);
        });
    };


    return (
        <div className='max-w-[402px] w-full bg-gray-200 my-5 rounded-xl cursor-text'>
            <div className="flex p-3">
                <div className='flex items-center px-3 '>
                    <PiMapPin className='size-7' />
                </div>
                <div>
                    <label htmlFor="starting" className='text-[16px] text-[#6A6A6A] text-nowrap'>Starting address</label>
                    <input
                        value={value || originMainText}
                        onChange={handleInput}
                        disabled={!ready}
                        id="starting"
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
                                    setOriginFullAddress(suggestion.description)
                                }}
                            >
                                <p className=" px-3 py-4 rounded-2xl cursor-pointer hover:bg-white">
                                    <div className="flex items-center"><PiMapPin className='size-5 mx-2' /> {main_text}</div>
                                    <span className=" ml-10 text-sm ">{secondary_text}</span>
                                </p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
