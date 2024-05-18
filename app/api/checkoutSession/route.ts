
import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
const stripe= new Stripe(process.env.STRIPE_SECRET_KEY!)


export async function POST(req:NextRequest){

    const {details}= await req.json() 

    // const signature = req.headers.get("Stripe-Signature")
    // if (!signature) {
    //     return new Response("Stripe-Signature header missing", { status: 400 })
    // }

    // let event:Stripe.Event

    // try {
    //     event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
    //     console.log(event.type)
    //     return NextResponse.json({ Event:event },{ status: 200 })
    // } catch (err) {
    //     return NextResponse.json({error: err}, {status: 400})
    // }
    try {
        const checkoutSession= await stripe.checkout.sessions.create({
            line_items:[
                {
                    price_data:{
                        currency: "usd",
                        product_data:{
                            name: "T-shirt",
                        },
                        unit_amount: details.Price * 100,
                    },
                    quantity: 1,
                }
    
            ],
            mode: "payment",
            success_url: "https://hitch-car-pooling.vercel.app/book",
            cancel_url: "https://hitch-car-pooling.vercel.app",
    
        })
        return NextResponse.json(checkoutSession.url,{status: 200})
    } catch (error) {
        return NextResponse.json(error,{status: 400})
    }
    

    
}