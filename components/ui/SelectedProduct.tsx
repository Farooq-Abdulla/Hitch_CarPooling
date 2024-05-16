import { ProductDetails } from '@/lib/RecoilContextProvider'
import { useRecoilValue } from 'recoil'

const SelectedProduct = () => {
    const Details = useRecoilValue(ProductDetails)
    return (
        <div className='flex flex-col'>
            <span className='font-bold text-[16px] text-black'>{`${Details.CarName}, ${Details.EntireCar}`}</span>
            <span className='text-sm text-black flex items-center'>
                {`${Details.STime} - ${Details.STimeArrival} . $${Details.Price}`}
            </span>
        </div>
    )
}

export default SelectedProduct