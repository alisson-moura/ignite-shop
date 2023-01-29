import { CartList, ListContainer, List, Item, ImageContainer, Details } from "../../styles/components/checkout";
import Image from 'next/image'
import close from '../../assets/close.svg'
import { useContext } from "react";
import { CartContext } from "../../contexts/context";
import { formatNumberToCurrency } from "../../utils/currency";

export default function Checkout({ closeCartList }: { closeCartList: () => void }) {
  const { products, removeItem, buyItems } = useContext(CartContext)

  const price = products.reduce((acc, item) => acc + item.price, 0)

  return (
    <CartList>
      <button className='close-btn' onClick={() => closeCartList()}><Image src={close} alt="" /></button>
      <ListContainer>
        <h1>Sacola de compras</h1>
        <List>
          {products.map(product => (
            <Item key={product.id}>
              <ImageContainer>
                <Image src={product.imageUrl} height={94} width={94} alt="" />
              </ImageContainer>
              <Details>
                <span>{product.name}</span>
                <span><strong>{formatNumberToCurrency(product.price)}</strong></span>
                <span onClick={() => removeItem(product.id)} className='btn-remove'>Remover</span>
              </Details>
            </Item>
          ))}
        </List>
        <div className='details'>
          <span className='qtd'>Quantidade</span>
          <span className='amount'>{`${products.length} ite${products.length > 1 ? 'ns' : 'm'}`}</span>
          <span className='value'>Valor total</span>
          <span className='price'>{formatNumberToCurrency(price)}</span>
        </div>
        <button onClick={() => buyItems()}>Finalizar compra</button>
      </ListContainer>
    </CartList>
  )
}