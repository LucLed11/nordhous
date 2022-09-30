import './navbar.css'
import Cart from '../CartWidget/Cart.js';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 

            <div className='color'>
                <img src='https://d2r9epyceweg5n.cloudfront.net/stores/001/101/904/themes/style/1-slide-1592509648026-3799251770-2255e10bcb1a3545ac26b3e74d16ec2c1592509648-480-0.webp?540544885' alt='...' height="50"></img>
            </div>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className='navbar-nav'>
                    
                        <a class="nav-item nav-link" href="./src/App.js">Home</a>
                        <a class="nav-item nav-link" href="./paginas/Products.js">Products</a>
                        <a class="nav-item nav-link" href="./paginas/AboutUs.js">About Us</a>
                        <a class="nav-item nav-link" href="./paginas/ContacUs.js">Contact Us</a>

                </div>
            </div>
            <Cart />
        </nav>
    )
}

export default Navbar;