const Item = ({ img, name, category, price }) => {
    return (
        <div>
            <img src={img} alt={name} style={{ width: 100}}/>
            <h3>{name}</h3>
            <h5>{category}</h5>
            <p>{price}</p>
        </div>
    )
}

export default Item