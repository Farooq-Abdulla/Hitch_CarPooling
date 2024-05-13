import Link from "next/link"

const HitchInfoBlock = () => {
    return (
        <section className='pt-[48px] pb-[40px] bg-[#fff] w-full'>
            <div className='bg-[#141414] mx-[40px]  h-[632px] grid grid-cols-2'>
                <div className="py-[122px] px-[122px]">
                    <div className="font-bold leading-[64px] ">
                        <h2 className="text-[#FFFFFF] text-[56px] text-wrap">Rides between cities</h2>
                        <h3 className="text-[#B9B9B9]  text-[56px] text-wrap">without compromise</h3>
                    </div>
                    <div className="mt-[30px]">
                        <div className="w-[200px] h-[55px] bg-white rounded-full flex justify-center items-center cursor-pointer font-bold">
                            <Link href={"/x"}>Book your ride now</Link>
                        </div>

                    </div>
                </div>
                <div className="py-[122px] pr-[116px]">
                    <div className="pt-0">
                        <h2 className="text-[20px] font-bold text-[#fff]">Ultimate in flexibility</h2>
                        <p className="text-[20px] font-bold text-[#ACACAC] mt-[8px]">Leave when you want with departures every hour</p>
                    </div>
                    <div className="pt-[24px]">
                        <h2 className="text-[20px] font-bold text-[#fff]">Spacious vehicles</h2>
                        <p className="text-[20px] font-bold text-[#ACACAC] mt-[8px]">Always get a window seat in large cars</p>
                    </div>
                    <div className="pt-[24px]">
                        <h2 className="text-[20px] font-bold text-[#fff]">Hitch pick-ups and drop-offs</h2>
                        <p className="text-[20px] font-bold text-[#ACACAC] mt-[8px]">Choose from 100s of pick-up and drop-off locations</p>
                    </div>
                    <div className="pt-[24px]">
                        <h2 className="text-[20px] font-bold text-[#fff]">Minimal Planning</h2>
                        <p className="text-[20px] font-bold text-[#ACACAC] mt-[8px]">Book same day or in advance with guaranteed rides</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HitchInfoBlock