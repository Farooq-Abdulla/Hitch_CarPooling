import { Box, Tabs, Text } from "@radix-ui/themes"

const RideRatesInfo = () => {
    return (
        <div className='mt-[56px] p-[40px] w-full'>
            <div className='flex justify-center items-center '>
                <Tabs.Root defaultValue="Station">
                    <Tabs.List color="gray" highContrast  >
                        <div className="ml-[350px]">
                            <Tabs.Trigger value="Station" ><p className="text-[18px] p-[8px]  text-[#212529] font-semibold">Station to Station</p></Tabs.Trigger>
                        </div>
                        <div >
                            <Tabs.Trigger value="Door"><p className="text-[18px] p-[8px] text-[#212529]  font-semibold">Door to Door</p></Tabs.Trigger>
                        </div>
                    </Tabs.List>

                    <Box pt="3">
                        <Tabs.Content value="Station">
                            <Text size="3">
                                <div className="px-[349px]">
                                    <div className="py-[40px] text-[56px] text-[#121212] leading-[64px] font-bold">
                                        <p>Affordable, dependable rides between stations</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-[36px] pb-[36px]">
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Pick ups near you</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Meet your driver at a station near you</p>
                                        </div>
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Starting at $15 a seat</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Lower than the price of a bus ticket</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-[36px] pb-[36px]">
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Never settle for the middle seat</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Ride with a window seat, every time</p>
                                        </div>
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Over 5 departures a day</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Find rides that match your schedule</p>
                                        </div>
                                    </div>
                                </div>
                            </Text>
                        </Tabs.Content>

                        <Tabs.Content value="Door">
                            <Text size="3">
                                <div className="px-[349px]">
                                    <div className="py-[40px] text-[56px] text-[#121212] leading-[64px] font-bold">
                                        <p>Premium rides, direct to your destination.</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-[36px] pb-[36px]">
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Door to door</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Your desired pick ups and drop offs</p>
                                        </div>
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Starting at $85 a ride</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Less than half the price of a flight</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-[36px] pb-[36px]">
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Chartered experience</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Relax in the back seat, all to yourself</p>
                                        </div>
                                        <div>
                                            <h2 className="text-[#252525] text-[20px] leading-[32px] font-semibold pb-[8px]">Over 10 departures a day</h2>
                                            <p className="text-[16px] text-[#727272] leading-[24px] font-normal">Never compromise on your schedule</p>
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

export default RideRatesInfo