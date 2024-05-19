import Image from "next/image"
import Link from "next/link"

const ServicesSection = () => {
    return (
        <section className="pt-[48px] pb-[40px]">
            <div className="px-[40px]">
                <div className="grid grid-cols-2">
                    <div className="h-auto flex gap-0">
                        <div className="w-auto">
                            <Image src="/station.webp" alt="Station to Station" width={400} height={470}></Image>
                            <p className="bg-[#121212] text-[#FFFFFF] relative bottom-[80px] text-[32px] h-[80px] font-bold pl-[23px] flex items-center">Station - Station</p>
                        </div>
                        <div className="w-auto">
                            <Image src="/doortodoor.webp" alt="Door to Door Image" width={400} height={470}></Image>
                            <p className="bg-[#252525] text-[#FFFFFF] relative bottom-[80px] text-[32px] h-[80px] font-bold pl-[23px] flex items-center ">Door - Door</p>
                        </div>
                    </div>
                    <div className="p-[48px]">
                        <div className="pb-[50px]">
                            <div>
                                <h2 className="text-[56px] font-semibold leading-[64px] text-[#121212] ">A ride for everyone</h2>
                                <h3 className="text-[56px] font-semibold  text-[#B9B9B9] ">Flexible Services</h3>
                                <div className="my-[20px]">
                                    <div className="grid grid-cols-2 gap-[48px]">
                                        <div>
                                            <Image src="/pin.png" alt="Pin" width={25} height={25}></Image>
                                            <h3 className="text-[#252525] text-[26px] leading-[32px] mt-[10px] font-semibold">Station to Station</h3>
                                            <p className="text-[20px] mt-[8px] text-[#727272] leading-[32px] font-semibold ">Meet your driver at a nearby location. Starting at $15 per ride</p>
                                        </div>
                                        <div>
                                            <Image src="/doorSmall.png" alt="Pin" width={25} height={25}></Image>
                                            <h3 className="text-[#252525] text-[26px] leading-[32px] mt-[10px] font-semibold">Door to Door</h3>
                                            <p className="text-[20px] mt-[8px] text-[#727272] leading-[32px] font-semibold ">Enjoy a private ride directly to your destination. Starting at $85 per ride.</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <Link href={"/ride"}><div className="mt-[60px]">
                                <div className="w-max h-min  cursor-pointer bg-black py-[12px] px-[16px] flex items-center">
                                    <div><p className="text-white">Ride</p></div> &nbsp;
                                    <span className="text-white size-1/2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></span>
                                </div>
                            </div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection