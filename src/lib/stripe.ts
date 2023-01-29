import Stripe from 'stripe'

const secrect_key = process.env.STRIPE_SECRECT_KEY

if(secrect_key == undefined) throw new Error('invalid stripe key')

export const stripe = new Stripe(secrect_key, {
    apiVersion: '2022-11-15',
    appInfo: {
        name: 'Ignite Shop'
    }
})