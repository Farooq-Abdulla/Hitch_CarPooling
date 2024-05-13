
const BgVideoBox = () => {
    return (
        <div className='w-[662px] h-[464px] bg-[#141414] px-[32px] py-[40px] absolute top-12  mx-[40px]'>
            <div className=" font-bold leading-[64px]">
                <h2 className="text-[#9E9E9E]  text-[56px]">Rideshare for</h2>
                <h2 className=" text-[#FFFFFF] text-[56px] ">long distances</h2>
            </div>
            <div>
                <div className="mt-[16px] bg-[#404040] h-[80px] p-[16px]">
                    <div className="text-[14px] font-bold text-[#FFFFFF]">Origin</div>
                    <input type="text" placeholder="Where are you leaving from?" className="font-medium text-[20px] bg-transparent w-[550px] text-[#FFFFFF] outline-none cursor-text" />
                </div>
                <div className="mt-[16px] bg-[#404040] h-[80px] p-[16px]">
                    <div className="text-[14px] font-bold text-[#FFFFFF]">Destination</div>
                    <input type="text" placeholder="Where are you headed?" className="font-medium text-[20px] bg-transparent w-[550px] text-[#FFFFFF] outline-none cursor-text" />
                </div>
                <div className="cursor-pointer mt-[24px] p-[16px] bg-[#fff] text-[#000] w-[206.84px] ">
                    <div className="flex items-center" >
                        <div className="font-semibold text-nowrap">Book your ride now </div>
                        <span className=" size-1/2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BgVideoBox