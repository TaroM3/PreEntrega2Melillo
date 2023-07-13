import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (endpoint) => {
    const [data, setData] = useState({})

    
    useEffect(() => {
        const getCart = axios.get(endpoint)
        // console.log({item})
        getCart
        .then((res) => setData(res.data.products))
        .catch((err) => {console.log(err)})

        console.log({data})
    }, [endpoint])


    return [data]

} 

export default useAxios