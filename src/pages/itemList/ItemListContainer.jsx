import { useEffect, useState } from "react"
// import { products } from "../../itemsMock"
import ItemList from "./ItemList"
import axios from "axios"
import useFetch from "../../utils/hooks/useFetch.js"
import { useParams } from "react-router-dom"
// import { customAxios } from "../../axiosInstance"

const ItemListContainer = (  ) => {

    // const [items, setItems] = useState([])

    const {categoryName} = useParams()


    // const [products, setProducts] = useState([])


    console.log(categoryName)

    const [items] = useFetch('http://localhost:5000/products', [])
    // const [items] = useFetch('http://localhost:5000/products', [], categoryName)

    // if(categoryName){
    //   (items.find((item) => item.category === categoryName))
    // }
    // setItems(data)
    // console.log({items})
    return (
        <ItemList items = {items} category={categoryName}/>
    )
}

export default ItemListContainer