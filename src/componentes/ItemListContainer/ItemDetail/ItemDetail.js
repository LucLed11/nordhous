import './ItemDetail.css'
import Contador from '../ItemList/Contador.js'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, img, name, category, description, price, stock }) => {
    
    const { addItem, isInCart } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)

        //console.log(productToAdd)
    }

    return (
        <div>
        <br></br>
        <div className="card border-dark mb-3" style={{maxWidth:500}}>
        <img className="card-img-top" src={img} alt='name'></img>
        <div className="card-header"><h3>{name}</h3></div>
            <br></br>
            <h4 className="card-title">${price}</h4>
            <br></br>
            <p className="card-text">{category}</p>
            <br></br>
            <p className="card-text">{description}</p>
            <br></br>
            <footer className='ItemFooter'>
                {
                    !isInCart(id) 
                        ? <Contador onAdd={handleOnAdd} stock={stock} />
                        : <Link to='/cart' className='Option'>Finalizar compra</Link>
                }
                
            </footer>
            <br></br>
        </div>
        </div>
    )
}

export default ItemDetail