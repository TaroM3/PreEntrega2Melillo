import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
// import useFetch, { useGetItem } from '../../utils/hooks/useFetch'
import { useParams } from 'react-router-dom'
import { products } from '../../itemsMock'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    let {id} = useParams()
    // let {item} = useFetch('http://localhost:5000/products', {}).then((res) => res.find((element) => element.id === +id))

    useEffect(() => {
        // let getData = fetch(`http://localhost:5000/products/${id}`);

        // getData
        //     .then((res) => res.json())
        //     .then((res) => setItem(res))
        //     .catch((err) => console.log(err))
        const task = new Promise((resolve, reject) => {
          resolve(products.find((product) => product.id === +id))
        })

        task
          .then((resolve) => setItem(resolve))
          .catch((error) => console.log(error))
    }, [])


    // const {item} = useGetItem( id,'http://localhost:5000/products', [])
    // let item = items.find((element) => element.id === +id)
  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer