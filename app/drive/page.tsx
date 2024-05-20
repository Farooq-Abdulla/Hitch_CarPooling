import ComparisonComp from "@/components/ui/ComparisonComp"
import DriveInfoTabComp from "@/components/ui/DriveInfoTabComp"
import Footer from "@/components/ui/Footer"
import NavBar from "@/components/ui/NavBar"
import QuestionsPage from "@/components/ui/QuestionsPage"

const Drivepage = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-black h-[468px] w-full p-[40px] " id="section2">
                <div className="flex justify-center items-center  ">
                    <div className="flex flex-col items-center  mt-[56px]">
                        <h1 className="text-[56px] text-white font-bold">Drive with Hitch</h1>
                        <h2 className="text-[56px] text-[#B9B9B9] leading-[64px] font-bold">Start earning today</h2>
                        <p className="text-[20px] text-[#FAFAFA] leading-[32px] font-semibold pb-[28px] text-center max-w-[541px]">Earn $21+ per hour on every drive, every time. Drive between cities and get your entire days earnings on just one trip.</p>

                    </div>
                </div>
            </div>

            <DriveInfoTabComp />
            <ComparisonComp />
            <QuestionsPage />
            <Footer />
        </div>
    )
}

export default Drivepage