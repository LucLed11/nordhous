const Item = ({ img, name, category, price }) => {
    return (

            <div className="card border-dark mb-3" style={{maxWidth:350}}>
                <img className="card-img-top" src={img} alt='name'></img>
                <div className="card-header"><h4>{name}</h4></div>
                    <h5 className="card-title">${price}</h5>
                    <p className="card-text">{category}</p>
                </div>
    )
}

export default Item