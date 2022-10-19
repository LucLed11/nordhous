
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from "../../asynMock"
import ItemList from './ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    setLoading(true)
    
    getProducts().then(response => {
        console.log(response)
        setProducts(response)
    }).finally(() => {
        setLoading(false)
    })
}, [])

    if(loading) {
        return  <h3><br></br>Cargando...</h3>
    }

    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            <br></br>
            <h2 className='display-4'>Lista de Productos</h2>
            <br></br>
            <ItemList products={products}/>
            <br></br>
        </div>
    )
}

export default ItemListContainer