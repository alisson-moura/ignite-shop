import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer, Container } from "../styles/pages/success";

type SuccessProps = {
  products: {
    name: string,
    imageUrl: string,
    id: string
  }[],
  customer: string
}

export default function Success({ products, customer }: SuccessProps) {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <Container>      
        {products.map(p => <ImageContainer key={p.id}><Image key={p.id} src={p.imageUrl} width={100} height={100} alt="" /></ImageContainer>)}
        </Container>

      <p>Uhuul <strong>{customer}</strong>, sua compra de <strong>{`${products.length} ${products.length > 1 ? 'camisetas' : 'camisa'}`}</strong> já está a caminho da sua casa</p>
      <Link href={'/'}>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const items = session.line_items?.data.map(d => d.price?.product) as Stripe.Product[]

  return {
    props: {
      customer: session.customer_details?.name,
      products: items.map(i => ({ name: i.name, imageUrl: i.images[0], id: i.id }))
    }
  }
}