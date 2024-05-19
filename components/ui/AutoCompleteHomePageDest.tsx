'use client'
import { DestinationLatAtom, DestinationLngAtom, DestinationMainText, DropOffFullAddress } from "@/lib/RecoilContextProvider";
import { GrMapLocation } from "react-icons/gr";
import { useSetRecoilState } from "recoil";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";


const AutoCompleteHomePageDest = () => {
    const setdestLat = useSetRecoilState(DestinationLatAtom)
    const setdestLng = useSetRecoilState(DestinationLngAtom)
    const setDestFullAddress = useSetRecoilState(DropOffFullAddress)
    const setDestMainText = useSetRecoilState(DestinationMainText)

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({ requestOptions: { componentRestrictions: { country: "us" } }, debounce: 300 });

    const handleDestInput = (e: any) => {
        setValue(e.target.value);
    };

    const handleDestSelect = (description: any) => {
        setValue(description, false);
        clearSuggestions();
        getGeocode({ address: description }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            setdestLat(lat);
            setdestLng(lng);

        });
    };
    return (
        <div>
            <div className="text-[14px] font-bold text-[#FFFFFF]">Destination</div>
            <input type="text" placeholder="Where are you headed?" className="font-medium text-[20px] bg-transparent w-[550px] text-[#FFFFFF] outline-none cursor-text" value={value} onChange={handleDestInput} disabled={!ready} required />
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
                                className="border-t border-[#404040] w-[600px] -ml-4 relative z-10"
                                onClick={() => {
                                    handleDestSelect(main_text)
                                    setDestMainText(main_text)
                                    setDestFullAddress(suggestion.description)
                                }}
                            >
                                <p className="  h-[80px] cursor-pointer bg-[#404040]  text-[#FFFFFF] pt-2  hover:bg-black">
                                    <div className="flex items-center text-[20px]  "><GrMapLocation className='size-5 mx-2' /> {main_text}</div>
                                    <span className=" ml-10 text-sm ">{secondary_text}</span>
                                </p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    )
}

export default AutoCompleteHomePageDest