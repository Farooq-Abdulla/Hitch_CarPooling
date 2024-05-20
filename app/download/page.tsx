import Footer from "@/components/ui/Footer"
import NavBar from "@/components/ui/NavBar"
import Image from "next/image"

const Downloadpage = () => {
    return (
        <div>
            <NavBar />
            <div className=" h-[468px] w-full p-[40px] ">
                <div className="flex justify-center items-center  ">
                    <div className="flex flex-col items-center  mt-[56px]">
                        <h1 className="text-[56px] text-black font-bold mb-[24px]">Download the app</h1>
                        <div className='border-2 border-black bg-white py-[12px] px-[16px] font-semibold text-[16px] w-max flex items-center'>
                            <div className='mr-[24px]'>Download the app</div>
                            <Image src="/QR1.png" alt='QR code ' width={100} height={100}></Image>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Downloadpage