import './cart.css';
import img from './assets/cartimg.jpg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'


const CartWidget = () => {

    const { TotalQuantity } = useContext (CartContext)

    const navigate = useNavigate()

    return(
        <button to='/cart' type="button" className="btn btn-secondary" onClick={() => navigate('/cart')}>
            <img src={img} alt='cart-widget' className='colorcart'/>
            {TotalQuantity}
        </button>
    );
}

export default CartWidget