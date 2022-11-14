
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
        setProducts(response)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })
}, [categoryId])

    //useEffect(() => {
    //const onResize = (e) => console.log(e)

    //window.addEventListener('Resize', onResize)

    //return () => { 
    //    window.removeEventListener('Resize', onResize)
    //    console.log('Remove Resize')
    //    }
    //}, [])

    if(loading) {
        return  <h3><br></br>Cargando...</h3>
    }

    return (
        <div>
            <br></br>
            <h2 className='display-4'>Lista de Productos</h2>
            <br></br>
            <ItemList products={products}/>
            <br></br>
        </div>
    )
}

export default ItemListContainer