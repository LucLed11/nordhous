import { useState } from "react"

const Contador =  ({stock = 0 , initial = 1, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)
    
        const restar = () => {
            if(quantity > 1) {
                setQuantity(quantity - 1)
            }
        }
    
        const sumar = () => {
            if(quantity < stock) {
                setQuantity(quantity+1)
            }
        }  
    
    return (

        <h2>
        {quantity}
        <span> </span>
        <button type="button" className="btn btn-outline-dark" onClick={restar}> &nbsp;-&nbsp; </button>
        <span> </span>
        <button type="button" className="btn btn-outline-dark" onClick={sumar}> &nbsp;+&nbsp; </button>
        <br></br>
        <button type="button" className="btn btn-outline-dark" onClick={() => onAdd(quantity)}>Agregar al Carrito</button>
        </h2>
    )
}

export default Contador