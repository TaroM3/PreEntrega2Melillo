import axios from "axios"
import useAxios from "../../utils/hooks/useAxios"
import useFetch from "../../utils/hooks/useFetch"
import Cart from "./Cart"
import { useEffect, useState } from "react"
import { cart } from "../../itemsMock.js"


const CartContainer = () => {

    const [cartProducts, setCartProducts] = useState([])
    // let cartProducts = []
    // const cart = useFetch('', [])
    // const [items] = useAxios('http://localhost:5000/carts/1')

    useEffect(() => {
        // const getCart = axios.get('http://localhost:5000/carts/1')
        // getCart.then((res) => setCartProducts(res.data))
        //     .catch((err) => console.log(err))
        const task = new Promise((resolve, reject) => {
            resolve(cart)
        })

        task
            .then((resolve) => setCartProducts(resolve[0].products))
            .catch((error) => console.log(error))
    }, [])
    
    return (
        
    <section style={{color: 'white'}}>
        
        {/* {cartProducts[0] !== undefined &&  */}
        {/* // console.log(cartProducts[0].product.id) */}

        {/* {cartProducts.products !== undefined && (<Cart cartProducts={cartProducts}/>)} */}

        {cartProducts !== undefined && (<Cart cartProducts={cartProducts}/>)}
    </section>
    // {items.map()}
  )
}

export default CartContainer