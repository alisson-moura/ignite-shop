import { createContext } from "react"

export type Product = {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    priceId: string
}

export type CartContextProps = {
    products: Product[],
    addItem: (product: Product) => void,
    removeItem: (id: string) => void,
    buyItems: () => Promise<void>
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps)