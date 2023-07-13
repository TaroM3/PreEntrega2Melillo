import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
// import useFetch, { useGetItem } from '../../utils/hooks/useFetch'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    let {id} = useParams()
    // let {item} = useFetch('http://localhost:5000/products', {}).then((res) => res.find((element) => element.id === +id))

    useEffect(() => {
        let getData = fetch(`http://localhost:5000/products/${id}`);

        getData
            .then((res) => res.json())
            .then((res) => setItem(res))
            .catch((err) => console.log(err))
    }, [])
    // const {item} = useGetItem( id,'http://localhost:5000/products', [])
    // let item = items.find((element) => element.id === +id)
  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer