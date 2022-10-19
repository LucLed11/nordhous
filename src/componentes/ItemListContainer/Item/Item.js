import { Link } from 'react-router-dom'

const Item = ({ id, img, name, category, price }) => {
    return (
            
            <div className="card border-dark mb-3" style={{maxWidth:350}}>
                <img className="card-img-top" src={img} alt='name'></img>
                <div className="card-header"><h4>{name}</h4></div>
                    <br></br>
                    <h5 className="card-title">${price}</h5>
                    <br></br>
                    <p className="card-text">{category}</p>
                    <br></br>
                    <p>
                    <Link to={`/detail/${id}`} className='link-primary'>Ver Más</Link>
                    </p>
                </div>
    )
}

export default Item