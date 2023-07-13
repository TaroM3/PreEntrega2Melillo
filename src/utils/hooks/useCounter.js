import { useState } from "react";

const useCounter = ( initial=0, max ) => {
    const [counter, setCounter] = useState(initial)

    const add = () => {
        counter < max  && setCounter(counter + 1)
    }

    const substract = () => {
        counter > initial && setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(initial)
    }

    return { add, substract, reset, counter }
}

export default useCounter;