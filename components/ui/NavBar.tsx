'use client'
import { auth } from "@/app/firebase/config"
import { signOut } from "firebase/auth"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuthState } from "react-firebase-hooks/auth"
import NavLink from "./NavLinks"


const NavBar = () => {
    const router = useRouter()
    const [authUser] = useAuthState(auth)
    return (
        <div className='sticky top-0 h-[56px] bg-black text-white px-[40px] flex items-center justify-between  z-10 ' >
            <Link href={'/'}><Image src="/hitch_logo.svg" alt="hitch_logo" width={100} height={23.1} className="cursor-pointer"></Image></Link>
            <div className="text-sm">
                <NavLink href={"/ride"}>Ride</NavLink>
                <NavLink href={"/drive"}>Drive</NavLink>
                <NavLink href={"/download"}>Download</NavLink>
                <NavLink href={"/x"}>Help</NavLink>
                <NavLink href={"/book"}>Book Now</NavLink>
                {authUser && <span onClick={() => signOut(auth)}><NavLink href={"/"}>SignOut</NavLink></span>}
            </div>
        </div>
    )
}

export default NavBar