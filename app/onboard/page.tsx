'use client'
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import NavBar from '@/components/ui/NavBar';
import cityOptions from '@/components/ui/SelectCity';
import Seen from '@/components/ui/SelectHear';
import { DocumentId, phoneState } from '@/lib/RecoilContextProvider';
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from 'recoil';
import { z } from "zod";
import { auth, db } from '../firebase/config';

// Extract city names and seen where options as tuples
const cityNames = cityOptions.map((city) => city.name);
const cityNamesTuple = cityNames as [string, ...string[]];
const seenWhere = Seen.map((seen) => seen.name);
const seenWhereTuple = seenWhere as [string, ...string[]];

// Create schema with enum validation for city and seenWhere
const schema = z.object({
    firstname: z.string().max(25),
    lastname: z.string().max(25),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Invalid phone number" }).max(10, { message: "Invalid phone number" }),
    city: z.enum(cityNamesTuple),
    seenWhere: z.enum(seenWhereTuple)
});
type FormFields = z.infer<typeof schema>;

// Sort cityOptions alphabetically by name
cityOptions.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});

const Onboarding = () => {
    const router = useRouter()

    const [authUser] = useAuthState(auth)
    if (!localStorage.getItem("uid")) {
        router.push("/signin")
    }
    const [docId, setDocId] = useRecoilState(DocumentId)
    console.log("Trying to get DocId from main function", docId)
    const defaultPhone = useRecoilValue(phoneState);
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({ defaultValues: { phone: defaultPhone } });

    const onSubmit = async (data: any) => {
        console.log(data);
        const { firstname, lastname, email, phone, city, seenWhere } = data;
        try {
            const document = await addDoc(collection(db, "Hitch"), {
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                city: city,
                seenWhere: seenWhere,
                user_Id: authUser?.uid
            })
            console.log("In try block of onSubmit function :", document.id)
            setDocId(document.id)
            router.push("/book")
        } catch (error) {
            console.log("Error in adding document :" + JSON.stringify(error));
            alert("Error in adding details, please try again")
            setError("root", { message: "Error in adding details, please try again" })
        }

    }

    return (
        <div className='absolute w-full'>
            <NavBar />
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='relative top-10 left-0 w-full h-full overflow-y-auto p-[16px] pb-[48px]'>
                    <div className='bg-white mx-auto w-full max-w-[502px]'>
                        <div className='pt-4'>
                            <div className='text-4xl font-bold mb-2'>Create your account</div>
                            <div className='mb-4 text-xl text-[#6a6a6a]'>Make sure that your personal information is correct and add some additional info to create your account.</div>
                            <div className='flex flex-col gap-y-2'>
                                <div className='relative flex items-center h-full cursor-text w-full  rounded-xl mb-2'>
                                    <div className='flex-1 relative h-full'>
                                        <Input required type='text' placeholder="First Name" className='w-full h-[50px] text-base rounded-xl' {...register("firstname")} />
                                    </div>
                                </div>
                                <div className='relative flex items-center h-full cursor-text w-full  rounded-xl mb-2'>
                                    <div className='flex-1 relative h-full'>
                                        <Input required type='text' placeholder="Last Name" className='w-full h-[50px] text-base rounded-xl' {...register("lastname")} />
                                    </div>
                                </div>
                                <div className='relative flex items-center h-full cursor-text w-full  rounded-xl mb-2'>
                                    <div className='flex-1 relative h-full'>
                                        <Input required type='email' placeholder="Email" className='w-full h-[50px] text-base rounded-xl' {...register("email")} />
                                    </div>
                                </div>
                                <div className='relative flex items-center h-full cursor-text w-full  rounded-xl mb-2'>
                                    <div className='flex-1 relative h-full'>
                                        <Input required type='tel' placeholder="Phone" className='w-full h-[50px] text-base rounded-xl' disabled defaultValue={defaultPhone} {...register("phone")} />
                                    </div>
                                </div>
                                <div className=' flex items-center max-h-full cursor-text w-full  rounded-xl mb-2'>
                                    <div className='flex-1 relative h-full'>
                                        {/* <Select {...register("city")}>
                                            <SelectTrigger className="h-[50px] text-base text-[#6a6a6a] rounded-xl">
                                                <SelectValue placeholder="HomeCity" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {cityOptions.map((city) => {
                                                    return (<SelectItem className='cursor-pointer' value={city.value} key={city.key}>{city.name}</SelectItem>)
                                                })}
                                            </SelectContent>
                                        </Select> */}
                                        <div className='border border-slate-200 px-4 rounded-xl h-[60px] py-2 text-[#6a6a6a]'>
                                            <label htmlFor="city" className='text-sm'>Home City</label>
                                            <select className='w-full  text-base text-[#6a6a6a]  mb-2  px-3 outline-none' id='city' {...register("city")} required>
                                                <option defaultValue={"5bc7aed6e7179a4377fda58e"}>Austin</option>
                                                {cityOptions.map((city) => {
                                                    return (<option value={city.value} key={city.key}>{city.name}</option>)
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative flex items-center max-h-full text-base text-[#6a6a6a] cursor-text w-full  rounded-xl mb-2'>
                                    <div className='flex-1 relative h-full'>
                                        {/* <Select {...register("seenWhere")}>
                                            <SelectTrigger className="h-[50px] text-base text-[#6a6a6a] rounded-xl">
                                                <SelectValue placeholder="How did you hear about us ?" className='' />
                                            </SelectTrigger>
                                            <SelectContent className='cursor-pointer'>
                                                {Seen.map((item) => {
                                                    return (<SelectItem className='cursor-pointer' value={item.value} key={item.key}>{item.name}</SelectItem>)
                                                })}
                                            </SelectContent>
                                        </Select> */}
                                        <div className='border border-slate-200 px-4 rounded-xl h-[60px] py-2 text-[#6a6a6a]'>
                                            <label htmlFor="seen" className='text-sm'> Where did you hear about us ?</label>
                                            <select className='w-full  text-base text-[#6a6a6a]  mb-2  px-3 outline-none' id='seen' {...register("seenWhere")} required>

                                                {Seen.map((item) => {
                                                    return (<option value={item.value} key={item.key}>{item.name}</option>)
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <Button className=' px-[24px] rounded-[10px] py-[16px] w-full text-center text-lg font-medium mt-4' disabled={isSubmitting}>{isSubmitting ? "Loading..." : "Create your account"}</Button>
                                {errors.root && (<div className='text-red-700'>{errors.root.message}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Onboarding;
