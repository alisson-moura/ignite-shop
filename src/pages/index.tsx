import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { HomeContainer, Product } from "../styles/pages/home";
import { GetStaticProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Link from "next/link";

export interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home(props: HomeProps) {
  const { products } = props
  const [sliderRef] = useKeenSlider({ slides: { perView: 2, spacing: 48 } })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => (
        <Link key={product.id} href={`/products/${product.id}`} prefetch={false}>
          <Product className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt={product.name} />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        </Link>
      ))}

    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<any> => {
  const response = await stripe.products.list({ expand: ['data.default_price'] })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100)
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}