import { useState } from "react"

const Contador =  ({stock = 0 , initial = 1, OnAdd}) => {

    const [count, setCount] = useState(initial)
    
        const restar = () => {
            if(count > 1) {
                setCount(count - 1)
            }
        }
    
        const sumar = () => {
            if(count < stock) {
                setCount(count + 1)
            }
        }  
    
    return (

        <h2>
        {count}
        <span> </span>
        <button type="button" className="btn btn-outline-dark" onClick={restar}> &nbsp;-&nbsp; </button>
        <span> </span>
        <button type="button" className="btn btn-outline-dark" onClick={sumar}> &nbsp;+&nbsp; </button>
        <br></br>
        <button type="button" className="btn btn-outline-dark" onClick={() => OnAdd(count)}>Agregar al Carrito</button>
        </h2>
    )
}

export default Contador