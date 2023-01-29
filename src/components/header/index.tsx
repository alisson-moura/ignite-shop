import Link from "next/link";
import Image from 'next/image'
import { Cart, Container } from "../../styles/components/header";
import logo from '../../assets/logo.svg'
import hug from '../../assets/hug.svg'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/context";
import Checkout from "../checkout";

export default function Header() {
    const [showCartList, setShowCartList] = useState<boolean>(false)
    const { products } = useContext(CartContext)

    return (
        <>
            <Container>
                <Link href='/'>
                    <Image src={logo} alt="" />
                </Link>
                <Cart onClick={() => setShowCartList(true)}>
                    <Image src={hug} alt="" />
                    {products.length > 0 && <span>{products.length}</span>}
                </Cart>
            </Container>
            {showCartList && products.length > 0 && <Checkout closeCartList={() => setShowCartList(false)} />}
        </>
    )
}