import axios from "axios"
import useAxios from "../../../utils/hooks/useAxios"
import useCounter from "../../../utils/hooks/useCounter"
import ItemCounter from "./ItemCounter"
import { useEffect, useState } from "react"
import { cart } from "../../../itemsMock"


const ItemCounterContainer = ({ item }) => {

    const [dataCart, setDataCart] = useState([])

    useEffect(() =>{
        

        const task = new Promise((resolve, reject) => { 
            resolve(cart[0])
        })


        task.then((resolve) => setDataCart(resolve.products))
            .catch((error) => console.log(error))
        // let getCartData = axios.get('http://localhost:5000/carts/1')
        
        // getCartData
        //     .then((res) => {

        //         // let productList = res.
        //         setDataCart(res.data)
                
        //     })
        //     .catch((err) => console.log(err))
        
        
        
    }, [])
    const addToCart = (counter) => {

        let product = {
            ...item,
            quantity: counter,
        }
        setDataCart([...dataCart, product])
        // dataCart.products.push(product)
        
        console.log(dataCart)

        
        // axios.put('http://localhost:5000/carts/1', dataCart)
        // useAxios('http://localhost:5000/carts/1', product)

        
    }

    const { add, substract, counter } = useCounter(1, item.stock)
    return (
        <ItemCounter
            add={add}
            substract={substract}
            counter={counter}
            stock={item.stock}
            addToCart={addToCart}
        />
    )
}

export default ItemCounterContainer