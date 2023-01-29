import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

const successUrl = `${process.env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`
const cancelUrl = `${process.env.APP_URL}/`

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    const { products } = request.body

    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method no Allowed.' })
    }

    if (products.length == 0) {
        return response.status(405).json({ message: 'Products not found.' })
    }
    const prices = products.map((p: any) => ({ price: p.priceId, quantity: 1 }))

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: prices
    })

    return response.status(201).json({ successUrl: checkoutSession.url })
}