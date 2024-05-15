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

const RecoilContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <RecoilRoot>{children}</RecoilRoot>
    )
}

export default RecoilContextProvider