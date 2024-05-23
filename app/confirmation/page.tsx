"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import NavBar from "@/components/ui/NavBar";
import { DateFormatted, DocumentId, DropOffFullAddress, PickUpFullAddress, ProductDetails, UserDetails } from "@/lib/RecoilContextProvider";
import { doc, getDoc } from "firebase/firestore";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { db } from "../firebase/config";

export default function ConfirmationPage() {
    const docId = useRecoilValue(DocumentId);
    const router = useRouter();
    const date = useRecoilValue(DateFormatted);
    const pickUp = useRecoilValue(PickUpFullAddress)
    const dropOff = useRecoilValue(DropOffFullAddress);
    const [userDetails, setUserDetails] = useRecoilState(UserDetails)
    const travelDetails = useRecoilValue(ProductDetails)

    useEffect(() => {
        if (!localStorage.getItem("uid")) {
            router.push("/signin")
            return
        }
    })
    useEffect(() => {
        if (!docId) {
            console.log("docId is not available yet");
            return;
        }


        async function GetDetails() {
            try {
                const docRef = doc(db, "Hitch", docId);
                const response = await getDoc(docRef);
                if (response.data()) {
                    const docData = response.data();
                    setUserDetails(prevDetails => ({ ...prevDetails, ...docData }));
                } else {
                    console.log("No data found");
                }
            } catch (error) {
                console.log("Error getting details :" + JSON.stringify(error));
            }
        }

        GetDetails();
    }, [docId]);

    return (
        <div>
            <NavBar />
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div className="flex flex-col items-center">
                    <Image
                        src={`/hitch_logo.webp`}
                        alt="Hitch Logo"
                        height="300"
                        width="300"
                        className="object-contain"
                    />
                    <p className="text-base sm:text-4xl text-black mt-4 mb-2 dark:text-neutral-200 flex items-center">
                        Ride Confirmed on {date} <CircleCheckBig className="mx-3 size-8" />
                    </p>
                    <p className="text-xl mb-3 text-neutral-600 dark:text-neutral-400">
                        A confirmation mail has been sent to {userDetails.email}
                    </p>
                    <p className="text-xl mb-3 text-neutral-600 dark:text-neutral-400">
                        PickUp Details:  {pickUp} on {date} {travelDetails.STime}
                    </p>
                    <p className="text-xl mb-3 text-neutral-600 dark:text-neutral-400">
                        DropOff Details:  {dropOff} on {date} {travelDetails.STimeArrival}
                    </p>
                    <p className="text-xl mb-3 text-neutral-600 dark:text-neutral-400">
                        Price: ${travelDetails.Price}
                    </p>
                    <p className="text-xl mb-3 text-neutral-600 dark:text-neutral-400">
                        Car Name: {travelDetails.CarName}
                    </p>



                    <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-lg font-bold dark:bg-zinc-800" onClick={() => router.push("/")}>
                        <span>Go back </span>
                        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                            Home
                        </span>
                    </button>
                </div>
            </BackgroundGradient>
        </div>
    );
}
