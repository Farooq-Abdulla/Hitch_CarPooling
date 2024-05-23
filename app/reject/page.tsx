'use client'
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import NavBar from '@/components/ui/NavBar';
import { useRouter } from 'next/navigation';


const Cancel = () => {
    const router = useRouter();
    return (
        <div>
            <NavBar />
            <div className='flex justify-center items-center mt-14 '>
                <Card>
                    {/* <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader> */}
                    <CardContent>
                        <p className='text-xl text-red-700 my-5'>Payment didn't go through. Try again from beginning</p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-lg font-bold dark:bg-zinc-800" onClick={() => router.push("/book")}>
                            <span>Go back </span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                Book Again
                            </span>
                        </button>
                    </CardFooter>
                </Card>

            </div>
        </div>
    )
}

export default Cancel

