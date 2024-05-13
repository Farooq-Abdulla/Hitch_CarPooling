import Image from "next/image"
import Link from "next/link"

const SafetyInfo = () => {
    return (
        <section className='pt-[48px] pb-[40px] bg-[#fff] w-full'>
            <div className='px-[40px] grid grid-cols-2 '>
                <div className='p-[48px]'>
                    <h1 className="text-[56px] text-[#121212] font-semibold leading-tight">Youre safe with us</h1>
                    <h3 className="text-[56px] text-[#B9B9B9] font-semibold  leading-tight" > All drivers are background checked</h3>
                    <div className="my-[50px]">
                        <div>
                            <p className="leading-[32px] mt-[8px] text-[20px] font-medium text-[#121212]">Our drivers are carefully screened through industry standard background checks, identity verification, and document validation to ensure your safety on every ride.</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-black text-white w-[135px] h-[48px] flex justify-center items-center cursor-pointer ">
                            <Link href={"/x"}>Book now</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src="/safetyImage.webp" alt="Safety Image" width={600} height={600}></Image>
                </div>
            </div>
        </section>
    )
}

export default SafetyInfo