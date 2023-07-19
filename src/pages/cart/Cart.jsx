import axios from "axios"
import { useState } from "react"
import useAxios from "../../utils/hooks/useAxios"
import ItemCard from "../../components/common/item/ItemCard"
import CartProduct from "../../components/common/cartProduct/CartProduct"

const Cart = ({cartProducts}) => {

    // const [cart, setCart] = useState([])
    // const [items] =useAxios('http://localhost:5000/carts/1')
    // console.log(items.products)
    // console.log({cartProducts})
    // setCart(items.products)
  return (
    <section style={{color: 'white', margin: '2em'}}>
        {/* Hola */}
        {/* {cartProducts.products[0].title} */}
        {cartProducts.map((product) => 
            (<CartProduct key={product.id} product={product} />))
        }
    </section>
  )
}

export default Cart