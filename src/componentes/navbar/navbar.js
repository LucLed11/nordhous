import './navbar.css'
import Cart from '../CartWidget/CartWidget.js'
import { NavLink } from 'react-router-dom'
import Logo from '../logo'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
            <NavLink to='/'>
                <Logo/>
            </NavLink>

            <div className='color'>
            </div>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className='navbar-nav'>
                    
                        <a className="nav-item nav-link" href="./src/App.js">Home</a>
                        <a className="nav-item nav-link" href="./paginas/Products.js">Products</a>
                        <a className="nav-item nav-link" href="./paginas/AboutUs.js">About Us</a>
                        <a className="nav-item nav-link" href="./paginas/ContacUs.js">Contact Us</a>
                </div>

                <div className='navbar-nav'>
                    &n%&n%&n%&n%&n%&n%<div className='text-white' >Categorías : </div>&n%&
                </div>    
                <div className='navbar-nav'>
                        <NavLink to={'/category/Muebles'} className={({ isActive}) => isActive ? 'nav-item nav-link' : 'nav-item nav-link'}>Muebles</NavLink>
                        <NavLink to={'/category/Lámparas'} className={({ isActive}) => isActive ? 'nav-item nav-link' : 'nav-item nav-link'}>Lámparas</NavLink>
                        <NavLink to={'/category/Aromatizador'} className={({ isActive}) => isActive ? 'nav-item nav-link' : 'nav-item nav-link'}>Aromatizadores</NavLink>
                </div>

           </div>
            <Cart />
        </nav>
    )
}

export default Navbar;