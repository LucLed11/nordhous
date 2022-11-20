import './ItemDetail.css'
import Contador from '../ItemList/Contador.js'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../../../notification/NotificationService'

const ItemDetail = ({ id, img, name, category, description, price, stock }) => {
    
    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    
    const handleOnAdd = (quantity) => {

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd, quantity)
        setNotification('success', `Producto Agregado ${quantity} ${name}`)

        //console.log(productToAdd)
    }

    const quantityAdded = getProductQuantity(id)

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
            { stock !== 0 ? <Contador onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />: <p>No hay stock</p>}
                {
                    !isInCart(id) && <Link to='/Cart' type="button" className="btn btn-secondary">Finalizar compra</Link>
                }
                
            </footer>
            <br></br>
        </div>
        </div>
    )
}

export default ItemDetail