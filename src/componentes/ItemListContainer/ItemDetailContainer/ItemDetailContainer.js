import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    console.log(productId)

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer