
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { CorouselCount, CorouselCurrent } from "@/lib/RecoilContextProvider"
import { useEffect, useState } from "react"
import { useSetRecoilState } from "recoil"

export function CarouselDemo() {

    const [api, setApi] = useState<CarouselApi>()
    const setCurrent = useSetRecoilState(CorouselCurrent)
    const setCount = useSetRecoilState(CorouselCount)


    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api, setCurrent, setCount])

    return (
        <Carousel setApi={setApi} className="w-full max-w-16">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="w-14 rounded-full">
                                <CardContent className="flex  items-center justify-center p-2">
                                    <span className="text-sm font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
