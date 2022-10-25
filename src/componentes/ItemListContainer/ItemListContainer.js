
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts , getProductsByCategory } from "../../asynMock"
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
    setLoading(true)

    const asyncFunction = categoryId ? getProductsByCategory : getProducts
    
    asyncFunction(categoryId).then(response => {
        console.log(response)
        setProducts(response)
    }).finally(() => {
        setLoading(false)
    })
}, [categoryId])

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