import { Box, Tabs, Text } from "@radix-ui/themes"
const DriveInfoTabComp = () => {
    return (
        <div className='mt-[56px] p-[40px] w-full'>
            <div className='flex justify-center items-center '>
                <Tabs.Root defaultValue="CarPooling">
                    <Tabs.List color="gray" highContrast  >
                        <div className="ml-[350px]">
                            <Tabs.Trigger value="CarPooling" ><p className="text-[18px] p-[8px]  text-[#212529] font-semibold">Going-anyway {`(Carpooling)`}</p></Tabs.Trigger>
                        </div>
                        <div >
                            <Tabs.Trigger value="ProfDriving"><p className="text-[18px] p-[8px] text-[#212529]  font-semibold">Professional Driving</p></Tabs.Trigger>
                        </div>
                    </Tabs.List>

                    <Box pt="3">
                        <Tabs.Content value="CarPooling">
                            <Text size="3">
                                <div className="px-[349px]">
                                    <div className="py-[40px] text-[56px] text-[#121212] leading-[64px] font-bold">
                                        <p>Fill your empty seats with minimal detours</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-[36px] pb-[36px]">
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Riders along your way</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Get matched with the riders going to your destination city. See your exact detour time before your drive.</p>
                                        </div>
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Up to $130 earnings one way</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Easily earn money on the trip you are making anyway.</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-[36px] pb-[36px]">
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Minimal planning</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Choose your drive time and get matched with passengers the same day or in advance.</p>
                                        </div>
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Easy application</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Get started within a day of submitting your driver application.</p>
                                        </div>
                                    </div>
                                </div>
                            </Text>
                        </Tabs.Content>

                        <Tabs.Content value="ProfDriving">
                            <Text size="3">
                                <div className="px-[349px]">
                                    <div className="py-[40px] text-[56px] text-[#121212] leading-[64px] font-bold">
                                        <p>A full day of earnings with just one trip</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-[36px] pb-[36px]">
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Long distance means less hassle</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Our rides span between 3-8 hours, which means better mileage, fewer stops, and less idling</p>
                                        </div>
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Earn $22-30/hr guaranteed</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">We pay you to drive to a neighboring city and back, even if we dont match you with any passengers on your return.</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-[36px] pb-[36px]">
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Predictable earnings</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Claim rides up to 30 days in advance, allowing you to forecast your exact earnings.</p>
                                        </div>
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Flexible driving</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Driving with Hitch is a great way to earn when you want and on your own schedule.</p>
                                        </div>
                                    </div>
                                </div>
                            </Text>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </div>
        </div>
    )
}

export default DriveInfoTabComp