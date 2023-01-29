import axios from 'axios'
import { useState } from 'react'
import { Product, CartContext } from './context'


export default function CartContextProvider(props: any) {
    const [products, setProducts] = useState<Product[]>([])

    function addItem(product: Product) {
        const item = products.find(p => p.id == product.id)
        if (!item) {
           setProducts([product, ...products])
            return
        }
        return
    }

    const removeItem = (id: string) => {
        setProducts(() => {
            const items = products.filter(p => p.id != id)
            return items
        })
     }

     async function buyItems() {
        try {
            const response = await axios.post('/api/checkout', { products })
            window.location.href = response.data.successUrl
        } catch (error) {
            // Adicionar erros á uma ferramenta de observabalidade - Sentry / Datadog
            alert('Algo deu errado.')
        }
    }
    

    return (
        <CartContext.Provider value={{ products, addItem, removeItem, buyItems }}>
            {props.children}
        </CartContext.Provider>
    )
}