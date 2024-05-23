'use client'
import { Button } from '@/components/ui/button'
import { InputOTPDemo } from '@/components/ui/InputOTP'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import NavBar from '@/components/ui/NavBar'
import { authUserReciol, Otp, phoneState } from '@/lib/RecoilContextProvider'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useRecoilState } from 'recoil'
import { auth } from '../firebase/config'

declare global {
    interface Window {
        recaptchaVerifier: RecaptchaVerifier;
        grecaptcha: any;
    }
}


const SignIn = () => {
    const [authUser] = useAuthState(auth)
    const [AuthUser, setAuthUser] = useRecoilState(authUserReciol)

    // console.log(authUser)

    const [phone, setPhone] = useRecoilState(phoneState)
    // const [phone, setPhone] = useState('')
    const [user, setUser] = useState<any>()

    const [buttonClick, setButtonClick] = useState(false)
    const [otp, setOTP] = useRecoilState(Otp)
    const router = useRouter()
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        // Cleanup function to reset the reCAPTCHA verifier
        return () => {
            if (window.recaptchaVerifier) {
                window.recaptchaVerifier.clear();
                window.recaptchaVerifier = null;
            }
        };
    }, []);

    const initializeRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                size: 'invisible',
                // callback: (response: any) => {
                //     sendOtp();
                // },
                'expired-callback': () => {
                    // Reset reCAPTCHA if it expires
                    window.recaptchaVerifier.render().then((widgetId: any) => {
                        window.grecaptcha.reset(widgetId);
                    });
                }
            });
        } else {
            // Reset if recaptchaVerifier already exists
            window.recaptchaVerifier.render().then((widgetId: any) => {
                window.grecaptcha.reset(widgetId);
            });
        }
    };


    const sendOtp = async () => {
        try {
            setLoading(true)
            localStorage.setItem("phone", phone)
            initializeRecaptcha()
            const appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(auth, phone, appVerifier)
                .then((confirmation) => {
                    setUser(confirmation);
                    setButtonClick(true)
                    setLoading(false)

                }).catch((error) => {
                    console.log("Error while sending OTP: " + error)
                });
        } catch (error) {
            console.log("Error while sending OTP try block: " + error)
        }
    }

    const verifyOtp = async () => {
        try {
            setLoading(true)
            const data = await user.confirm(otp)
            console.log(data)
            // console.log(data.user.metadata.createdAt, data.user.metadata.lastLoginAt)
            // console.log(data._tokenResponse.isNewUser)
            localStorage.setItem("uid", data.user.uid)
            setAuthUser(data.user.uid)

            setOTP('')
            if (data._tokenResponse.isNewUser) {
                console.log(" In if block")
                router.push("/onboard")
            } else {
                router.push("/book")

            }


            // sessionStorage.setItem("user", data.user.uid)
        } catch (error) {
            alert("Try again")
            setOTP('')
            setLoading(false)
            console.log("Error while verifying OTP: " + error)
        }
    }



    return (
        <div>
            <NavBar />
            <div className='absolute top-[50%] -translate-y-2/4 left-0 w-full max-h-full p-3'>
                <div className='bg-white mx-auto w-full max-w-[502px]'>
                    {/* <Button onClick={() => signOut(auth)}>SignOut</Button> */}
                    {!buttonClick && (
                        <div>
                            <p className='text-[32px] leading-[40px] font-bold mb-2'>What&apos;s your number?</p>
                            <p className='text-[20px] leading-[28px] text-[#6a6a6a] mb-8'>Whether you&apos;re creating an account or signing back in, let&apos;s start with your number</p>
                            <div className='w-full'>
                                <PhoneInput country={"us"} value={phone} onChange={(phone) => setPhone("+" + phone)} inputProps={{ autoFocus: true, required: true }} inputStyle={{ width: "100%", height: 50, fontSize: 16 }} containerStyle={{ height: 50 }} />
                            </div>
                            {/* <div id='recaptcha-container' className='mt-4 ml-16'></div> */}
                            <Button onClick={sendOtp} className='px-[24px] rounded-[10px] py-[16px] w-full mt-12 text-lg font-medium'>Send verification code {loading ? <LoadingSpinner /> : ''}</Button>
                        </div>
                    )}
                    {buttonClick && (
                        <div>
                            <p className='text-4xl font-bold mb-2'>Phone verification</p>
                            <p className='text-xl text-[#6a6a6a]'>{`We just sent a code to ${phone}`}</p>
                            <p className='text-xl text-[#6a6a6a] mb-8'> Please enter it below</p>
                            <div className='flex flex-row justify-between'>
                                <div className='flex justify-between w-full max-w-[416px] gap-2'>
                                    <InputOTPDemo />
                                </div>
                            </div>
                            <Button onClick={verifyOtp} className='px-[24px] rounded-[10px] py-[16px] w-full mt-12 text-lg font-medium'>Submit verification code {loading ? <LoadingSpinner /> : ''}</Button>
                            <button className='px-[24px] rounded-[10px] py-[16px] w-full mt-2 text-[#266ef1] text-lg' onClick={sendOtp}>Resend code</button>
                        </div>
                    )}
                </div>
                <div id='recaptcha-container'></div>
            </div>
        </div>
    )
}

export default SignIn