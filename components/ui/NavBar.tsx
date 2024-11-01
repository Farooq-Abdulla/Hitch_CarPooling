'use client'
import { auth } from "@/app/firebase/config"
import { signOut } from "firebase/auth"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import NavLink from "./NavLinks"


const NavBar = () => {

    // console.log(IsUser)
    const [res, setRes] = useState(false)
    const router = useRouter()
    // if (localStorage.getItem("uid")) {
    //     setRes(true)
    // }
    // else {
    //     setRes(false)
    // }
    // console.log(localStorage.getItem("uid"))

    useEffect(() => {
        // Check if we are in a browser environment
        if (typeof window !== "undefined") {
            const uid = localStorage.getItem("uid")
            setRes(!!uid)  // Set res to true if uid exists, otherwise false
        }
    }, [])
    return (
        <div className='sticky top-0 h-[56px] bg-black text-white px-[40px] flex items-center justify-between  z-10 ' >
            <Link href={'/'}><Image src="/hitch_logo.svg" alt="hitch_logo" width={100} height={23.1} className="cursor-pointer"></Image></Link>
            <div className="text-sm">
                <NavLink href={"/ride"}>Ride</NavLink>
                <NavLink href={"/drive"}>Drive</NavLink>
                <NavLink href={"/download"}>Download</NavLink>
{/*                 <NavLink href={"/x"}>Help</NavLink> */}
                <NavLink href={"/book"}>Book Now</NavLink>
                {res ? <span className="cursor-pointer px-[8px] py-[10px] my-[4px] mx-3 hover:bg-gray-600 hover:rounded-md" onClick={() => { localStorage.removeItem("uid"), localStorage.removeItem("phone"), signOut(auth), window.location.reload() }}>SignOut</span> : null}
                {/* <ServerNavBarSignOut /> */}
                {/* <AuthUser>SignOut</AuthUser> */}
                {/* <span className='px-[8px] py-[10px] my-[4px] mx-3 hover:bg-gray-600 hover:rounded-md cursor-pointer' >SignOut</span> */}
            </div>
        </div>
    )
}

export default NavBar
