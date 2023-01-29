import axios from "axios";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Stripe from "stripe";
import { CartContext } from "../../contexts/context";
import { stripe } from "../../lib/stripe";
import { DetailsContainer, ImageContainer, ProductContainer } from "../../styles/pages/product";

export interface ProductProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: string,
        description: string,
        priceId: string,
        priceUnitAmount: number
    }
}


export default function Product({ product }: ProductProps) {
    const { isFallback } = useRouter()
    const [loading, setLoading] = useState(false)
    const { addItem, products } = useContext(CartContext)

    return (
        <ProductContainer>
            <ImageContainer>
                {!isFallback && <Image src={product.imageUrl} width={420} height={480} alt="" />}
            </ImageContainer>
            <DetailsContainer>
                <h1>{!isFallback && product.name}</h1>
                <span>{!isFallback && product.price}</span>
                <p>{!isFallback && product.description}</p>
                <button
                    disabled={loading || !!products.find(p => p.id == product.id)}
                    onClick={() => addItem({ id: product.id, name: product.name, imageUrl: product.imageUrl, price: product.priceUnitAmount, priceId: product.priceId })}>
                    Colocar na sacola
                </button>
            </DetailsContainer>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [{ params: { id: 'prod_Md8vhF92xJbucD' } }],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const id = params?.id

    if (id == undefined) return { props: {}, revalidate: 60 * 60 * 1 }

    const response = await stripe.products.retrieve(id, { expand: ['default_price'] })

    console.log(response.images[0])
    const price = response.default_price as Stripe.Price
    return {
        props: {
            product: {
                id: response.id,
                name: response.name,
                imageUrl: response.images[0],
                description: response.description,
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(price.unit_amount! / 100),
                priceId: price.id,
                priceUnitAmount: price.unit_amount
            }
        },
        revalidate: 60 * 60 * 1 // 1h
    }
}