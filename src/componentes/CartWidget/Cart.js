import './cart.css';
import img from './assets/cartimg.jpg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'


const Cart = () => {

    const { TotalQuantity } = useContext (CartContext)

    return (
        <Link to='/cart' className='colorcart'>
            <img src={img} alt='img' height="40"></img>
            {TotalQuantity}
        </Link>
    )
}

export default Cart