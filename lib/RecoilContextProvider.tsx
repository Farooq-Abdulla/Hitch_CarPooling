'use client'
import React from 'react'
import { atom, RecoilRoot } from "recoil"

export const OriginLatAtom = atom({
    key: 'OriginLatAtom',
    default: 33.58495881848903,
})
export const OriginLngAtom = atom({
    key: 'OriginLngAtom',
    default: -101.87456245869967,
})
export const DestinationLatAtom = atom({
    key: 'DestinationLatAtom',
    default: 0,
})
export const DestinationLngAtom = atom({
    key: 'DestinationLngAtom',
    default: 0,
})
export const PickUp = atom({
    key: 'PickUp',
    default: '',
})
export const DropOff = atom({
    key: 'DropOff',
    default: '',
})
export const CorouselCurrent = atom({
    key: 'CorouselCurrent',
    default: 0,
})
export const CorouselCount = atom({
    key: 'CorouselCount',
    default: 0,
})

export const ProductDetails = atom({
    key: 'ProductDetails',
    default: {
        CarName: "",
        EntireCar: "",
        STime: "",
        STimeArrival: "",
        Price: 0
    },
})

export const ProductClick = atom({
    key: 'ProductClick',
    default: false,
})

export const ContentClicked = atom({
    key: 'ContentClicked',
    default: true,
})

export const GoToConf = atom({
    key: 'GoToConf',
    default: false,
})

export const DateFormatted = atom({
    key: 'DateFormatted',
    default: '',
})
export const PickUpFullAddress = atom({
    key: 'PickUpFullAddress',
    default: '',
})
export const DropOffFullAddress = atom({
    key: 'DropOffFullAddress',
    default: '',
})

export const SwitchChecked = atom({
    key: 'SwitchChecked',
    default: false,
})

export const FinalPrice = atom({
    key: 'FinalPrice',
    default: 0,
})
export const OriginMainText = atom({
    key: 'OriginMainText',
    default: '',
})
export const DestinationMainText = atom({
    key: 'DestinationMainText',
    default: '',
})
export const Otp = atom({
    key: 'otp',
    default: '',
})

export const phoneState = atom({
    key: 'phoneState',
    default: '',
})

export const DocumentId = atom({
    key: 'DocumentId',
    default: '',
})

export const UserDetails = atom({
    key: 'UserDetails',
    default: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        city: '',
        seenWhere: '',
        user_Id: ''

    }
})

export const authUserReciol = atom({
    key: 'authUserReciol',
    default: '',
})



const RecoilContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <RecoilRoot>{children}</RecoilRoot>
    )
}

export default RecoilContextProvider