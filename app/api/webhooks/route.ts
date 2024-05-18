
import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
const stripe= new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req:NextRequest){
    const body= await req.text()

    const signature = req.headers.get("Stripe-Signature")
    if (!signature) {
        return new Response("Stripe-Signature header missing", { status: 400 })
    }

    let event:Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
        // console.log(event.type)
        // return NextResponse.json({ Event:event },{ status: 200 })
    } catch (err) {
        return NextResponse.json({error: err}, {status: 400})
    }
    const session= event.data.object as Stripe.Checkout.Session
    if(event.type==="checkout.session.completed") {
        console.log("Payment was successfully completed", session.id)
    }

    // const checkoutSession= await stripe.checkout.sessions.create({
    //     line_items:[
    //         {
    //             price_data:{
    //                 currency: "usd",
    //                 product_data:{
    //                     name: "T-shirt",
    //                 },
    //                 unit_amount: 2000,
    //             },
    //             quantity: 1,
    //         }

    //     ],
    //     mode: "payment",
    //     success_url: "https://localhost:3000/book",
    //     cancel_url: "http://localhost:3000/",

    // })
    // return NextResponse.json(checkoutSession.url,{status: 200})

    
}