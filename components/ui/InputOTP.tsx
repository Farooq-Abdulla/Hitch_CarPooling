import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot
} from "@/components/ui/input-otp"
import { Otp } from "@/lib/RecoilContextProvider"
import { useRecoilState } from "recoil"

export function InputOTPDemo() {
    const [otp, setOTP] = useRecoilState(Otp)
    return (
        <InputOTP maxLength={6} value={otp} onChange={(otp) => setOTP(otp)}>
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
        </InputOTP>
    )
}
