
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../asynMock"
import ItemList from './ItemList/ItemList'

const ItemListContainer = ({ greeting  }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = 

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
       
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [])

    if(loading) {
        return <h3>Cargando...</h3>
    }

    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            <h2>Lista de Productos</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer