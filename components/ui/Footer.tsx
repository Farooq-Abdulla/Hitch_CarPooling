import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='py-[68px] px-[40px] bg-[#FAFAFA] bg-contain  bottom-0'  >
            <div className='flex justify-between gap-2'>
                <div className="w-1/3">
                    <h1 className='text-[56px] text-[#121212] leading-[64px] font-semibold'>Join our community</h1>
                    <h2 className='text-[20px] text-[#121212] leading-[32px] font-semibold '>Download our app and take your first ride or drive today.</h2>
                    <div className="pt-[24px] ">
                        <div className='border-2 border-black bg-white py-[12px] px-[16px] font-semibold text-[16px] w-max flex items-center'>
                            <div className='mr-[24px]'>Download the app</div>
                            <Image src="/QR1.png" alt='QR code ' width={100} height={100}></Image>
                        </div>
                    </div>
                </div>
                <div className="w-2/12">
                    <h4 className="mb-[16px] text-[20px] font-bold leading-[32px] text-black">About</h4>
                    <div className="mb-[16px] font-normal text-[16px] leading-[24px] text-[#727272] "><Link href={"/x"}>Routes</Link></div>
                    <div className="mb-[16px] font-normal text-[16px] leading-[24px] text-[#727272] "><Link href={"/x"}>Ride</Link></div>
                    <div className="mb-[16px] font-normal text-[16px] leading-[24px] text-[#727272] "><Link href={"/x"}>Drive</Link></div>
                    <div className="mb-[16px] font-normal text-[16px] leading-[24px] text-[#727272] "><Link href={"/x"}>Partners</Link></div>
                    <div className="mb-[16px] font-normal text-[16px] leading-[24px] text-[#727272] "><Link href={"/x"}>Careers</Link></div>
                </div>
                <div className="w-2/12">
                    <h4 className="mb-[16px] text-[20px] font-bold leading-[32px] text-black">Community</h4>
                    <div className="mb-[16px] font-normal text-[16px] leading-[24px] text-[#727272] "><Link href={"/x"}>Trust and Safety</Link></div>
                </div>
                <div className="w-2/12">
                    <h4 className="mb-[16px] text-[20px] font-bold leading-[32px] text-black">Resources</h4>
                    <div className="mb-[16px] font-normal text-[16px] leading-[24px] text-[#727272] "><Link href={"/x"}>Help Center</Link></div>
                    <div className="mb-[16px] font-normal text-[16px] leading-[24px] text-[#727272] "><Link href={"/x"}>Contact</Link></div>
                </div>

            </div>
            <hr className="my-[32px] border-1 border-[#dbdbdb] " />
            <div className="pb-[55px] text-[14px] text-[#727272] flex justify-between ">
                <div className="flex gap-8">
                    <p className=" ">2024 Hitch Technologies, Inc. All Rights Reserved.</p>
                    <div className="flex gap-3">
                        <div><Link href={"/x"}>Privacy Policy</Link></div>
                        <div><Link href={"/x"}>Terms </Link></div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div><Link href={'/x'}><FaFacebook /></Link></div>
                    <div><Link href={'/x'}><FaInstagram /></Link></div>
                    <div><Link href={'/x'}><FaXTwitter /></Link></div>
                </div>
            </div>
        </div>
    )
}

export default Footer