'use client'
import { auth } from "@/app/firebase/config";
import { OriginLatAtom, OriginLngAtom, OriginMainText, PickUpFullAddress } from "@/lib/RecoilContextProvider";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { PiMapPin } from "react-icons/pi";
import { useSetRecoilState } from "recoil";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import AutoCompleteHomePageDest from "./AutoCompleteHomePageDest";


const BgVideoBox = () => {
    const router = useRouter()
    const [authUser] = useAuthState(auth)

    const setOriginLat = useSetRecoilState(OriginLatAtom)
    const setOriginLng = useSetRecoilState(OriginLngAtom)
    const setOriginFullAddress = useSetRecoilState(PickUpFullAddress)
    const setOriginMainText = useSetRecoilState(OriginMainText)


    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({ requestOptions: { componentRestrictions: { country: "us" } }, debounce: 300, });

    const handleOriginInput = (e: any) => {
        setValue(e.target.value);
    };

    const handleOriginSelect = (description: any) => {
        setValue(description, false);
        clearSuggestions();
        getGeocode({ address: description }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            setOriginLat(lat);
            setOriginLng(lng);
        });
    };

    function handleClick(e: any) {
        e.preventDefault()
        if (!localStorage.getItem("uid")) {
            router.push('/signin')
        } else {
            router.push('/book')
        }
    }

    return (
        <form onSubmit={handleClick}>
            <div className='w-[662px] h-[464px] bg-[#141414] px-[32px] py-[40px] absolute top-12  mx-[40px]'>
                <div className=" font-bold leading-[64px]">
                    <h2 className="text-[#9E9E9E]  text-[56px]">Rideshare for</h2>
                    <h2 className=" text-[#FFFFFF] text-[56px] ">long distances</h2>
                </div>
                <div>
                    <div className="mt-[16px] bg-[#404040] h-[80px] p-[16px]">
                        <div className="text-[14px] font-bold text-[#FFFFFF]">Origin</div>
                        <input type="text" placeholder="Where are you leaving from?" className="font-medium text-[20px] bg-transparent w-[550px] text-[#FFFFFF] outline-none cursor-text" value={value} onChange={handleOriginInput} disabled={!ready} required />
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
                                                handleOriginSelect(main_text)
                                                setOriginMainText(main_text)
                                                setOriginFullAddress(suggestion.description)
                                            }}
                                        >
                                            <p className="  h-[80px] cursor-pointer bg-[#404040]  text-[#FFFFFF] pt-2  hover:bg-black">
                                                <div className="flex items-center text-[20px]  "><PiMapPin className='size-5 mx-2' /> {main_text}</div>
                                                <span className=" ml-10 text-sm ">{secondary_text}</span>
                                            </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                    <div className="mt-[16px] bg-[#404040] h-[80px] p-[16px] ">
                        <AutoCompleteHomePageDest />

                    </div>
                    <button className="cursor-pointer mt-[24px] p-[16px] bg-[#fff] text-[#000] w-[206.84px] "  >
                        <div className="flex items-center" >
                            <div className="font-semibold text-nowrap" >Book your ride now </div>
                            <span className=" size-1/2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></span>
                        </div>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default BgVideoBox