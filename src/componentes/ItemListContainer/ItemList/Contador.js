import { useState } from "react"

const Contador =  ({OnAdd}) => {

    const [count, setCount] = useState(0)
    
        const restar = () => {
            if(count > 0) {
                setCount(count - 1)
            }
        }
    
        const sumar = () => {
            if(count < 5) {
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
        <button type="button" className="btn btn-outline-dark" onClick={OnAdd}>Agregar al Carrito</button>
        </h2>
    )
}

export default Contador