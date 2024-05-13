import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const QuestionsPage = () => {
    return (
        <div className='mt-[56px] p-[40px] w-full bg-[#fafafa]'>
            <div className='pt-[88px] w-full'>
                <div className='grid grid-cols-2'>
                    <div>
                        <h1 className='text-[#121212] text-[56px] leading-[64px] font-bold text-wrap'>Still have questions?</h1>
                        <h2 className='text-[#B9B9B9] text-[56px] leading-[64px] font-bold text-wrap'>{`We've got answers`}</h2>
                        <p className='pt-[24px] text-[20px] text-black leading-[32px] font-semibold text-wrap'>{`Still can't find what you're looking for? Visit our Help Center`}</p>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-[16px] font-bold text-[#252525]">What is Hitch?</AccordionTrigger>
                                <AccordionContent className="text-[16px] text-[#6A6A6A] p-3">
                                    Hitch is long distance rideshare, connecting riders and drivers heading to the same city. We are like Uber, but for longer distances.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-[16px] font-bold text-[#252525]">Is it safe?</AccordionTrigger>
                                <AccordionContent className="text-[16px] text-[#6A6A6A] p-3">
                                    Hitch performs transportation industry standard background checks on all drivers. Additionally, all drivers on our platform adhere to our high-quality standards and requirements.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-[16px] font-bold text-[#252525]">How do I get a ride?</AccordionTrigger>
                                <AccordionContent className="text-[16px] text-[#6A6A6A] p-3">
                                    Once you have downloaded the app, you can enter your origin and destination addresses into the booking window. You then select the day, time, and ride type that best aligns with your needs. You can book anywhere from 60 days to 2 hours in advance.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-[16px] font-bold text-[#252525]">Is my ride guaranteed?</AccordionTrigger>
                                <AccordionContent className="text-[16px] text-[#6A6A6A] p-3">
                                    We always guarantee your booked ride and will have a driver available for your scheduled departure time.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-[16px] font-bold text-[#252525]">What are my ride options?</AccordionTrigger>
                                <AccordionContent className="text-[16px] text-[#6A6A6A] p-3">
                                    Hitch has flexible options for every journey. Use our Hitch economical station-to-station service for shared or private rides, customize your travel with door-to-door, or ride in comfort and space with Hitch XL.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger className="text-[16px] font-bold text-[#252525]">Can I book a ride for a friend?</AccordionTrigger>
                                <AccordionContent className="text-[16px] text-[#6A6A6A] p-3">
                                    Its no problem to book a ride for a friend or family member. As safety is top of mind, we ask that everyone ride on their own names and profiles. Should you need to transfer a booked ride to a friends profile, reach out to our support team in-app for help.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7">
                                <AccordionTrigger className="text-[16px] font-bold text-[#252525]">How much luggage can I bring?</AccordionTrigger>
                                <AccordionContent className="text-[16px] text-[#6A6A6A] p-3">
                                    The number of bags that you can bring is determined by the type of ride that you purchase. Please have a look at this link for an overview of our Luggage Policy.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionsPage