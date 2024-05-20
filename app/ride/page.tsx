import Footer from "@/components/ui/Footer"
import NavBar from "@/components/ui/NavBar"
import QuestionsPage from "@/components/ui/QuestionsPage"
import RideRatesInfo from "@/components/ui/RideRatesInfo"
import Link from "next/link"

const Ridepage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-black h-[468px] w-full p-[40px] " id="section1">
                <div className="flex justify-center items-center  ">
                    <div className="flex flex-col items-center  mt-[56px]">
                        <h1 className="text-[56px] text-white font-bold">Ride with Hitch</h1>
                        <h2 className="text-[56px] text-[#B9B9B9] leading-[64px] font-bold">Guaranteed rides, daily</h2>
                        <p className="text-[20px] text-[#FAFAFA] leading-[32px] font-semibold pb-[28px] text-center max-w-[541px]">Hitch is your safe, flexible and reliable rideshare between cities. Start riding in modern comfort today.</p>
                        <Link href={"/book"}><div className="bg-white w-max h-min cursor-pointer py-[12px] px-[16px] rounded-sm flex items-center">
                            <p className="mr-[12px] text-[16px] font-semibold text-nowrap">Book now </p>
                            <span className=" size-1/2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></span>
                        </div></Link>
                    </div>
                </div>
            </div>

            <RideRatesInfo />
            <QuestionsPage />
            <Footer />
        </div>
    )
}

export default Ridepage