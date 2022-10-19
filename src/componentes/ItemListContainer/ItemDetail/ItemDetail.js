import './ItemDetail.css'
import Contador from '../ItemList/Contador.js'

const ItemDetail = ({ id, img, name, category, description, price, stock }) => {
    const handleOnAdd = (count) => {
        const productToAdd = {
            id, name, price, count
        }
        console.log(productToAdd)
    }

    return (
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
            <Contador onAdd={handleOnAdd} stock={stock}/>
            <br></br>
        </div>
    )
}

export default ItemDetail