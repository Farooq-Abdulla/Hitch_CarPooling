
import NavBar from '@/components/ui/NavBar'
import SelectCity from '@/components/ui/SelectCity'

const Onboarding = () => {
    // const countries = Country.getAllCountries()
    // console.log(countries)

    return (
        <div>
            <NavBar />
            <div className='absolute top-[50%] -translate-y-2/4 left-0 w-full max-h-full overflow-auto p-[16px] pb-[48px]'>
                <div className='bg-white mx-auto w-full max-w-[502px]'>
                    <div className='pt-4'>
                        <p className='text-4xl font-bold mb-2'>Create your account</p>
                        <p className='mb-4 text-xl text-[#6a6a6a]'>Make sure that your personal information is correct and add some additional info to create your account.</p>
                        <div className='flex flex-col gap-y-2'>
                            <div className='relative flex items-center h-[64px] cursor-text w-full border rounded-xl mb-2'>
                                <div className='flex-1 relative h-full'>
                                    <label htmlFor="firstname" className='absolute top-[50%] left-[16px] text-[16px] text-[#6a6a6a] transition-all translate-y-[-50%]'>First name</label>
                                    <input type="text" id='firstname' className='w-full h-full bg-none outline-none px-[16px] py-[12px] ' />
                                </div>
                            </div>
                            <div className='relative flex items-center h-[64px] cursor-text w-full border rounded-xl mb-2'>
                                <div className='flex-1 relative h-full'>
                                    <label htmlFor="Lastname" className='absolute top-[50%] left-[16px] text-[16px] text-[#6a6a6a] transition-all translate-y-[-50%]'>Last name</label>
                                    <input type="text" id='Lastname' className='w-full h-full bg-none outline-none px-[16px] py-[12px]' />
                                </div>
                            </div>
                            <div className='relative flex items-center h-[64px] cursor-text w-full border rounded-xl mb-2'>
                                <div className='flex-1 relative h-full'>
                                    <label htmlFor="Email" className='absolute top-[50%] left-[16px] text-[16px] text-[#6a6a6a] transition-all translate-y-[-50%]'>Email</label>
                                    <input type="text" id='Email' className='w-full h-full bg-none outline-none px-[16px] py-[12px]' />
                                </div>
                            </div>
                            <div className='relative flex items-center h-[64px] cursor-text w-full border rounded-xl mb-2'>
                                <div className='flex-1 relative h-full'>
                                    <label htmlFor="Phone" className='absolute top-[50%] left-[16px] text-[16px] text-[#6a6a6a] transition-all translate-y-[-50%] bg-'></label>
                                    <input type="text" id='Phone' className='w-full h-full bg-none outline-none px-[16px] py-[12px]' disabled value={"+18062836268"} />
                                </div>
                            </div>
                            <div className='relative flex items-center h-[64px] cursor-text w-full border rounded-xl mb-2'>
                                <div className='flex-1 relative h-full'>
                                    <label htmlFor="HomeCity" className='absolute top-[50%] left-[16px] text-[16px] text-[#6a6a6a] transition-all translate-y-[-50%]'></label>
                                    {/* <input type="text" id='HomeCity' className='w-full h-full bg-none outline-none px-[16px] py-[12px]' /> */}
                                    <SelectCity />
                                </div>
                            </div>
                            <div className='relative flex items-center h-[64px] cursor-text w-full border rounded-xl mb-2'>
                                <div className='flex-1 relative h-full'>
                                    <label htmlFor="firstname" className='absolute top-[50%] left-[16px] text-[16px] text-[#6a6a6a] transition-all translate-y-[-50%]'>First name</label>
                                    <input type="text" id='firstname' className='w-full h-full bg-none outline-none px-[16px] py-[12px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Onboarding