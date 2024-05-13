import Image from 'next/image'

const DownloadSection = () => {
    return (
        <section className='pt-[48px] pb-[40px] '>
            <div className='px-[40px] '>
                <div className='grid grid-cols-2'>
                    <div>
                        <Image src="/book_today.webp" alt='Phone Image' width={700} height={700}></Image>
                    </div>
                    <div className='p-[48px]'>
                        <div className='pb-[40px]'>
                            <h2 className='text-[56px] text-[#121212] leading-[64px] font-bold '>Download the app</h2>
                            <h3 className='text-[56px] text-[#B9B9B9] leading-[64px] font-bold '>Book today</h3>
                        </div>
                        <div className='border-2 border-black bg-white py-[12px] px-[16px] font-semibold text-[16px] w-max flex items-center'>
                            <div className='mr-[24px]'>Download the app</div>
                            <Image src="/Qr.svg" alt='QR code ' width={100} height={100}></Image>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DownloadSection